using Core.ERP.Domain;
using ERP.Infrastructure.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using MediatR;
using ERP.Application.HandlersRegistration;
using ERP.Application.Validation;
using ERP.Application;

namespace ERP
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Configuration.
                SetBasePath(Directory.GetCurrentDirectory()).
                AddJsonFile("appsettings.json", optional: false, reloadOnChange: true).
                AddEnvironmentVariables();
            //builder.Configuration.GetSection(key: "Config").Get<Config>();
            // Add services to the container.
            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            // Configure DbContext with SQL Server
            var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
            builder.Services.AddDbContext<HRMSContext>(options => options.UseSqlServer(connectionString));
            builder.Services.RegisterCommandHandlers();
            builder.Services.RegisterQueryHandlers();
            builder.Services.RegisterRepositories(builder.Configuration);
            builder.Services.AddScoped<IMediator, Mediator>();
            builder.Services.AddApplicationServices();
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowOrigin",
                    builder =>
                    {
                        builder.WithOrigins("http://localhost:4200"); // Replace with your Angular app's origin
                        builder.AllowAnyMethod();
                        builder.AllowAnyHeader();
                    });
            });
            //builder.Services.AddScoped<IEmployeeRepository, EmployeeRepository>();
            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.UseCors("AllowOrigin");
            app.MapControllers();
            app.Run();
        }
    }
}
