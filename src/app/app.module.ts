import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { TeamsListingComponent } from './components/teams/teams-listing/teams-listing.component';
import { CommonModule } from '@angular/common';
import { TeamFormComponent } from './components/teams/team-form/team-form.component';
import { PlayersListingComponent } from './components/players/players-listing/players-listing.component';
import { PlayerFormComponent } from './components/players/player-form/player-form.component';
import { TeamDetailsComponent } from './components/teams/team-details/team-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    TeamsListingComponent,
    TeamFormComponent,
    PlayersListingComponent,
    PlayerFormComponent,
    TeamDetailsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
