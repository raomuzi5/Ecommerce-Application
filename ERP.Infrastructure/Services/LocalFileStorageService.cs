using ERP.Domain.IServices;
using System.IO;
using System.Threading.Tasks;

namespace ERP.Infrastructure.Services
{
    public class LocalFileStorageService : IFileStorageService
    {
        private readonly string _uploadFolderPath;
        public LocalFileStorageService(string uploadFolderPath)
        {
            _uploadFolderPath = uploadFolderPath;
        }

        public async Task<string> SaveFileAsync(Stream stream, string fileName)
        {
            var filePath = Path.Combine(_uploadFolderPath, fileName);

            using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
                await stream.CopyToAsync(fileStream);
            }

            return filePath;
        }

        public async Task<byte[]> GetFileAsync(string filePath)
        {
            if (!File.Exists(filePath))
            {
                throw new FileNotFoundException("File not found", filePath);
            }

            return await File.ReadAllBytesAsync(filePath);
        }
    }
}
