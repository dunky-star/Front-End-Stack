import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter-actions',
  templateUrl: './counter-actions.component.html',
  styleUrls: ['./counter-actions.component.css']
})
export class CounterActionsComponent {
  @Input()
  counter!: number;
  @Output() counterChange: EventEmitter<number> = new EventEmitter<number>();

  constructor(){}

  handleButton(operation: string){
    operation === 'INC' ? this.counter++ : this.counter--;
    this.counterChange.emit(this.counter);
  }

}
