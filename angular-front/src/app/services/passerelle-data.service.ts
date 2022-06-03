import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class PasserelleDataService {


  constructor(private http: HttpClient , private endpoint : EndpointService) { }
  create (passerelle: any ){
 
   return this.http.post (this.endpoint.url + 'passerelle/add',passerelle );
  }
 
  getall ( ){
 
   return this.http.get(this.endpoint.url + 'passerelle/all');
  }
 
  getbyid ( id: any ){
 
   return this.http.get (this.endpoint.url + 'passerelle/getbyid/' + id);
  }
 
  delete ( id: any ){
 
   return this.http.delete (this.endpoint.url + 'passerelle/delete/' + id);
  }
 
 
  update ( id: any , passerelle:any){
 
   return this.http.put (this.endpoint.url + 'passerelle/update/' +id, passerelle);
  }
 
 
}