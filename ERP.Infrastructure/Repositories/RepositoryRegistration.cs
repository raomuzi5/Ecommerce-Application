using ERP.Domain.IRepositories;
using ERP.Domain.IServices;
using ERP.Infrastructure.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace ERP.Infrastructure.Repositories
{
    public static class RepositoryRegistration
    {
       
        public static void RegisterRepositories(this IServiceCollection services, IConfiguration configuration)
        {
           
            services.AddScoped<IEmployeeRepository, EmployeeRepository>();
            services.AddScoped<IProductRepository, ProductRepository>();
            services.AddScoped <IAttachmentRepository, AttachmentRepository>();

            string storagePath = configuration["StoragePath"];
            services.AddScoped<IFileStorageService>(provider => new LocalFileStorageService(storagePath));

            // Register IReferenceTypeRepository with its implementation
            services.AddScoped<IReferenceTypeRepository, ReferenceTypeRepository>();
        }
    }
}
