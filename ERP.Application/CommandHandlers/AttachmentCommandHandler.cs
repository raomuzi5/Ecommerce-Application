using ERP.Application.Commands;
using ERP.Application.Common;
using ERP.Application.DTOs;
using ERP.Application.Queries;
using ERP.Domain;
using ERP.Domain.IRepositories;
using ERP.Domain.IServices;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.Application.CommandHandlers
{
    public class CreateAttachmentCommandHandler : IRequestHandler<CreateAttachmentCommand, int>
    {
        private readonly IFileStorageService _fileStorageService;
        private readonly IAttachmentRepository _attachmentRepository;

        public CreateAttachmentCommandHandler(IFileStorageService fileStorageService, IAttachmentRepository attachmentRepository)
        {
            _fileStorageService = fileStorageService;
            _attachmentRepository = attachmentRepository;
        }

        public async Task<int> Handle(CreateAttachmentCommand request, CancellationToken cancellationToken)
        {
            if (string.IsNullOrEmpty(request.FileContentBase64))
            {
                throw new ArgumentException("No file content provided");
            }

            var fileContent = Convert.FromBase64String(request.FileContentBase64);
            long fileSizeInBytes = fileContent.Length;
            var uniqueFileName=$"{DateTime.UtcNow.Ticks}_{Guid.NewGuid()}{Path.GetExtension(request.FileName)}";
            //double fileSizeInMB = fileSizeInBytes / (1024.0 * 1024.0);
            var filePath = await _fileStorageService.SaveFileAsync(new MemoryStream(fileContent), uniqueFileName);
            var attachment = new Attachment
            {
                FileName = uniqueFileName,
                FileTitle = request.FileName,
                FileSize = fileSizeInBytes,
                FileType = Path.GetExtension(request.FileName),
                FilePath = filePath, // Save the file path
                ReferenceId = request.ReferenceId,
                ReferenceType = request.ReferenceType
            };

            // Save attachment to the database
            var attachmentId = await _attachmentRepository.AddAsync(attachment);

            return attachmentId;
        }
    }

    public class UpdateAttachmentCommandHandler : IRequestHandler<UpdateAttachmentCommand, Unit>, IHandler
    {
        private readonly IFileStorageService _fileStorageService;
        private readonly IAttachmentRepository _attachmentRepository;

        public UpdateAttachmentCommandHandler(IFileStorageService fileStorageService, IAttachmentRepository attachmentRepository)
        {
            _fileStorageService = fileStorageService;
            _attachmentRepository = attachmentRepository;
        }

        public async Task<Unit> Handle(UpdateAttachmentCommand request, CancellationToken cancellationToken)
        {
            if (string.IsNullOrEmpty(request.FileContentBase64))
            {
                throw new ArgumentException("No file content provided");
            }

            var fileContent = Convert.FromBase64String(request.FileContentBase64);

            // Save file content to file storage service
            var filePath = await _fileStorageService.SaveFileAsync(new MemoryStream(fileContent), request.FileName);

            // Now, you can proceed with your logic to save the attachment entity to the database
            var attachment = new Attachment
            {
                FileName = request.FileName,
                FilePath = filePath, // Save the file path
                ReferenceId = request.ReferenceId,
                ReferenceType = request.ReferenceType
            };

            // Save attachment to the database
            await _attachmentRepository.AddAsync(attachment);
            return Unit.Value;
        }
    }
    public class DeleteAttachmentCommandHandler : IRequestHandler<DeleteAttachmentCommand, Unit>
    {
        private readonly IAttachmentRepository _attachmentRepository;

        public DeleteAttachmentCommandHandler(IAttachmentRepository attachmentRepository)
        {
            _attachmentRepository = attachmentRepository;
        }

        public async Task<Unit> Handle(DeleteAttachmentCommand request, CancellationToken cancellationToken)
        {
            await _attachmentRepository.DeleteAsync(request.Id);
            return Unit.Value;
        }
    }


}
