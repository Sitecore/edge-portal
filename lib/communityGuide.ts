import { client } from "./gql";
import { gql } from "@apollo/client";
import { CommunityGuideResult } from "../interfaces/communityGuides";

export async function GetTopCommunityGuides(count: number) {
  var { data } = await client.query<CommunityGuideResult>({
    query: gql`
    {
      CommunityGuideResults:  allM_Content_3f0bc{
        results {
          Title: _f0bc_Title
          Description: _f0bc_Description
          Author: _f0bc_Author,
          Url: announcementURL,
          Id: id
        }
      }
    }
    `,
  });

  return data.CommunityGuideResults.results.slice(0, count);
}