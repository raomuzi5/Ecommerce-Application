using Core.ERP.Domain;
using ERP.Domain;
using ERP.Domain.IRepositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ERP.Infrastructure.Repositories
{
    public class AttachmentRepository : IAttachmentRepository
    {
        private readonly HRMSContext _context;

        public AttachmentRepository(HRMSContext context)
        {
            _context = context;
        }

        public async Task<List<Attachment>> GetByReferenceAsync(int referenceId, string referenceType)
        {
            return await _context.Attachments
                .Where(a => a.ReferenceId == referenceId && a.ReferenceType == referenceType)
                .ToListAsync();
        }

        public async Task<int> AddAsync(Attachment attachment)
        {
            _context.Attachments.Add(attachment);
            await _context.SaveChangesAsync();
            return attachment.Id;
        }

        public async Task UpdateAsync(Attachment attachment)
        {
            _context.Entry(attachment).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var attachment = await GetByIdAsync(id);
            if (attachment != null)
            {
                _context.Attachments.Remove(attachment);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<Attachment> GetByIdAsync(int id)
        {
            return await _context.Attachments.FindAsync(id);
        }
    }
}
