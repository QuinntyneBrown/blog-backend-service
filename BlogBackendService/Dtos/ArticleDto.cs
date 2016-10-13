namespace BlogBackendService.Dtos
{
    public class ArticleDto
    {
        public ArticleDto()
        {

        }

        public ArticleDto(Models.Article entity)
        {
            Id = entity.Id;
            Name = entity.Title;
        }

        public int? Id { get; set; }
        public string Name { get; set; }
    }
}
