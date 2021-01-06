import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient
  ) { }

  //obtiene los datos del API 
  getData(): any {
    return this.http.get("https://jsonplaceholder.typicode.com/todos");
  }

}
