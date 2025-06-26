using WebApplication1.Models;

namespace WebApplication1.Repositories
{
    public interface IStudentRepository
    {
        Task<List<Student>> GetStudents(string name);
        Task<Student> AddStudent(Student student);
        Task AssignCourse(int studentId, int courseId);
    }
}
