import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Users} from '../users';
import {Repos} from '../repos';
import { resolve } from 'url';
import { reject } from 'q'

@Injectable()
export class SearchService {
  users: Users
  repos: Repos
  newRepo:any;
  searchRepo:any;

  constructor(private http:HttpClient) {
    this.users = new Users ("","","","",0,false,new Date(),0,0);
    this.repos = new Repos("","","",new Date())
   }
}
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
  