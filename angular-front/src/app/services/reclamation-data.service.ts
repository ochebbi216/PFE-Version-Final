

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class ReclamationDataService {

  constructor(private http: HttpClient , private endpoint : EndpointService) { }
  create (reclamation: any ){
 
   return this.http.post (this.endpoint.url + 'reclamation/',reclamation );
  }
 
  getall ( ){
 
   return this.http.get(this.endpoint.url + 'reclamation/all');
  }
 
  getbyid ( id: any ){
 
   return this.http.get (this.endpoint.url + 'reclamation/getbyid/' + id);
  }
 
  delete ( id: any ){
 
   return this.http.delete (this.endpoint.url + 'reclamation/delete/' + id);
  }
 
 
  update ( id: any , reclamation:any){
 
   return this.http.put (this.endpoint.url + 'reclamation/update/' +id, reclamation);
  }
 
 
}

