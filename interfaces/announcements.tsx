export type Announcement = {
  Title: string;
  Description: string;
  Url: string;
  hasUrl: boolean;
  Id: string;
};

export type AnnouncementResults = {
  __typename: string;
  results: Announcement[];
};

export type AnnouncementResult = {
  AnnouncementResults: AnnouncementResults;
};
