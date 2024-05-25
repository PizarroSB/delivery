import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Departments } from '../../interfaces/department';
import { DeliveryService } from '../../services/delivery.service';
import { City } from '../../interfaces/city';
import { Subscription } from 'rxjs';
import { Delivery } from '../../interfaces/deliveryRegistry';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit, OnDestroy {

  @Output() delivery:EventEmitter<Delivery> = new EventEmitter
  ngOnInit(): void {
    this.getAllDepartments()
    console.log("Ejecuto consulta desde oninit")
  }

  selectDepartment:Departments[] = []
  selectCity:City[] = []
  serviceDepartmentSuscription:Subscription = new Subscription
  serviceCitySuscription:Subscription = new Subscription
  enableButtonDate:boolean = false

  form:FormGroup = new FormGroup({
    department: new FormControl(null,Validators.required),
    city: new FormControl(null,Validators.required),
    delivery: new FormControl('',Validators.required),
    name:new FormControl('',Validators.required)
  })

  constructor(private serviceDelivery:DeliveryService){
    console.log("desde ServiceDelivery")
  }
  ngOnDestroy(): void {
    console.log("mato las suscriptions desde el destroy")
    this.serviceDepartmentSuscription.unsubscribe()
    this.serviceCitySuscription.unsubscribe()
  }

  getAllDepartments(){
    if(this.serviceDelivery.getBehaviorDepartment().length === 0){
      this.serviceDepartmentSuscription = this.serviceDelivery.getAllDepartments().subscribe({
        next:(data:Departments[]) => {
          this.selectDepartment = data
          this.serviceDelivery.setBehaviorDepartment(data)
        },
        error:(ex) => {
          console.log(ex)
        }
      })
      return
    }
    console.log("BEHAVIOR DEPARTMENT!!!")
    this.selectDepartment = this.serviceDelivery.getBehaviorDepartment()
  }

  getCity(){
    this.enableButtonDate = false
    this.serviceCitySuscription = this.serviceDelivery.getCitysByDepartment(this.form.value.department).subscribe({
      next:(data:City[]) => {
        this.selectCity = data

      },
      error:(ex) => {
        console.log(ex)
      }
    })
  }

  emitDelivery(){
    let deliver:Delivery = {
      departmentId:this.form.value.department,
      city:this.form.value.city,
      name:this.form.value.name,
      delivery:this.form.value.delivery
    }
    console.log(deliver)
    this.delivery.emit(deliver)
    this.form.reset()
    this.enableButtonDate = true
  }

}
