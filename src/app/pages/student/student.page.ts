import { ProfessorService } from './../../../services/domain/professor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {

  constructor(public professorService: ProfessorService) { }

  ngOnInit() {
    this.professorService.findAllStudents()
      .subscribe(response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

  ionViewDidLoad(){
    this.professorService.findAllStudents()
      .subscribe(response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

}
