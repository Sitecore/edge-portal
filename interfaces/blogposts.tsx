export type Blogpost = {
  id: string;
  Title: string;
  Abstract?: string;
  Body?: string;
  PublishDate?: string;
};
``;
export type Blogposts = {
  __typename: string;
  total: string;
  results: Blogpost[];
};

export type BlogpostsResult = {
  Blogposts: Blogposts;
};
