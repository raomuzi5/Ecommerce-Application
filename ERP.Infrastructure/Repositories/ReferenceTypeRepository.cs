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
    public class ReferenceTypeRepository : IReferenceTypeRepository
    {
        private readonly HRMSContext _context;

        public ReferenceTypeRepository(HRMSContext context)
        {
            _context = context;
        }

        public async Task<List<ReferenceType>> GetAllAsync()
        {
            return await _context.ReferenceTypes.ToListAsync();
        }

        public async Task<ReferenceType> GetByIdAsync(int id)
        {
            return await _context.ReferenceTypes.FindAsync(id);
        }

        public async Task<int> AddAsync(ReferenceType referenceType)
        {
            _context.ReferenceTypes.Add(referenceType);
            await _context.SaveChangesAsync();
            return referenceType.Id;
        }

        public async Task UpdateAsync(ReferenceType referenceType)
        {
            _context.Entry(referenceType).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var referenceType = await GetByIdAsync(id);
            if (referenceType != null)
            {
                _context.ReferenceTypes.Remove(referenceType);
                await _context.SaveChangesAsync();
            }
        }
    }
}
