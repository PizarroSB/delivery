import { Component } from '@angular/core';
import { Delivery } from '../../interfaces/deliveryRegistry';
import { DeliveryService } from '../../services/delivery.service';

@Component({
  selector: 'app-direccion-entrega-page',
  templateUrl: './direccion-entrega-page.component.html',
  styleUrls: ['./direccion-entrega-page.component.css']
})
export class DireccionEntregaPageComponent {

  constructor(private serviceDelivery:DeliveryService){}

  setDireccion(delivery:Delivery){
    let deliveryBehavior:Delivery | null = this.serviceDelivery.getDelivery() 
    if(deliveryBehavior != null){
      deliveryBehavior.city = delivery.city
      deliveryBehavior.delivery = delivery.delivery
      deliveryBehavior.name = delivery.name
      deliveryBehavior.departmentId = delivery.departmentId

      this.serviceDelivery.setDelivery(deliveryBehavior)

      return
    }
    this.serviceDelivery.setDelivery(delivery)
  }
}
