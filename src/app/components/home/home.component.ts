import { Component, OnInit } from '@angular/core';
import { KnightService } from '../../services/knight.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  knights: any[] = [];
  loading: boolean;
  error: boolean;
  messageError: string;

  constructor(private knight: KnightService) {
    this.error = false;
    this.loading = true;

    this.knight.getKnights()
      .subscribe((res: any) => {
          this.knights = res;
          this.loading = false;
      });
   }

  ngOnInit(): void {
  }

}
