import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class ActionneurDataService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient , private endpoint : EndpointService) { }
  create (actionneur: any ){
 
   return this.http.post (this.endpoint.url + 'actionneur/add',actionneur );
  }
 
  getall ( ){
 
   return this.http.get(this.endpoint.url + 'actionneur/all');
  }
 
  getbyid ( id: any ){
 
   return this.http.get (this.endpoint.url + 'actionneur/getbyid/' + id);
  }
 
  delete ( id: any ){
 
   return this.http.delete (this.endpoint.url + 'actionneur/delete/' + id);
  }
 
  update ( id: any , actionneur:any){
    
   return this.http.put (this.endpoint.url + 'actionneur/update/' +id, actionneur);
  }
 
 
}
