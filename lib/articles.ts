import { client } from "lib/gql";
import { gql } from "@apollo/client";
import { SectionResult } from "interfaces/articles";

export async function GetCategoriesBySection(sectionName: string) {
  var { data } = await client.query<SectionResult>({
    query: gql`
			{
				Sections: allDEMO_ContentTopic(where: { taxonomyName_eq: "${sectionName}" }) {
					results {
						Name: taxonomyName
						Categories: contentTopicToContent {
							results {
								Name: content_Name
								id
							}
						}
					}
				}
			}
		`,
  });

  return data.Sections.results[0].Categories;
}

export async function GetMenuStructureBySection(sectionName: string) {
  var { data } = await client.query<SectionResult>({
    query: gql`
			{
				Sections: allDEMO_ContentTopic(where: { taxonomyName_eq: "${sectionName}" }) {
					results {
						Name: taxonomyName
						Categories: contentTopicToContent(orderBy: CREATEDON_ASC) {
							results {
								Name: content_Name
								Articles: contentToRelatedContent_Children(orderBy: CREATEDON_ASC) {
									results {
										... on M_Content_f3012 {
											Name: content_Name
											Title: f3012_Title
										}
									}
								}
							}
						}
					}
				}
			}
		`,
  });

  return data.Sections.results[0];
}

export async function GetCategory(sectionName: string, categoryName: string) {
  var { data } = await client.query<SectionResult>({
    query: gql`
        { 
			Sections: allDEMO_ContentTopic(where: { taxonomyName_eq: "${sectionName}" }) {
				results {
					Name: taxonomyName
					Categories: contentTopicToContent(where: { content_Name_eq: "${categoryName}" }) {
						results {
							Name: content_Name
							...on M_Content_f3012 {
								Title: f3012_Title
								Abstract: f3012_Abstract
								Body: f3012_Body
							}
							Articles: contentToRelatedContent_Children {
								results {
									Name: content_Name
									Id: id
								}
							}
						}
					}
				}
			}
		}
		`,
  });

  return data.Sections.results[0].Categories.results[0];
}

export async function GetArticleByName(
  sectionName: string,
  categoryName: string,
  topicName: string
) {
  var { data } = await client.query<SectionResult>({
    query: gql`
        { 
			Sections: allDEMO_ContentTopic(where: { taxonomyName_eq: "${sectionName}" }) {
				results {
					Name: taxonomyName
					Categories: contentTopicToContent(where: { content_Name_eq: "${categoryName}" }) {
						results {
							Name: content_Name
							Articles: contentToRelatedContent_Children(where: { content_Name_eq: "${topicName}"}) {
								results {
									...on M_Content_f3012 {
                                        Name: content_Name
    									Id: id
    									Title: f3012_Title
										Abstract: f3012_Abstract
										Body: f3012_Body
									}
								}
							}
						}
					}
				}
			}
		}
		`,
  });

  return data.Sections.results[0].Categories.results[0].Articles.results[0];
}

export async function GetArticlesByCategory(
  sectionName: string,
  categoryName: string
) {
  var { data } = await client.query<SectionResult>({
    query: gql`
        { 
			Sections: allDEMO_ContentTopic(where: { taxonomyName_eq: "${sectionName}" }) {
				results {
					Name: taxonomyName
					Categories: contentTopicToContent(where: { content_Name_eq: "${categoryName}" }) {
						results {
							Name: content_Name
							Articles: contentToRelatedContent_Children {
								results {
									Name: content_Name
									Id: id
								}
							}
						}   
					}
				}
			}
		}
		`,
  });

  return data.Sections.results[0].Categories.results[0].Articles.results;
}
