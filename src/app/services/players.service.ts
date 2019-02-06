import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPlayer } from '../players';
import { Observable } from 'rxjs';
import { Player } from '@angular/core/src/render3/interfaces/player';



@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private _url: string = "http://localhost:62377/api/sviigraci";

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<IPlayer[]> {
    return this.http.get<IPlayer[]>(this._url);  
  }
}
