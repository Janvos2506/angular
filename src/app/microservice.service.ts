import { Injectable } from '@angular/core';
import { Student } from './Student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MicroserviceService {
  private apiUrl = '';
  constructor(private http: HttpClient) {

  }

    getStudents(): Observable<Student[]> {
        return this.http.get<Student[]>(this.apiUrl);
    }

}
