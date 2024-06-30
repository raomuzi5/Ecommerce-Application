using ERP.Application.Common;
using ERP.Application.DTOs;
using ERP.Application.Queries;
using ERP.Domain;
using ERP.Domain.IRepositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.Application.QueryHandlers
{
    public class GetAllReferenceTypesQueryHandler : IRequestHandler<GetAllReferenceTypesQuery, List<ReferenceTypeDto>>
    {
        private readonly IReferenceTypeRepository _referenceTypeRepository;

        public GetAllReferenceTypesQueryHandler(IReferenceTypeRepository referenceTypeRepository)
        {
            _referenceTypeRepository = referenceTypeRepository;
        }

        public async Task<List<ReferenceTypeDto>> Handle(GetAllReferenceTypesQuery request, CancellationToken cancellationToken)
        {
            var referenceTypes = await _referenceTypeRepository.GetAllAsync();

            return referenceTypes.Select(rt => new ReferenceTypeDto
            {
                Id = rt.Id,
                TypeName = rt.TypeName
            }).ToList();
        }
    }
    public class GetReferenceTypeByIdQueryHandler : IRequestHandler<GetReferenceTypeByIdQuery, ReferenceTypeDto>
    {
        private readonly IReferenceTypeRepository _referenceTypeRepository;

        public GetReferenceTypeByIdQueryHandler(IReferenceTypeRepository referenceTypeRepository)
        {
            _referenceTypeRepository = referenceTypeRepository;
        }

        public async Task<ReferenceTypeDto> Handle(GetReferenceTypeByIdQuery request, CancellationToken cancellationToken)
        {
            var referenceType = await _referenceTypeRepository.GetByIdAsync(request.Id);

            if (referenceType == null)
            {
                throw new NotFoundException(nameof(ReferenceType), request.Id);
            }

            return new ReferenceTypeDto
            {
                Id = referenceType.Id,
                TypeName = referenceType.TypeName
            };
        }
    }
}
