import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { StudentDto } from '../../models/student.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  student: StudentDto = {
    name: '',
    email: '',
    homeTown: '',
    registrationNo: ''
  };
  isEdit = false;
  studentId?: number;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEdit = true;
        this.studentId = +params['id'];
        this.loadStudent(this.studentId);
      }
    });
  }

  loadStudent(id: number): void {
    this.studentService.getStudents().subscribe({
      next: (students) => {
        const foundStudent = students.find(s => s.id === id);
        if (foundStudent) {
          this.student = {
            name: foundStudent.name,
            email: foundStudent.email,
            homeTown: foundStudent.homeTown,
            registrationNo: foundStudent.registrationNo
          };
        }
      },
      error: (err) => console.error('Error loading student', err)
    });
  }

  onSubmit(): void {
    if (this.isEdit && this.studentId) {
      this.studentService.updateStudent(this.studentId, this.student).subscribe({
        next: () => this.router.navigate(['/']),
        error: (err) => console.error('Error updating student', err)
      });
    } else {
      this.studentService.addStudent(this.student).subscribe({
        next: () => this.router.navigate(['/']),
        error: (err) => console.error('Error adding student', err)
      });
    }
  }
}