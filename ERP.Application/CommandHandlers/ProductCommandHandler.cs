using ERP.Application.Commands;
using ERP.Application.Common;
using ERP.Domain;
using ERP.Domain.IRepositories;
using MediatR;
namespace ERP.Application.CommandHandlers
{
    public class CreateProductCommandHandler : IRequestHandler<CreateProductCommand, int>
    {
        private readonly IProductRepository _productRepository;

        public CreateProductCommandHandler(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<int> Handle(CreateProductCommand request, CancellationToken cancellationToken)
        {
            var product = new Product
            {
                ProductName = request.ProductName,
                ManufacturerName = request.ManufacturerName,
                ManufacturerBrand = request.ManufacturerBrand,
                Price = request.Price,
                Category = request.Category,
                Features = request.Features,
                Description = request.Description,
                MetaTitle = request.MetaTitle,
                MetaKeywords = request.MetaKeywords,
                MetaDescription = request.MetaDescription,
                AttachmentId = request.AttachmentId,
            };

            await _productRepository.AddAsync(product);

            return product.Id;
        }
    }
    public class UpdateProductCommandHandler : IRequestHandler<UpdateProductCommand, Unit>
    {
        private readonly IProductRepository _productRepository;

        public UpdateProductCommandHandler(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<Unit> Handle(UpdateProductCommand request, CancellationToken cancellationToken)
        {
            var product = await _productRepository.GetByIdAsync(request.Id);

            if (product == null)
            {
                throw new NotFoundException(nameof(Product), request.Id);
            }

            product.ProductName = request.ProductName;
            product.ManufacturerName = request.ManufacturerName;
            product.ManufacturerBrand = request.ManufacturerBrand;
            product.Price = request.Price;
            product.Category = request.Category;
            product.Features = request.Features;
            product.Description = request.Description;
            product.MetaTitle = request.MetaTitle;
            product.MetaKeywords = request.MetaKeywords;
            product.MetaDescription = request.MetaDescription;
            product.AttachmentId = request.AttachmentId;

            await _productRepository.UpdateAsync(product);

            return Unit.Value;
        }
    }

    public class DeleteProductCommandHandler : IRequestHandler<DeleteProductCommand,Unit>
    {
        private readonly IProductRepository _productRepository;

        public DeleteProductCommandHandler(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<Unit> Handle(DeleteProductCommand request, CancellationToken cancellationToken)
        {
            await _productRepository.DeleteAsync(request.Id);
            return Unit.Value;
        }
    }


}
