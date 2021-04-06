import { YouTubeVideo } from "../interfaces/youTubeVideo";

const YOUTUBE_API_KEY = process.env.THOMAS_YOUTUBE_API_KEY;


export async function GetYouTubeVideos(): Promise<YouTubeVideo[]> {
    const res = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=PL1jJVFm_lGnwB3QBhZf0DqE7KTCfJGvzW&key=${YOUTUBE_API_KEY}`)
    
    let data = {
        items: []
    };
    if(res.ok) {
        data = await res.json()
    } 

    return data.items as YouTubeVideo[];
}