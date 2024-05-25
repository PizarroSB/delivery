import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DireccionEntregaPageComponent } from './pages/direccion-entrega-page/direccion-entrega-page.component';
import { FechaEntregaPageComponent } from './pages/fecha-entrega-page/fecha-entrega-page.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path:'direccionEntrega',
        component:DireccionEntregaPageComponent
    },
    {
        path:'FechaEntrega',
        component:FechaEntregaPageComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'**',
        redirectTo:'home'
    }

]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],

})
export class ModulesRoutinModule { }
