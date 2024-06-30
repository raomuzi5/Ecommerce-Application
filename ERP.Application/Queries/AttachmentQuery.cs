using ERP.Application.DTOs;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.Application.Queries
{
    public class GetAttachmentsByReferenceQuery : IRequest<List<AttachmentDto>>
    {
        public int ReferenceId { get; set; }
        public string ReferenceType { get; set; }
    }
    public class GetAttachmentByIdQuery : IRequest<AttachmentDto>
    {
        public int Id { get; set; }
    }

}
