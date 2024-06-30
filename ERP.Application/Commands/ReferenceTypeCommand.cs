using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.Application.Commands
{
    public class UpdateReferenceTypeCommand : IRequest<Unit>
    {
        public int Id { get; set; }
        public string TypeName { get; set; }
    }
    public class DeleteReferenceTypeCommand : IRequest<Unit>
    {
        public int Id { get; set; }
    }
    public class CreateReferenceTypeCommand : IRequest<int>
    {
        public string TypeName { get; set; }
    }
}
