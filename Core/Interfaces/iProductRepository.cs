using Core.Entities;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace Core.Interfaces
{
    public interface iProductRepository
    {
        Task<Product> GetProductByIdAsync(int id);
        Task<IReadOnlyList<Product>> GetProductsAsync(); 
        Task<IReadOnlyList<ProductBrand>> GetProductBrandAsync(); 
        Task<IReadOnlyList<ProductType>> GetProductTypesAsync();
    }
}