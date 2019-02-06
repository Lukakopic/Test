import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  public players = []
  table;

  constructor( private _playersService: PlayersService) { }

  ngOnInit() {
    this._playersService.getPlayers()
        .subscribe(data => this.players = data); 
  }

}
