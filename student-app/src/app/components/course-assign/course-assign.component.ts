import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-course-assign',
  standalone: true,
  imports: [
    CommonModule,FormsModule,HttpClientModule],
  templateUrl: './course-assign.component.html',
  styleUrls: ['./course-assign.component.css']
})

export class CourseAssignComponent implements OnInit {
  studentId: number = 0;
  courseId: number = 0;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['studentId'];
      if (id) {
        this.studentId = +id;
      }
    });
  }

  onSubmit(): void {
    if (this.studentId && this.courseId) {
      this.studentService.assignCourse(this.studentId, this.courseId).subscribe({
        next: () => {
          alert('Course assigned successfully');
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Error assigning course', err);
          alert('Failed to assign course. Please try again.');
        }
      });
    } else {
      alert('Please fill in all required fields');
    }
  }
}