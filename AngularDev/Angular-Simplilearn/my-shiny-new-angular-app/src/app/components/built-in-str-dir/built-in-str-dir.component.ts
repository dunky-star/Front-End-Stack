import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-str-dir',
  templateUrl: './built-in-str-dir.component.html',
  styleUrls: ['./built-in-str-dir.component.css']
})
export class BuiltInStrDirComponent {

  showList: boolean = true;

  messages: string[] = [
    "Message 1",
    "Message - where is Gulu?",
    "Message 3 - where is Kampala?",
    "Message 4 - come to Gulu.",
    "Message 5 - Come to Kampala.",
    "Message 6 - I have gone to Gulu."
  ];

  // using Angular pipes for output decorations.
  dateToday: string = new Date().toDateString();





}
