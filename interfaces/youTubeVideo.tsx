export interface YouTubeVideo {
    kind: string;
    etag: string;
    id: string;
    snippet: Snippet;
    contentDetails: ContentDetails;
}

interface Snippet {
    publishedAt:            Date;
    channelId:              string;
    title:                  string;
    description:            string;
    thumbnails:             Thumbnails;
    channelTitle:           string;
    playlistId:             string;
    position:               number;
    resourceId:             ResourceID;
    videoOwnerChannelTitle: string;
    videoOwnerChannelId:    string;
}

interface ResourceID {
    kind:    string;
    videoId: string;
}


interface ContentDetails {
    videoId:          string;
    videoPublishedAt: Date;
}

interface Thumbnails {
    default:  ThumbnailProperties;
    medium:   ThumbnailProperties;
    high:     ThumbnailProperties;
    standard: ThumbnailProperties;
    maxres:   ThumbnailProperties;
}

interface ThumbnailProperties {
    url:    string;
    width:  number;
    height: number;
}