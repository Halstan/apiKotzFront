import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KnightService {

  constructor(private http: HttpClient) { }

  getQuery(query: string = ''): Observable<object> {
    const url = `https://kotz-api.herokuapp.com/caballeros${query}`;
    return this.http.get(url);
  }

  getKnights(): Observable<object>{
    return this.getQuery();
  }

  getKnight(id: string): Observable<object>{
    return this.getQuery(`/${id}`);
  }

  getKnightByArmor(armor: string): Observable<object>{
    return this.getQuery(`/armadura/${armor}`);
  }

  getKnightByGod(god: string): Observable<object>{
    return this.getQuery(`/dios/${god}`);
  }
}
