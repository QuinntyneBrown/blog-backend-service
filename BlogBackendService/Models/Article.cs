namespace BlogBackendService.Models
{
    public class Article
    {
        public int Id { get; set; }
        public int? AppId { get; set; }
        public string Name { get; set; }
        public string Author { get; set; }
        public string Slug { get; set; }
        public string HtmlCotent { get; set; }
        public string HtmlExcerpt { get; set; }
        public bool IsDeleted { get; set; }

        public App App { get; set; }
    }
}
