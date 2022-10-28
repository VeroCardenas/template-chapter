import { Component, OnInit } from '@angular/core';
import { PlayerService } from '@core/services/player.service';
import { Player } from '@models/player.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  filterWord = "";
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
