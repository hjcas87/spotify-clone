import { Container, SidebarLinkList, MenuItem, Logo, HeaderSidebar } from './styles';
import { IoLibrary } from 'react-icons/io5';
import { MdHomeFilled, MdSearch } from 'react-icons/md';
import Playlists from './Playlists';

const Sidebar = () => {
    return (
        <Container>
            <HeaderSidebar>
                <Logo>
                    <img
                        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
                        alt="spotify"
                    />
                </Logo>
                <SidebarLinkList>
                    {linksArray.map((link) => (
                        <MenuItem key={link.label}>
                            {link.icon}
                            <span>{link.label}</span>
                        </MenuItem>
                    ))}
                </SidebarLinkList>
            </HeaderSidebar>
            <Playlists />
        </Container>
    );
};

const linksArray = [
    {
        icon: <MdHomeFilled />,
        label: 'Home',
    },
    {
        icon: <MdSearch />,
        label: 'Search',
    },
    {
        icon: <IoLibrary />,
        label: 'Your Library',
    },
];

export default Sidebar;
