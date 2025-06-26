import { Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { CourseAssignComponent } from './components/course-assign/course-assign.component';
// import { StudentListComponent } from './components/student-list/student-list.component';
// import { StudentFormComponent } from './components/student-form/student-form.component';
// import { CourseAssignComponent } from './components/course-assign/course-assign.component';

export const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: 'add', component: StudentFormComponent },
  { path: 'edit/:id', component: StudentFormComponent },
  { path: 'assign-course/:studentId', component: CourseAssignComponent },
  { path: '**', redirectTo: '' }
];