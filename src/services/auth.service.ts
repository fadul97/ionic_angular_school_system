import { CredentialsDTO } from './../models/credentials.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';

@Injectable()
export class AuthService{

  constructor(public http: HttpClient){

  }

  authenticate(creds: CredentialsDTO){
    return this.http.post(
      `${API_CONFIG.baseUrl}/login`,
      creds,
      {
        observe: 'response',
        responseType: 'text'
      });
  }
}
