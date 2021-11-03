import { ProfessorService } from './../../../services/domain/professor.service';
import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/services/domain/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {

  constructor(public studentService: StudentService, public professorService: ProfessorService) { }

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
