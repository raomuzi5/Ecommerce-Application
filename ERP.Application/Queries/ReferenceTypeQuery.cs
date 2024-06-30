using ERP.Application.DTOs;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.Application.Queries
{
    public class GetAllReferenceTypesQuery : IRequest<List<ReferenceTypeDto>>
    {
    }
    public class GetReferenceTypeByIdQuery : IRequest<ReferenceTypeDto>
    {
        public int Id { get; set; }
    }
}
