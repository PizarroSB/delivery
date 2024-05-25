import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { DireccionEntregaPageComponent } from './pages/direccion-entrega-page/direccion-entrega-page.component';
import { FechaEntregaPageComponent } from './pages/fecha-entrega-page/fecha-entrega-page.component';
import { HomeComponent } from './pages/home/home.component';
import { ModulesRoutinModule } from './modules.routing.module';
import { SharedModule } from '../shared/shared.module';
import { DeliveryDateComponent } from './components/delivery-date/delivery-date.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DeliveryComponent,
    DeliveryDateComponent,
    DireccionEntregaPageComponent,
    FechaEntregaPageComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutinModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class ModulesModule { }
