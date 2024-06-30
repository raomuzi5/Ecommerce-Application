using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.Application.DTOs
{
    public class ProductDto
    {
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
        public int? Id { get;  set; }
        public int? AttachmentId { get;  set; }
    }
}
