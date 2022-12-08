import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Player } from '@models/player.model';
import { environment } from 'src/environments/environment';
import { UpdatedResponse } from '@models/updated-response.model';
import { DeletedResponse } from '@models/deleted-response.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private url =  `${environment.apiPlayer}/player`;
  private idAuthor = 18;
  constructor(
    private _http: HttpClient
  ) { }

  getPlayers(): Observable<Player[]> {
    let params = new HttpParams();
    params = params.append('author', 18);

    return this._http.get(this.url,).pipe(map(res => res as Player[]))
  }

  savePlayer(player: Player): Observable<Player> {
    player.idAuthor = this.idAuthor;
    let params = new HttpParams();
    params = params.append('author', 18);

    return this._http.post(this.url, player).pipe(map(res => res as Player))
  }

  editPlayer(player: Player): Observable<UpdatedResponse> {
    const url = `${this.url}/${player.id}`
    return this._http.patch(url, player).pipe(map(res => res as UpdatedResponse))
  }

  deletePlayer(player: Player): Observable<DeletedResponse> {
    const url = `${this.url}/${player.id}`
    return this._http.delete(url).pipe(map(res => res as DeletedResponse))
  }
}
