using AutoMapper;
using WebApplication1.Data;
using WebApplication1.Dtos;
using WebApplication1.Models;
using WebApplication1.Repositories;

namespace WebApplication1.Services
{
    public class StudentService : IStudentService
    {
        private readonly IStudentRepository _repo;
        private readonly IMapper _mapper;
        private readonly AppDbContext _context; // Add DbContext for direct access if needed

        public StudentService(IStudentRepository repo, IMapper mapper, AppDbContext context)
        {
            _repo = repo;
            _mapper = mapper;
            _context = context; // Initialize DbContext
        }

        public async Task<List<Student>> GetStudents(string name) => await _repo.GetStudents(name);

        public async Task<Student> AddStudent(StudentDto dto)
        {
            var student = _mapper.Map<Student>(dto);
            return await _repo.AddStudent(student);
        }

        public async Task AssignCourse(int studentId, int courseId) => await _repo.AssignCourse(studentId, courseId);

        public async Task DeleteStudent(int id) => await _repo.DeleteStudent(id);

        public async Task<StudentDto> UpdateStudent(int id, StudentDto studentDto)
        {
            // 1. Find existing student
            var existingStudent = await _context.Students.FindAsync(id);
            if (existingStudent == null)
                throw new KeyNotFoundException($"Student with ID {id} not found");

            // 2. Map DTO to existing entity
            _mapper.Map(studentDto, existingStudent);

            // 3. Save changes
            await _repo.UpdateStudent(existingStudent);

            // 4. Return updated DTO
            return _mapper.Map<StudentDto>(existingStudent);
        }
    }
}