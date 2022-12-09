import { Component, OnInit } from '@angular/core';
import { PlayerService } from '@core/services/player.service';
import { Player } from '@models/player.model';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {


  firstName = "";
  players: Array<Player> = [
  ]

  constructor(private readonly playerService: PlayerService) { }

  ngOnInit(): void {
    this.getListTodo();
  }


  getListTodo() {
    this.playerService.getPlayers().subscribe(resp => {
      this.players = resp;
    });
  }

}
