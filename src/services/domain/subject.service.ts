import { SubjectOnlyDTO } from './../../models/subject.only.dto';
import { API_CONFIG } from './../../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SubjectService{

  constructor(public http: HttpClient){

  }

  findAll(): Observable<SubjectOnlyDTO[]> {
    return this.http.get<SubjectOnlyDTO[]>(`${API_CONFIG}/subjects`);
  }
}
