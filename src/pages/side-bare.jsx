import Home from '../icones/Home-Fill.png';
import Explore from '../icones/Fill.png';
import Notifications from '../icones/Notifications.png';
import Messages from '../icones/Messages.png';
import Bookmark from '../icones/Bookmarks.png';
import Lists from '../icones/Lists.png';
import Profile from '../icones/Profile.png';
import More from '../icones/More-2.png';
import SideBareItem from '../components/side-bare-item.jsx';
import Twitter from '../icones/Twitter.png';
import UserTweet from '../components/user.jsx';


const SideBare = () =>{
  const itemSides = [
    {
      href: '/',
      icone: Home,
      label: 'Home',
    },
    {
      href:'/Explore',
      icone:Explore,
      label:'Explore',
    },
    {
      href: '/Notifications',
      icone: Notifications,
      label: 'Notifications',
    },
    {
      href: '/Messages',
      icone: Messages,
      label: 'Messages',
    },
    {
      href: '/Bookmarks',
      icone: Bookmark,
      label: 'Bookmarks',
    },
    {
      href: '/Lists',
      icone: Lists,
      label: 'Lists',
    },
    {
      href: '/Profile',
      icone: Profile,
      label: 'Profile',
    },
    {
      href: '/More',
      icone: More,
      label: 'More',
    },
  ];
  return(
    <div>
          <img className='side-bare-logo' src={Twitter} alt="logo tweeter"/>
          {itemSides.map((itemSide)=>(
            <SideBareItem
            key={itemSide.href}
            href={itemSide.href}
            label ={itemSide.label}
            icone ={itemSide.icone}
            />
          ))}
          <button className="side-bare-button">Tweet</button>
          <UserTweet/>
    </div>
  )
}
export default SideBare 