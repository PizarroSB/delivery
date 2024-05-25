import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Delivery } from '../../interfaces/deliveryRegistry';

@Component({
  selector: 'app-delivery-date',
  templateUrl: './delivery-date.component.html',
  styleUrls: ['./delivery-date.component.css']
})
export class DeliveryDateComponent {
  @Output() delivery:EventEmitter<Delivery> = new EventEmitter
  
  formDate:FormGroup = new FormGroup({
    dateDelivery: new FormControl('',Validators.required)
  })

  emitDelivery(){
    let deliver:Delivery = {
      dateTime:this.formDate.value.dateDelivery,
    }
    console.log(deliver)
    this.delivery.emit(deliver)
    this.formDate.reset()
  }
}
