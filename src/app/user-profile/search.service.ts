import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Users} from '../users';
import {Repos} from '../repos';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  users: Users
  repos: Repos

  constructor(private http:HttpClient) {
    this.users = new Users ("","","","",0,false,new Date(),0,0);
    this.repos = new Repos("","","",new Date())
   }
}
User(searchName){
  interface ApiResponse{
    name:string;
    login:string;
    avatar_url:string;
    html_url:string;
    public_repos:number;
    hireable:boolean;
    created_at:Date;
    followers:number;
    following:number;      
  }
