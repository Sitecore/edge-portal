export interface Article {
	Name: string;
	Title: string;
	Abstract: string;
	Body: string;
}

export interface Articles {
	results: Article[];
}

export interface Category {
	Name: string;
	Title: string;
	Body: any;
	Abstract: string;
	Articles: Articles;
}

export interface Categories {
	results: Category[];
}
