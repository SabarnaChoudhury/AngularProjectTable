import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  http;
  constructor(http: HttpClient) {
    this.http=http;
  }
  getToDos(){
    return this.http.get("https://jsonblob.com/api/e9d3d0f4-0854-11eb-a3c1-f38ea6f1632a");
  }

  
}
