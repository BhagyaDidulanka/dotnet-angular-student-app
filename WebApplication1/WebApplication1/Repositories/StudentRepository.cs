using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Models;

namespace WebApplication1.Repositories
{
    public class StudentRepository:IStudentRepository
    {
        private readonly AppDbContext _context;
        public StudentRepository(AppDbContext context) => _context = context;

        public async Task<List<Student>> GetStudents(string name)
        {
            return await _context.Students.Where(s => s.Name.Contains(name)).ToListAsync();
        }

        public async Task<Student> AddStudent(Student student)
        {
            _context.Students.Add(student);
            await _context.SaveChangesAsync();
            return student;
        }

        public async Task AssignCourse(int studentId, int courseId)
        {
            var exists = await _context.StudentCourses.AnyAsync(x => x.StudentId == studentId && x.CourseId == courseId);
            if (!exists)
            {
                _context.StudentCourses.Add(new StudentCourse { StudentId = studentId, CourseId = courseId });
                await _context.SaveChangesAsync();
            }
        }
    }
}
