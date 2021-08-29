import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PlayerFormComponent } from './components/players/player-form/player-form.component';
import { PlayersListingComponent } from './components/players/players-listing/players-listing.component';
import { TeamDetailsComponent } from './components/teams/team-details/team-details.component';
import { TeamFormComponent } from './components/teams/team-form/team-form.component';
import { TeamsListingComponent } from './components/teams/teams-listing/teams-listing.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'teams',component:TeamsListingComponent},
  {path:'teams/details/:id',component:TeamDetailsComponent},
  {path:'teams/:id',component:TeamFormComponent},
  {path:'players',component:PlayersListingComponent},
  {path:'players/:id',component:PlayerFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
