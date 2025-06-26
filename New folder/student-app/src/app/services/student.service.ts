import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student, StudentDto, CourseAssignment } from '../models/student.model';
import { environment } from '../../environments/environment';
import { catchError, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private apiUrl = "https://localhost:7192/api/Students";

  constructor(private http: HttpClient) {}

  getStudents(name: string = ''): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  addStudent(student: StudentDto): Observable<Student> {
    console.log('Adding student:', student.email);
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