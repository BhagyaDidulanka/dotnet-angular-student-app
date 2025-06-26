namespace WebApplication1.Models
{
    public class Course
    {
        public int Id { get; set; }
        public string CourseName { get; set; }
        public List<StudentCourse> StudentCourses { get; set; }
    }
}
