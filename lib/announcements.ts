import { client } from '../lib/gql'
import { gql } from '@apollo/client'
import { Announcement, AnnouncementId, AnnouncementPrefix } from '../interfaces/announcements'

export async function GetTopAnnouncements(count: number) {
    var announcements = await client.query<Announcement[]>({
        query: gql`
        { 
          allM_Content_${AnnouncementId}
          {
            results
            {
              _${AnnouncementPrefix}_Title,
              _${AnnouncementPrefix}_Description,
              _${AnnouncementPrefix}_LinkURL
            }
          }
        }      
        `
    })

    return announcements.data.slice(0,count);
}
