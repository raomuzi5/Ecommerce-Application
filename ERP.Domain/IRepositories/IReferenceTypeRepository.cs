using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.Domain.IRepositories
{
    public interface IReferenceTypeRepository
    {
        Task<List<ReferenceType>> GetAllAsync();
        Task<ReferenceType> GetByIdAsync(int id);
        Task<int> AddAsync(ReferenceType referenceType);
        Task UpdateAsync(ReferenceType referenceType);
        Task DeleteAsync(int id);
    }
}
