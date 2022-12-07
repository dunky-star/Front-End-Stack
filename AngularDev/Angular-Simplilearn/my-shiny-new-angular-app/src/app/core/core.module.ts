import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorePipesPipe } from './core-pipes.pipe';
import { CoreDirectiveDirective } from './core-directive.directive';
import { CounterActionsComponent } from './counter-actions/counter-actions.component';



@NgModule({
  declarations: [HeaderComponent, CorePipesPipe, CoreDirectiveDirective, CounterActionsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [HeaderComponent, CorePipesPipe, CoreDirectiveDirective, CounterActionsComponent ]
})
export class CoreModule { }
