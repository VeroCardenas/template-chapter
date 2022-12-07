import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Position } from '@models/position.model';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  private url = `${environment.apiPlayer}/position`

  constructor(
    private _http: HttpClient,
  ) { }

  getPosition(): Observable<Position[]> {

    return this._http.get(this.url,).pipe(map(res => res as Position[]))
  }
}
