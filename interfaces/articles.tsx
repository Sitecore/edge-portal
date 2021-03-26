export interface Article {
	Name: string;
	Title: string;
	Abstract: string;
	Body: string;
	Id: string;
}

export interface Articles {
	results: Article[];
}

export interface Category {
	Name: string;
	Title: string;
	Body?: any;
	Quote: string;
	Articles: Articles;
}

export interface Categories {
	results: Category[];
}

export interface Section {
	Name: string;
	Categories: Categories;
}

export interface Sections {
	results: Section[];
}
export interface SectionResult {
	Sections: Sections;
}
