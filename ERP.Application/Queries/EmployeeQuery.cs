using ERP.Application.DTOs;
using ERP.Domain.IRepositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.Application.Queries
{
    public class GetEmployeeByIdQuery : IRequest<EmployeeDto>
    {
        public int EmployeeId { get; set; }
    }
    public class GetEmployeesQuery : IRequest<List<EmployeeDto>> { }
}
