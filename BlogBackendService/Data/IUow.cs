using BlogBackendService.Models;

namespace BlogBackendService.Data
{
    public interface IUow
    {
        IRepository<App> Apps { get; }
        IRepository<Article> Articles { get; }
        void SaveChanges();
    }
}
