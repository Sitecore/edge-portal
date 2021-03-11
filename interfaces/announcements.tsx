export type Announcement = {
    _60c6_Title: string,
    _60c6_Description: string,
    _60c6_LinkURL: string,
    id: string
}

export type allM_Content_360c6 = {
    __typename: string
    results: Announcement[]
}

export type AnnouncementResult = {
    allM_Content_360c6: allM_Content_360c6
}