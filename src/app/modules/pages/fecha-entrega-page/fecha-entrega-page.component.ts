import { Component } from '@angular/core';
import { DeliveryService } from '../../services/delivery.service';
import { Delivery } from '../../interfaces/deliveryRegistry';

@Component({
  selector: 'app-fecha-entrega-page',
  templateUrl: './fecha-entrega-page.component.html',
  styleUrls: ['./fecha-entrega-page.component.css']
})
export class FechaEntregaPageComponent {
  constructor(private serviceDelivery:DeliveryService){}

  setDateTime(delivery:Delivery){
    console.log("fecha y hora llego",delivery)
    let deliveryBehavior:Delivery | null = this.serviceDelivery.getDelivery() 
    if(deliveryBehavior != null){
      deliveryBehavior.dateTime = delivery.dateTime
      this.serviceDelivery.setDelivery(deliveryBehavior)
      return
    }
    this.serviceDelivery.setDelivery(delivery)
  }

}
