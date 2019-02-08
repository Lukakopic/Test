import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { IPlayers } from '../players/players';



@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  table;
  private _url: string = "http://localhost:62377/api/sviigraci"
  constructor(private http: HttpClient) {
    //http.get("http://localhost:62377/api/sviigraci").subscribe(data => this.table = data)
  }

  getPlayers() : Observable<IPlayers[]> {
    return this.http.get<IPlayers[]>(this._url);
    
  }

  
  }

