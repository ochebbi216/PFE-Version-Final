import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class CapteurDataService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient , private endpoint : EndpointService) { }
  create (capteur: any ){
 
   return this.http.post (this.endpoint.url + 'capteur/add',capteur );
  }
 
  getall ( ){
 
   return this.http.get(this.endpoint.url + 'capteur/all');
  }
 
  getbyid ( id: any ){
 
   return this.http.get (this.endpoint.url + 'capteur/getbyid/' + id);
  }
 
  delete ( id: any ){
 
   return this.http.delete (this.endpoint.url + 'capteur/delete/' + id);
  }
 
 
  update ( id: any , capteur:any){
 
   return this.http.put (this.endpoint.url + 'capteur/update/' +id, capteur);
  }
 
   // Error handling
  //  errorMgmt(error: HttpErrorResponse) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // Get client-side error
  //     errorMessage = error.error.message;
  //   } else {
  //     // Get server-side error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   console.log(errorMessage);
  //   return throwError(() => {
  //     return errorMessage;
  //   });
  // }
}
