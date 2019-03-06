import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { PlayersComponent } from './players/players.component';
import { PlayersService } from './services/players.service';
import { HttpClientModule } from '@angular/common/http';
import { BestOfBestComponent } from './best-of-best/best-of-best.component';
import { LogInComponent } from './log-in/log-in.component';
import { CroatianLeagueComponent } from './All-leagues/croatian-league/croatian-league.component';
import { SpanishLeagueComponent } from './All-leagues/spanish-league/spanish-league.component';
import { GermanLeagueComponent } from './All-leagues/german-league/german-league.component';
import { FrenchLeagueComponent } from './All-leagues/french-league/french-league.component';
import { NationalTeamsComponent } from './national-teams/national-teams.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';




  

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    SignUpComponent,
    AboutComponent,
    HomeComponent,
    PlayersComponent,
    BestOfBestComponent,
    LogInComponent,
    CroatianLeagueComponent,
    SpanishLeagueComponent,
    GermanLeagueComponent,
    FrenchLeagueComponent,
    NationalTeamsComponent,
    PageNotFoundComponent,
   
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'players', component: PlayersComponent },
      { path: 'best-of-the-best', component: BestOfBestComponent },
      { path: 'league/croatian-league', component: CroatianLeagueComponent },
      { path: 'league/french-league', component: FrenchLeagueComponent },
      { path: 'league/german-league', component: GermanLeagueComponent },
      { path: 'league/spanish-league', component: SpanishLeagueComponent },
      { path: 'national-teams', component: NationalTeamsComponent },
      { path: '**', component: PageNotFoundComponent },
      
    ])

  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
