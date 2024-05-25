import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../../services/delivery.service';
import { Delivery } from '../../interfaces/deliveryRegistry';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  delivery:Delivery | null = null
  constructor(private serviceDelivery:DeliveryService){}
  ngOnInit(): void {
    this.getDelivery();
  }

  
  getDelivery(){
    this.delivery = this.serviceDelivery.getDelivery()
    console.log("HOME",this.delivery)
  }

}
