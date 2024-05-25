import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Departments } from '../interfaces/department';
import { City } from '../interfaces/city';
import { Delivery } from '../interfaces/deliveryRegistry';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  private departmentBehavior:BehaviorSubject<Departments[] | []> = new BehaviorSubject<Departments[] | []>([])
  departmentBehavior$ = this.departmentBehavior.asObservable();

  private deliveryBehavior:BehaviorSubject<Delivery | null> = new BehaviorSubject<Delivery | null>(null)


  private url = environment.URL
  constructor(private httpClient:HttpClient) { }

  //DEPARTMENT
  setBehaviorDepartment(department:Departments[]){
    this.departmentBehavior.next(department)
  }

  getBehaviorDepartment(){
    return this.departmentBehavior.getValue()
  }
  getAllDepartments():Observable<Departments[]>{
    return this.httpClient.get<Departments[]>(`${this.url}/Department`)
  }
  
  getCitysByDepartment(idDep:number):Observable<City[]>{
    return this.httpClient.get<City[]>(`${this.url}/Department/${idDep}/cities`)
  }

  //GET DELIVERY

  setDelivery(delivery:Delivery){
    this.deliveryBehavior.next(delivery)
  }

  getDelivery(){
    return this.deliveryBehavior.getValue()
  }

  


}
