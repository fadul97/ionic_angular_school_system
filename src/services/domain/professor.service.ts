import { StudentOnlyDTO } from './../../models/student.only.dto';
import { API_CONFIG } from './../../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubjectOnlyDTO } from 'src/models/subject.only.dto';

@Injectable()
export class ProfessorService{

  constructor(public http: HttpClient){

  }

  findAllStudents(): Observable<StudentOnlyDTO[]> {
    return this.http.get<StudentOnlyDTO[]>(`${API_CONFIG.baseUrl}/students`);
  }

  findAllSubjects(): Observable<SubjectOnlyDTO[]> {
    return this.http.get<SubjectOnlyDTO[]>(`${API_CONFIG.baseUrl}/subjects`);
  }
}
