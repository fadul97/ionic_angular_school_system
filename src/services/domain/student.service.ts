import { StudentOnlyDTO } from './../../models/student.only.dto';
import { API_CONFIG } from './../../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class StudentService{

  constructor(public http: HttpClient){

  }

  findAll(): Observable<StudentOnlyDTO[]> {
    return this.http.get<StudentOnlyDTO[]>(`${API_CONFIG}/students`);
  }
}
