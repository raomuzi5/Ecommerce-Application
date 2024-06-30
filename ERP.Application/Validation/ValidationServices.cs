using ERP.Application.Commands;
using FluentValidation;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace ERP.Application.Validation
{
    public static class ValidationServices
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());
            services.AddTransient(typeof(IValidator<>), typeof(GenericValidator<>));
            return services;
        }
    }
}
