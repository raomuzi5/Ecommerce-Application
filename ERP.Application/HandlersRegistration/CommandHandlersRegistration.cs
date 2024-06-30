using ERP.Application.HandlersRegistration;
using ERP.Application.Commands;
using ERP.Application.DTOs;
using ERP.Application.Queries;
using ERP.Application.QueryHandlers;
using ERP.Domain.IRepositories;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ERP.Application.CommandHandlers;
using System.Reflection;

namespace ERP.Application.HandlersRegistration
{
    public static class CommandHandlersRegistration
    {
        public static void RegisterCommandHandlers(this IServiceCollection services)
        {
            services.AddScoped<IRequestHandler<CreateEmployeeCommand, int>, CreateEmployeeCommandHandler>();
            services.AddScoped<IRequestHandler<UpdateEmployeeCommand, Unit>, UpdateEmployeeCommandHandler>();
            services.AddScoped<IRequestHandler<DeleteEmployeeCommand, Unit>, DeleteEmployeeCommandHandler>();

            services.AddScoped<IRequestHandler<CreateProductCommand, int>, CreateProductCommandHandler>();
            services.AddScoped<IRequestHandler<UpdateProductCommand, Unit>, UpdateProductCommandHandler>();
            services.AddScoped<IRequestHandler<DeleteProductCommand, Unit>, DeleteProductCommandHandler>();

            services.AddScoped<IRequestHandler<CreateAttachmentCommand, int>, CreateAttachmentCommandHandler>();
            services.AddScoped<IRequestHandler<UpdateAttachmentCommand, Unit>, UpdateAttachmentCommandHandler>();
            services.AddScoped<IRequestHandler<DeleteAttachmentCommand, Unit>, DeleteAttachmentCommandHandler>();

            services.AddScoped<IRequestHandler<CreateReferenceTypeCommand, int>, CreateReferenceTypeCommandHandler>();
            services.AddScoped<IRequestHandler<UpdateReferenceTypeCommand, Unit>, UpdateReferenceTypeCommandHandler>();
            services.AddScoped<IRequestHandler<DeleteReferenceTypeCommand, Unit>, DeleteReferenceTypeCommandHandler>();
        }

    }
}
