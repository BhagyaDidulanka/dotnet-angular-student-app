using WebApplication1.Dtos;
using WebApplication1.Models;

namespace WebApplication1.Services
{
    public interface IStudentService
    {
        Task<List<Student>> GetStudents(string name);
        Task<Student> AddStudent(StudentDto studentDto);
        Task AssignCourse(int studentId, int courseId);
    }
}
