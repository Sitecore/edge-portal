export type Article = {
	id: string;
	Title: string;
	Abstract?: string;
	Body?: string;
	PublishDate?: string;
};

export type ArticleList = {
	__typename: string;
	total: string;
	results: Article[];
};

export type ArticlesResult = {
	ArticleList: ArticleList;
};
