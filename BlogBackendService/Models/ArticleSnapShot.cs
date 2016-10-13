using System;

namespace BlogBackendService.Models
{
    public class ArticleSnapShot
    {
        public int Id { get; set; }
        public int? AppId { get; set; }
        public int? ArticleId { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Slug { get; set; }
        public string HtmlCotent { get; set; }
        public string HtmlExcerpt { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsPublished { get; set; }
        public DateTime LastModified { get; set; }
        public DateTime Created { get; set; }

        public App App { get; set; }
        public Article Article { get; set; }
    }
}
