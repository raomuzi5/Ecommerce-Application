using ERP.Application.Commands;
using ERP.Application.DTOs;
using ERP.Application.Queries;
using MediatR;
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
    public class ReferenceTypeController : ControllerBase
    {
        private readonly IMediator _mediator;

        public ReferenceTypeController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<ReferenceTypeDto>>> GetAll()
        {
            var query = new GetAllReferenceTypesQuery();
            var result = await _mediator.Send(query);
            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ReferenceTypeDto>> GetById(int id)
        {
            var query = new GetReferenceTypeByIdQuery { Id = id };
            var result = await _mediator.Send(query);
            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<int>> Create(CreateReferenceTypeCommand command)
        {
            var result = await _mediator.Send(command);
            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, UpdateReferenceTypeCommand command)
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
            await _mediator.Send(new DeleteReferenceTypeCommand { Id = id });
            return NoContent();
        }
    }
}
