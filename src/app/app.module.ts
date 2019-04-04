import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import {RoutingModule} from './routing/routing.module'
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LastNamePipe } from './last-name.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    NotFoundComponent,
    LastNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RoutingModule,
    NgProgressModule,
    NgProgressHttpModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
