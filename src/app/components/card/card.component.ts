import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent{

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  showKnight(item: any): void{

    let knightId;

    if (item.type === 'knight'){
      knightId = item.id;
    }

  }

}
