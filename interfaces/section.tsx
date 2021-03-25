export interface Topic {
	Name: string;
	Id: string;
}

export interface Topics {
	results: Topic[];
}

export interface Category {
	Name: string;
	Title: string;
	Body?: any;
	Quote: string;
	Topics: Topics;
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
