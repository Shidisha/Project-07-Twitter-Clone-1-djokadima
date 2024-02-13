import SideBareItem from '../components/side-bare-item.jsx';
import { FaTwitter } from "react-icons/fa";
import { RiHome2Line } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiMessageAlt } from "react-icons/bi";
import { CiBookmark } from "react-icons/ci";
import { IoMdList } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
import { CiHashtag } from "react-icons/ci";


const SideBare = () =>{
  const sideItems = [
    {
      id: 1,
      iconeName: <FaTwitter />,
    },
    {
      id:2,
      iconeName: <RiHome2Line />,
      name:"Home",
    },
    {
      id: 3,
      iconeName: <CiHashtag />,
      name: "Explore",
    },
    {
      id: 4,
      iconeName: <IoNotificationsOutline />,
      name: "Notifications"
    },
    {
      id: 5,
      iconeName: <BiMessageAlt />,
      name: "Messages",
    },
    {
      id:6,
      iconeName: <CiBookmark />,
      name: "Bookmarks",
    },
    {
      id:7,
       iconeName: <IoMdList />,
      name: "Lists",
    },
    {
      id:8,
      iconeName:  <CgProfile />,
      name: "Profile",
    },
    {
      id: 9,
      iconeName: <CiCircleMore />,
      name: "More",
    }
  ];
  return(
    <div className='side-bare'>
         <div>
              {sideItems.map((itemSide)=>(
                  <SideBareItem
                      key={itemSide.id}
                    name ={itemSide.name}
                    iconeName={itemSide.iconeName}
                  />
              ))}
             <button className="side-bare-button">Tweet</button>
         </div>
     </div>
  )
}
export default SideBare 