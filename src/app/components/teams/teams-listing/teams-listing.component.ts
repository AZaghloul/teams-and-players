import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/core/models/team.model';

@Component({
  selector: 'app-teams-listing',
  templateUrl: './teams-listing.component.html',
  styleUrls: ['./teams-listing.component.css']
})
export class TeamsListingComponent implements OnInit {

  // TO DELETE STATIC DATA
  teams:Team[] =[ {
    name: "string",
    country: "string",
    foundationDate: new Date("2021-08-29T19:48:34.820Z"),
    coachName: "string",
    logoImage: "string",
    players: [
      {
        id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        name: "string",
        nationaity: "string",
        dateOfBirth: new Date("2021-08-29T19:48:34.820Z"),
        image: "string",
        teamId: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      }
    ]
  },
  {
    name: "string11111",
    country: "string222222",
    foundationDate: new Date("2021-08-29T19:48:34.820Z"),
    coachName: "string",
    logoImage: "string",
    players: [
      {
        id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        name: "string",
        nationaity: "string",
        dateOfBirth: new Date("2021-08-29T19:48:34.820Z"),
        image: "string",
        teamId: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      }
    ]
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
