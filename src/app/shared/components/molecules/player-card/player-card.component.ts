
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlayerService } from '@core/services/player.service';
import { Player } from '@models/player.model';


@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

  @Input() player!: Player;
  @Output() playerDeleted: EventEmitter<number> = new EventEmitter();

  constructor(private readonly playerService: PlayerService) { }

  ngOnInit(): void {
  }

  onClickDelete() {
    this.playerService.deletePlayer(this.player).subscribe(res => {
      this.playerDeleted.emit(res.affected);
    })
  }


  onClickEdit() {

  }
}
