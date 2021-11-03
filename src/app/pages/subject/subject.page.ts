import { SubjectOnlyDTO } from 'src/models/subject.only.dto';
import { Component, OnInit } from '@angular/core';
import { ProfessorService } from 'src/services/domain/professor.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.page.html',
  styleUrls: ['./subject.page.scss'],
})
export class SubjectPage implements OnInit {

  items: SubjectOnlyDTO[];

  constructor(public professorService: ProfessorService) { }

  ngOnInit() {
    this.professorService.findAllSubjects()
      .subscribe(response => {
        this.items = response;
      },
      error => {});
  }

}
