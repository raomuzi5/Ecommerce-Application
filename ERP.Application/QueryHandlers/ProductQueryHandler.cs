using ERP.Application.Queries;
using ERP.Domain.IRepositories;
using ERP.Domain;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ERP.Application.DTOs;
using ERP.Application.Common;

namespace ERP.Application.QueryHandlers
{
    public class GetProductsQueryHandler : IRequestHandler<GetProductsQuery, List<ProductDto>>
    {
        private readonly IProductRepository _productRepository;

        public GetProductsQueryHandler(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<List<ProductDto>> Handle(GetProductsQuery request, CancellationToken cancellationToken)
        {
            var products = await _productRepository.GetAllAsync();

            var productDtos = new List<ProductDto>();

            foreach (var product in products)
            {
                productDtos.Add(new ProductDto
                {
                    Id = product.Id,
                    ProductName = product.ProductName,
                    ManufacturerName = product.ManufacturerName,
                    ManufacturerBrand = product.ManufacturerBrand,
                    Price = product.Price,
                    Category = product.Category,
                    Features = product.Features,
                    Description = product.Description,
                    MetaTitle = product.MetaTitle,
                    MetaKeywords = product.MetaKeywords,
                    MetaDescription = product.MetaDescription,
                    AttachmentId = product.AttachmentId
                });
            }

            return productDtos;
        }
    }

    public class GetProductByIdQueryHandler : IRequestHandler<GetProductByIdQuery, ProductDto>
    {
        private readonly IProductRepository _productRepository;

        public GetProductByIdQueryHandler(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<ProductDto> Handle(GetProductByIdQuery request, CancellationToken cancellationToken)
        {
            var existingProduct = await _productRepository.GetByIdAsync(request.Id);

            if (existingProduct == null)
            {
                throw new NotFoundException(nameof(Product), request.Id);
            }

            return new ProductDto
            {
                Id = existingProduct.Id,
                ProductName = existingProduct.ProductName,
                ManufacturerName = existingProduct.ManufacturerName,
                ManufacturerBrand = existingProduct.ManufacturerBrand,
                Price = existingProduct.Price,
                Category = existingProduct.Category,
                Features = existingProduct.Features,
                Description = existingProduct.Description,
                MetaTitle = existingProduct.MetaTitle,
                MetaKeywords = existingProduct.MetaKeywords,
                MetaDescription = existingProduct.MetaDescription
            };
        }
    }
}
