import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/core/models/team.model';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  team:Team = {
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
      },
      {
        id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        name: "string2",
        nationaity: "string",
        dateOfBirth: new Date("2021-08-29T19:48:34.820Z"),
        image: "string",
        teamId: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
