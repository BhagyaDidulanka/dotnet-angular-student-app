import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student, StudentDto, CourseAssignment } from '../models/student.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private apiUrl = `${environment.apiUrl}/students`;

  constructor(private http: HttpClient) {}

  getStudents(name: string = ''): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}?name=${name}`);
  }

  addStudent(student: StudentDto): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student);
  }

  assignCourse(studentId: number, courseId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${studentId}/assign-course/${courseId}`, {});
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateStudent(id: number, student: StudentDto): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl}/${id}`, student);
  }
}