import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {

  constructor(private http:HttpClient) { }

  public baseUrl=environment.baseUrl;

  // gloabl GET data function argument 'url' as apidata fetching
  getData(url){
    return this.http.get(this.baseUrl+url);
  }
}
