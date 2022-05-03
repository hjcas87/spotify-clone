import { redirectAuth } from '../../helper/redirectAuth';
import { Container } from './style';

const Login = () => {
    const handleClick = () => {
        redirectAuth();
    };

    return (
        <Container>
            <img
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
                alt="spotify"
            />
            <button onClick={handleClick}>Connect Spotify</button>
        </Container>
    );
};

export default Login;