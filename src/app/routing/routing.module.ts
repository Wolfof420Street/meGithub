import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'
import {NotFoundComponent} from '../not-found/not-found.component'

import {UserProfileComponent} from '../user-profile/user-profile.component'

const routes:Routes=[
  {path:"user-profile",component:UserProfileComponent},
  {path:'**',component:NotFoundComponent},
  {path:"",redirectTo:"/user-profile",pathMatch:"full"},
]

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
      ]
})
export class RoutingModule { }
