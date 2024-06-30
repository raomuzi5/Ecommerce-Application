using ERP.Application.Commands;
using ERP.Domain.IRepositories;
using ERP.Domain;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ERP.Application.Common;

namespace ERP.Application.CommandHandlers
{
    public class CreateReferenceTypeCommandHandler : IRequestHandler<CreateReferenceTypeCommand, int>
    {
        private readonly IReferenceTypeRepository _referenceTypeRepository;

        public CreateReferenceTypeCommandHandler(IReferenceTypeRepository referenceTypeRepository)
        {
            _referenceTypeRepository = referenceTypeRepository;
        }

        public async Task<int> Handle(CreateReferenceTypeCommand request, CancellationToken cancellationToken)
        {
            var referenceType = new ReferenceType
            {
                TypeName = request.TypeName
            };

            return await _referenceTypeRepository.AddAsync(referenceType);
        }
    }
    public class UpdateReferenceTypeCommandHandler : IRequestHandler<UpdateReferenceTypeCommand,Unit>
    {
        private readonly IReferenceTypeRepository _referenceTypeRepository;

        public UpdateReferenceTypeCommandHandler(IReferenceTypeRepository referenceTypeRepository)
        {
            _referenceTypeRepository = referenceTypeRepository;
        }

        public async Task<Unit> Handle(UpdateReferenceTypeCommand request, CancellationToken cancellationToken)
        {
            var referenceType = await _referenceTypeRepository.GetByIdAsync(request.Id);

            if (referenceType == null)
            {
                throw new NotFoundException(nameof(ReferenceType), request.Id);
            }

            referenceType.TypeName = request.TypeName;

            await _referenceTypeRepository.UpdateAsync(referenceType);

            return Unit.Value;
        }
    }
    public class DeleteReferenceTypeCommandHandler : IRequestHandler<DeleteReferenceTypeCommand,Unit>
    {
        private readonly IReferenceTypeRepository _referenceTypeRepository;

        public DeleteReferenceTypeCommandHandler(IReferenceTypeRepository referenceTypeRepository)
        {
            _referenceTypeRepository = referenceTypeRepository;
        }

        public async Task<Unit> Handle(DeleteReferenceTypeCommand request, CancellationToken cancellationToken)
        {
            await _referenceTypeRepository.DeleteAsync(request.Id);
            return Unit.Value;
        }
    }
}
