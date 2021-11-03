import { SubjectService } from './../../../services/domain/subject.service';
import { Component, OnInit } from '@angular/core';
import { ProfessorService } from 'src/services/domain/professor.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.page.html',
  styleUrls: ['./subject.page.scss'],
})
export class SubjectPage implements OnInit {

  constructor(public subjectService: SubjectService, public professorService: ProfessorService) { }

  ngOnInit() {
    this.professorService.findAllSubjects()
      .subscribe(response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

}
