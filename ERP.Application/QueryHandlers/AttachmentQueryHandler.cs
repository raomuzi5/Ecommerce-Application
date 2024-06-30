using ERP.Application.DTOs;
using ERP.Application.Queries;
using ERP.Domain.IRepositories;
using ERP.Domain.IServices;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.Application.QueryHandlers
{
    public class GetAttachmentByIdQueryHandler : IRequestHandler<GetAttachmentByIdQuery, AttachmentDto>
    {
        private readonly IAttachmentRepository _attachmentRepository;
        private readonly IFileStorageService _fileStorageService;

        public GetAttachmentByIdQueryHandler(IAttachmentRepository attachmentRepository, IFileStorageService fileStorageService)
        {
            _attachmentRepository = attachmentRepository;
            _fileStorageService = fileStorageService;
        }

        public async Task<AttachmentDto> Handle(GetAttachmentByIdQuery request, CancellationToken cancellationToken)
        {
            var attachment = await _attachmentRepository.GetByIdAsync(request.Id);

            if (attachment == null)
            {
                return null;
            }

            var fileContent = await _fileStorageService.GetFileAsync(attachment.FilePath);

            return new AttachmentDto
            {
                FileName = attachment.FileName,
                FileContent = fileContent
            };
        }
    }

    public class GetAttachmentsByReferenceQueryHandler : IRequestHandler<GetAttachmentsByReferenceQuery, List<AttachmentDto>>
    {
        private readonly IAttachmentRepository _attachmentRepository;

        public GetAttachmentsByReferenceQueryHandler(IAttachmentRepository attachmentRepository)
        {
            _attachmentRepository = attachmentRepository;
        }

        public async Task<List<AttachmentDto>> Handle(GetAttachmentsByReferenceQuery request, CancellationToken cancellationToken)
        {
            var attachments = await _attachmentRepository.GetByReferenceAsync(request.ReferenceId, request.ReferenceType);

            return attachments.Select(a => new AttachmentDto
            {
                Id = a.Id,
                FileName = a.FileName,
                FilePath = a.FilePath,
                FileType = a.FileType,
                FileSize = a.FileSize,
                ReferenceId = a.ReferenceId,
                ReferenceType = a.ReferenceType
            }).ToList();
        }
    }
}
