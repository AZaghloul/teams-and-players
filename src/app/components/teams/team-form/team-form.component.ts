import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css']
})
export class TeamFormComponent implements OnInit {

  teamForm: FormGroup;

  constructor(private router: Router,public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // ADD
    this.teamForm = new FormGroup({
      name: new FormControl(''),
      country: new FormControl(''),
      foundationDate: new FormControl(''),
      coachName: new FormControl(''),
      logoImage: new FormControl(''),
    })
  }

  // name: "string",
  //   country: "string",
  //   foundationDate: new Date("2021-08-29T19:48:34.820Z"),
  //   coachName: "string",
  //   logoImage: "string",
  //   players: [
  //     {
  //       id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //       name: "string",
  //       nationaity: "string",
  //       dateOfBirth: new Date("2021-08-29T19:48:34.820Z"),
  //       image: "string",
  //       teamId: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  //     }
  //   ]

}
