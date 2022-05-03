

export const redirectAuth = () => {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const redirectUrl = import.meta.env.VITE_REDIRECT_URL;
    const apiUrl = import.meta.env.VITE_API_URL;
    const scope = [
        'user-read-email',
        'user-read-private',
        'user-modify-playback-state',
        'user-read-playback-state',
        'user-read-currently-playing',
        'user-read-recently-played',
        'user-read-playback-position',
        'user-top-read',
    ];
    window.location.href = 
    `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(' ')}&response_type=token&show_dialog=true`
}