import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';



@Injectable({
  providedIn: 'root'
})
export class TheguardianserviceService {

  

  constructor(public http: HttpClient, private sanitizer: DomSanitizer) {
   }
  apiKey = 'f7818a1f-c25e-4ada-a9b0-1937293fe202';
  guardianUrl = `https://content.guardianapis.com/`
  json = []

    gets(params) {
      console.log(`${this.guardianUrl+params+'&api-key='+this.apiKey}`)
      return this.http.get(`${this.guardianUrl+params+'&api-key='+this.apiKey}`)
    }
}