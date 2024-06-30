
namespace ERP.Domain.IServices
{
    public interface IFileStorageService
    {
            Task<string> SaveFileAsync(Stream stream, string fileName);
            Task<byte[]> GetFileAsync(string filePath);
    }
}
