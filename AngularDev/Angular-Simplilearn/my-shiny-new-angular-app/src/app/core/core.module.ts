import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorePipesPipe } from './core-pipes.pipe';
import { CoreDirectiveDirective } from './core-directive.directive';
import { CounterActionsComponent } from './counter-actions/counter-actions.component';
import { CoreAppComponent } from './core-app/core-app.component';



@NgModule({
  declarations: [ CorePipesPipe, CoreDirectiveDirective, CounterActionsComponent, CoreAppComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ CorePipesPipe, CoreDirectiveDirective, CounterActionsComponent ]
})
export class CoreModule {

}
