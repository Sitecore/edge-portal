import { Categories } from './articles';

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
