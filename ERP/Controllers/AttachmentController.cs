using ERP.Application.Commands;
using ERP.Application.DTOs;
using ERP.Application.Queries;
using ERP.Domain.IServices;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AttachmentController : ControllerBase
    {
        private readonly IMediator _mediator;

        public AttachmentController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("{referenceId}/{referenceType}")]
        public async Task<ActionResult<List<AttachmentDto>>> GetByReference(int referenceId, string referenceType)
        {
            var query = new GetAttachmentsByReferenceQuery { ReferenceId = referenceId, ReferenceType = referenceType };
            var result = await _mediator.Send(query);
            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<int>> Create([FromBody] CreateAttachmentCommand command)
        {
            if (string.IsNullOrEmpty(command.FileContentBase64))
            {
                return BadRequest("No file uploaded");
            }

            // Handle the command
            var result = await _mediator.Send(command);
            return Ok(result);
        }


        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, UpdateAttachmentCommand command)
        {
            if (id != command.Id)
            {
                return BadRequest();
            }

            await _mediator.Send(command);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            await _mediator.Send(new DeleteAttachmentCommand { Id = id });
            return NoContent();
        }

        [HttpGet("{id}/download")]
        public async Task<IActionResult> Download(int id)
        {
            var query = new GetAttachmentByIdQuery { Id = id };
            var attachment = await _mediator.Send(query);

            if (attachment == null)
            {
                return NotFound();
            }

            return File(attachment.FileContent, "application/octet-stream", attachment.FileName);
        }
    }

}
