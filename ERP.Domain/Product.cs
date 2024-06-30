using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.Domain
{
    public class Product
    {
        //public Product()
        //{
        //    Attachment = new Attachment();
        //}
        public int Id { get; set; }
        public string ProductName { get; set; }
        public string ManufacturerName { get; set; }
        public string ManufacturerBrand { get; set; }
        public decimal Price { get; set; }
        public decimal Quantity { get; set; }
        public string Category { get; set; }
        public string Features { get; set; }
        public string Description { get; set; }
        public string MetaTitle { get; set; }
        public string MetaKeywords { get; set; }
        public string MetaDescription { get; set; }
        public int? AttachmentId { get; set; }

        [ForeignKey("AttachmentId")]
        public Attachment Attachment { get; set; }

    }
}
