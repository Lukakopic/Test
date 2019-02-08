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



  

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    SignUpComponent,
    AboutComponent,
    HomeComponent,
    PlayersComponent,
    
   
   
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
      { path: 'players',component: PlayersComponent }
    ])

  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
