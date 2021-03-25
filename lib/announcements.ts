import { client } from "../lib/gql";
import { gql } from "@apollo/client";
import { AnnouncementResult } from "../interfaces/announcements";

export async function GetTopAnnouncements(count: number) {
	var { data } = await client.query<AnnouncementResult>({
		query: gql`
			{
				AnnouncementResults: allM_Content_d6261 {
					results {
						Title: d6261_Title
						Description: d6261_Description
						Url: announcementURL
						hasUrl: hasURL
						Id: id
					}
				}
			}
		`,
	});

	return data.AnnouncementResults.results.slice(0, count);
}
