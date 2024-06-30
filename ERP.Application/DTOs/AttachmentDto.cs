using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.Application.DTOs
{
    public class AttachmentDto
    {
        public int? Id { get; set; }
        public string FileName { get; set; }
        public string FilePath { get; set; }
        public string FileType { get; set; }
        public long FileSize { get; set; }
        public int ReferenceId { get; set; } // Id of the entity to which this attachment is attached
        public string ReferenceType { get; set; } // Type of the entity (e.g., Product, User, etc.)
        public byte[] FileContent { get; set; }
    }
    public class AttachmentDownloadDto
    {
        public string FileName { get; set; }
        public byte[] FileContent { get; set; }
    }

}
