import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorePipesPipe } from './core-pipes.pipe';
import { CoreDirectiveDirective } from './core-directive.directive';



@NgModule({
  declarations: [HeaderComponent, CorePipesPipe, CoreDirectiveDirective],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, CorePipesPipe, CoreDirectiveDirective ]
})
export class CoreModule { }
