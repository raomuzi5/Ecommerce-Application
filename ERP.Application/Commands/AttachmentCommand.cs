using MediatR;

namespace ERP.Application.Commands
{
    public class CreateAttachmentCommand : IRequest<int>
    {
        public string FileName { get; set; }
        public string FileContentBase64 { get; set; } // Base64-encoded file content
        public int ReferenceId { get; set; }
        public string ReferenceType { get; set; }
    }
    public class UpdateAttachmentCommand : IRequest<Unit>
    {
        public int Id { get; set; }
        public string FileName { get; set; }
        public string FileContentBase64 { get; set; } // Base64-encoded file content
        public int ReferenceId { get; set; }
        public string ReferenceType { get; set; }
    }
    public class DeleteAttachmentCommand : IRequest<Unit>
    {
        public int Id { get; set; }
    }
}
