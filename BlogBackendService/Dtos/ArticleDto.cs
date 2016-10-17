using BlogBackendService.Models;
using System;

namespace BlogBackendService.Dtos
{
    public class ArticleDto
    {
        public ArticleDto() { }

        public ArticleDto(Article entity)
        {
            Id = entity.Id;
            Title = entity.Title;
            HtmlContent = entity.HtmlContent;
            HtmlExcerpt = entity.HtmlExcerpt;
            Created = entity.Created;
            Published = entity.Published;
            IsPublished = entity.IsPublished;
        }

        public int? Id { get; set; }
        public string Title { get; set; }
        public string HtmlContent { get; set; }
        public string HtmlExcerpt { get; set; }
        public bool IsPublished { get; set; }
        public DateTime Created { get; set; }
        public DateTime Published { get; set; }
    }
}
