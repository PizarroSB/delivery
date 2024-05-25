import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavsComponent } from './components/navs/navs.component';
import { RouterModule } from '@angular/router';
import { HoverColorDirective } from './directives/hover-color.directive';



@NgModule({
  declarations: [
    NavsComponent,
    HoverColorDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavsComponent,
    HoverColorDirective
  ]
})
export class SharedModule { }
