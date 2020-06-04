import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor( private http: HttpClient) { }

  public login(username:string, password:string){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get("http://localhost:9098/",{headers,responseType: 'text' as 'json'});
  }

  getUsers() {
        let username='Niki'
        let password='0507'
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
       return  this.http.get("http://localhost:8080/getUsers",{headers});
      }

}
