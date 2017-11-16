import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Student } from './student';
import { MicroserviceService} from './microservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  students: Student[];
  constructor(private studentService: MicroserviceService) {
  }
  loadStudents(): void {
    this.studentService.getStudents()
        .subscribe(students => this.students = students);
  }
}
