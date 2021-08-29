import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/core/models/player.model';

@Component({
  selector: 'app-players-listing',
  templateUrl: './players-listing.component.html',
  styleUrls: ['./players-listing.component.css']
})
export class PlayersListingComponent implements OnInit {

  // TO BE DELETE STATIC DATA
  players: Player[] = [
    {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      name: "string11111",
      nationaity: "string",
      dateOfBirth: new Date("2021-08-29T20:31:10.508Z"),
      image: "string",
      teamId: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    },
    {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      name: "string2222",
      nationaity: "string",
      dateOfBirth: new Date("2021-08-29T20:31:10.508Z"),
      image: "string",
      teamId: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
