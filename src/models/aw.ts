

export interface RedditResponse {
    data: MainData; 
}
export interface MainData {
    children: Child[];
}

export interface Child {
    data: Data;
}

export interface Data {
    // name: string;
    title: string;
    thumbnail: string;
    permalink: string;
}