

export interface State {
    auth: {
        token: null | string;
    };
    playlists: Item[] | null;
    userInfo: {
        userId: string;
        userName: string;
    }  | null;
    selectedPlaylistId: string | null
    selectedPlaylist: Playlist | null
    isIntersecting: {
        nav: boolean | null,
    }
    currentlyPlaying: {
        id: string,
        name: string,
        artists: string[],
        image: string
    } | null
    playerState: boolean | null
}

export interface Item {
    id:            string;
    name:          string; 
} 

export interface Playlist {
    description: string;
    id:          string;
    image:       string;
    name:        string;
    tracks:      Tracks[];
}

export interface Tracks {
    album:        string;
    artists:      string[];
    context_uri:  string;
    duration:     number;
    id:           string;
    image:        string;
    name:         string;
    track_number: number;
}

