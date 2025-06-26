namespace WebApplication1.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string HomeTown { get; set; }
        public string RegistrationNo { get; set; }
        public List<StudentCourse> StudentCourses { get; set; }
    }
}
