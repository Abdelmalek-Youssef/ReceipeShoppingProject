import { Component, OnInit } from '@angular/core';
import { Receipe } from '../Receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceiptListComponent implements OnInit {
  receipeList : Receipe[] = [
  new Receipe('Couscous',
  'This is a tunisian traditional food it is a must to try food if you ever go to Tunisia',
  'https://static.cuisineaz.com/610x610/i68325-couscous-et-sa-sauce.jpg'),
  new Receipe('Couscous',
  'This is a tunisian traditional food it is a must to try food if you ever go to Tunisia',
  'https://static.cuisineaz.com/610x610/i68325-couscous-et-sa-sauce.jpg')
];

  constructor() { }

  ngOnInit() {
  }

}
