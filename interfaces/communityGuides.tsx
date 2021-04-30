export type CommunityGuide = {
    Title: string;
    Description: string;
    Author: String,
    Url: string;
    Id: string;
};

export type CommunityGuideResults = {
    __typename: string;
    results: CommunityGuide[];
};

export type CommunityGuideResult = {
    CommunityGuideResults: CommunityGuideResults;
};
