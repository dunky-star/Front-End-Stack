import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit{
  // Creates an array of object.
  SalesPersonList: SalesPerson[] = [
    new SalesPerson("Dunky", "Geoffrey", "geoffrey@mail.com", 10000),
    new SalesPerson("Claire", "Murhy", "claire@mail.com", 60000),
    new SalesPerson("Hector", "Kaligs", "hector@mail.com", 80000),
    new SalesPerson("Mai", "Kay", "kay@mail.com", 50000)

  ]

  constructor(){}

  ngOnInit(){

  }

}
