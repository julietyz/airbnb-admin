import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { ServiceProvidersComponent } from './components/service-providers/service-providers.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    //UserComponent,
    UsersComponent,
    ServiceProvidersComponent,
    DashBoardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
