import { Component } from '@angular/core';
import { KnightService } from '../../services/knight.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent{

  knight: any = {};
  loading: boolean;
  error: boolean;
  messageError: string;

  constructor(private knightS: KnightService) { }

  buscar(id: string){
    this.loading = true;

    this.knightS.getKnight(id)
        .subscribe((res: any) => {
          this.knight = res;
          this.error = false;
          this.loading = false;
        }, (err) => {
            this.loading = false;
            this.error = true;
            this.messageError = err.error.message;
        });
  }


}
