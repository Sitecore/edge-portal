import { client } from "../lib/gql";
import { gql } from "@apollo/client";
import { BlogpostsResult } from "../interfaces/articles";

export async function GetLatestArticles(count: number) {
	var { data } = await client.query<BlogpostsResult>({
		query: gql`
			{
				Blogposts: allM_Content_Blog {
					results {
						Title: blog_Title
						Abstract: blog_Abstract
						Body: blog_Body
						Id: id
						PublishDate: content_PublishedOn
						Categories: blogCategoryToContent {
							results {
								Name: taxonomyName
							}
						}
					}
				}
			}
		`,
	});

	return data.Blogposts.results.slice(0, count);
}
