using ERP.Application.DTOs;
using ERP.Application.Queries;
using ERP.Application.QueryHandlers;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace ERP.Application.HandlersRegistration
{
    public static class QueryHandlersRegistration
    {
        public static void RegisterQueryHandlers(this IServiceCollection services)
        {
            services.AddScoped<IRequestHandler<GetEmployeesQuery, List<EmployeeDto>>, GetEmployeesQueryHandler>();
            services.AddScoped<IRequestHandler<GetEmployeeByIdQuery, EmployeeDto>, GetEmployeeByIdQueryHandler>();

            services.AddScoped<IRequestHandler<GetProductsQuery, List<ProductDto>>, GetProductsQueryHandler>();
            services.AddScoped<IRequestHandler<GetProductByIdQuery, ProductDto>, GetProductByIdQueryHandler>();

            services.AddScoped<IRequestHandler<GetAttachmentByIdQuery, AttachmentDto>, GetAttachmentByIdQueryHandler>();
            services.AddScoped<IRequestHandler<GetAttachmentsByReferenceQuery, List<AttachmentDto>>, GetAttachmentsByReferenceQueryHandler>();

            services.AddScoped<IRequestHandler<GetAllReferenceTypesQuery, List<ReferenceTypeDto>>, GetAllReferenceTypesQueryHandler>();
            services.AddScoped<IRequestHandler<GetReferenceTypeByIdQuery, ReferenceTypeDto>, GetReferenceTypeByIdQueryHandler>();
        }
    }
}
