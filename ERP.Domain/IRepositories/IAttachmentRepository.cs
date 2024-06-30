using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.Domain.IRepositories
{
    public interface IAttachmentRepository
    {
        Task<List<Attachment>> GetByReferenceAsync(int referenceId, string referenceType);
        Task<int> AddAsync(Attachment attachment);
        Task UpdateAsync(Attachment attachment);
        Task DeleteAsync(int id);
        Task<Attachment> GetByIdAsync(int id);
    }
}
