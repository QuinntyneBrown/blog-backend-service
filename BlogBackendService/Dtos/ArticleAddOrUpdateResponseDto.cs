namespace BlogBackendService.Dtos
{
    public class ArticleAddOrUpdateResponseDto: ArticleDto
    {
        public ArticleAddOrUpdateResponseDto(Models.Article entity)
        :base(entity)
        {

        }
    }
}
