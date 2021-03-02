export interface YouTubeVideo {
    kind: string;
    etag: string;
    id: string;
    snippet: Snippet;
    contentDetails: ContentDetails;
}

export interface Snippet {
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

export interface ResourceID {
    kind:    string;
    videoId: string;
}


export interface ContentDetails {
    videoId:          string;
    videoPublishedAt: Date;
}

export interface Thumbnails {
    default:  ThumbnailProperties;
    medium:   ThumbnailProperties;
    high:     ThumbnailProperties;
    standard: ThumbnailProperties;
    maxres:   ThumbnailProperties;
}

export interface ThumbnailProperties {
    url:    string;
    width:  number;
    height: number;
}