using MediatR;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.Application.Commands
{
    public class CreateProductCommand : IRequest<int>
    {
        [Required]
        [StringLength(100, ErrorMessage = "Product Name must not exceed 100 characters.")]
        public string ProductName { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "Manufacturer Name must not exceed 100 characters.")]
        public string ManufacturerName { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "Manufacturer Brand must not exceed 100 characters.")]
        public string ManufacturerBrand { get; set; }

        [Required]
        [Range(0.01, double.MaxValue, ErrorMessage = "Price must be greater than zero.")]
        public decimal Price { get; set; }

        [Required]
        [Range(0.01, double.MaxValue, ErrorMessage = "Quantity must be greater than zero.")]
        public decimal Quantity { get; set; }

        [Required]
        public string Category { get; set; }

        [Required]
        public string Features { get; set; }

        [Required]
        [StringLength(1000, ErrorMessage = "Description must not exceed 1000 characters.")]
        public string Description { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "Meta Title must not exceed 100 characters.")]
        public string MetaTitle { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "Meta Keywords must not exceed 100 characters.")]
        public string MetaKeywords { get; set; }

        [Required]
        [StringLength(1000, ErrorMessage = "Meta Description must not exceed 1000 characters.")]
        public string MetaDescription { get; set; }

        public int? AttachmentId { get; set; }
    }
    public class UpdateProductCommand : IRequest<Unit>
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public string ManufacturerName { get; set; }
        public string ManufacturerBrand { get; set; }
        public decimal Price { get; set; }
        public string Category { get; set; }
        public string Features { get; set; }
        public string Description { get; set; }
        public string MetaTitle { get; set; }
        public string MetaKeywords { get; set; }
        public string MetaDescription { get; set; }
        public int? AttachmentId { get; set; }
    }
    public class DeleteProductCommand : IRequest<Unit>
    {
        public int Id { get; set; }
    }
}
