using AutoMapper;
using WebApplication1.Dtos;
using WebApplication1.Models;
using WebApplication1.Repositories;

namespace WebApplication1.Services
{
    public class StudentService : IStudentService
    {
        private readonly IStudentRepository _repo;
        private readonly IMapper _mapper;

        public StudentService(IStudentRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        public async Task<List<Student>> GetStudents(string name) => await _repo.GetStudents(name);

        public async Task<Student> AddStudent(StudentDto dto)
        {
            var student = _mapper.Map<Student>(dto);
            return await _repo.AddStudent(student);
        }

        public async Task AssignCourse(int studentId, int courseId) => await _repo.AssignCourse(studentId, courseId);
    }
}
