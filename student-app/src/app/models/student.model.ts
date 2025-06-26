export interface Student {
  id: number;
  name: string;
  email: string;
  homeTown: string;
  registrationNo: string;
  studentCourses?: any[];
}

export interface StudentDto {
  name: string;
  email: string;
  homeTown: string;
  registrationNo: string;
}

export interface CourseAssignment {
  studentId: number;
  courseId: number;
}