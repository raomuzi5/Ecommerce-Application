using ERP.Application.DTOs;
using ERP.Domain;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.Application.Queries
{
    public class GetProductsQuery : IRequest<List<ProductDto>>
    {
    }
    public class GetProductByIdQuery : IRequest<ProductDto>
    {
        public int Id { get; set; }
    }
}
