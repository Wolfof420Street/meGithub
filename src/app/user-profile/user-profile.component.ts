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
  public nameToSearch = 'Wolfof420Sreet';
  public newName;
  repos:Repos;
  public resultCount = 10;

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
  searchRepos(name){
    this.newName = "";
    for(var i=0;i<name.length;i++){
      if(name.charAt(i)===" "){
        this.newName = this.newName.concat("+");
      } else if(name.charAt(i)!==" "){
        this.newName = this.newName.concat(name.charAt(i))
      }
    }
    this.resultCount=10;    
    console.log(this.newName);
    this.ngOnInit();
    this.searchRepos(Repos)
  }
  loadMore(){
    this.resultCount+=10;
    this.ngOnInit();
    this.searchRepos(Repos);
  }
  constructor(public gitUserRequests:SearchService,public gitUserRepos:SearchService) { }

  ngOnInit() {
    this.resultCount = 1;
    this.gitUserRepos.newRepo(this.newName,this.resultCount);
    console.log(this.newName);
   }

}
