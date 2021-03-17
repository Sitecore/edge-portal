import { client } from "../lib/gql";
import { gql } from "@apollo/client";
import { ArticleResults } from "../interfaces/articles";

export async function GetLatestArticles(count: number) {
	var { data } = await client.query<ArticleResults>({
		query: gql`
			{
				ArticleList: allM_Content_a6a02 {
					total
					articles: results {
						id: id
						Title: a6a02_Title
						Abstract: a6a02_Abstract
						Body: a6a02_Body
						PublishDate: a6a02_ArticlePublishDate
					}
				}
			}
		`,
	});

	return data.ArticleList.articles.slice(0, count);
}
