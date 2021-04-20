import { client } from "./gql";
import { gql } from "@apollo/client";
import { Blogpost, BlogpostsResult } from "../interfaces/blogposts";

export async function GetLatestBlogposts(count: number) {
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

export async function GetBlogpostByTitle(id: string): Promise<Blogpost> {
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

  // TODO: Should be able to get specific post in Query, not filter afterwards
  let blogpost = data.Blogposts.results.filter(b => b.Id === id)[0];
  return blogpost;

}

export async function GetLatestBlogpostTitles() {
  var { data } = await client.query<BlogpostsResult>({
    query: gql`
      {
        Blogposts: allM_Content_Blog {
          results {
            Id: id
          }
        }
      }
    `,
  });

  return data.Blogposts.results.map(blogpost => {
    return {
      params: {
        title: blogpost.Id
      }
    }
  })
}
