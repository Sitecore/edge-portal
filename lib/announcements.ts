import { client } from '../lib/gql'
import { gql } from '@apollo/client'
import { AnnouncementResult } from '../interfaces/announcements'

export async function GetTopAnnouncements(count: number) {
    var { data } = await client.query<AnnouncementResult>({
        query: gql`
        { 
          allM_Content_360c6
          {
            results
            {
              _60c6_Title,
              _60c6_Description,
              _60c6_LinkURL,
              id
            }
          }
        }      
        `
    })

    return data.allM_Content_360c6.results.slice(0,count);
}