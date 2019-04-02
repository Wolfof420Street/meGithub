import { Component, OnInit } from '@angular/core';
import {Users} from '../users'
import {Repos} from '../repos'
import {SearchService} from '../user-profile/search.service' 
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [SearchService]
})
export class UserProfileComponent implements OnInit {
  public nameToSearch = 'Wolfof420STreet';
  public newName;
  users:Users;
  repo=[Repos]
  searchUser(name){
    this.newName='';
    for(var i=0;i<name.length;i++){
      if(name.charAt(i)===" "||name.charAt(i)==="?"||name.charAt(i)==="/"){
      alert(`Error!. Username is Invalid`);
      this.newName = 'Wolfof420Street';
      break;
      }else if(name.charAt(i)!==" "||name.charAt(i)!=="?"||name.charAt(i)!=="/"){
        this.newName = this.newName.concat(name.charAt(i));
        console.log(name.charAt(i));
      } 
    }
    this.nameToSearch=this.newName;
    console.log(this.newName);
    this.ngOnInit();
  }
  constructor(public gitUserRequests:SearchService,public gitUserRepos:SearchService) { }

  ngOnInit() {
    
  }

}
