using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Dtos;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly IStudentService _service;
        public StudentsController(IStudentService service) => _service = service;

        [HttpPost]
        public async Task<IActionResult> Create(StudentDto dto)
            => Ok(await _service.AddStudent(dto));

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] string? name)
            => Ok(await _service.GetStudents(name ?? ""));

        [HttpPost("{studentId}/assign-course/{courseId}")]
        public async Task<IActionResult> Assign(int studentId, int courseId)
        {
            await _service.AssignCourse(studentId, courseId);
            return Ok();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _service.DeleteStudent(id);
            return NoContent();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, StudentDto dto)
        {
            try
            {
                var updatedStudent = await _service.UpdateStudent(id, dto);
                return Ok(updatedStudent);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}
