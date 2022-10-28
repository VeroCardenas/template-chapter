
import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from '@core/services/player.service';
import { Player } from '@models/player.model';


@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

  @Input() player!: Player;

  constructor(private readonly playerService: PlayerService) { }

  ngOnInit(): void {
  }

  onClickDelete(){
    this.playerService.deletePlayer(this.player).subscribe(res => {
      console.log("usuairo eliminado")
    })
  }


  onClickEdit(){

  }
}
