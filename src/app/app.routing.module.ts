import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'delivery',
        loadChildren:() => import("./modules/modules.module").then(m => m.ModulesModule)
    },
    {
        path:"**",
        redirectTo:'delivery'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule { }
