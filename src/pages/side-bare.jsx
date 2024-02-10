import SideBareItem from '../components/side-bare-item.jsx';
import UserTweet from '../components/user.jsx';
import tweeterData from '../tweeter-data.json';


const SideBare = () =>{
  return(
    <div className='side-bare'>
         <div>
            <img className='side-bare-logo' src={tweeterData.itemSides[1]} alt="logo tweeter"/>
            {tweeterData.itemSides.map((itemSide)=>(
              <SideBareItem
              key={itemSide.id}
              label ={itemSide.label}
              icone ={itemSide.icone}
              />
            ))}
            <button className="side-bare-button">Tweet</button>
         </div>
         <div className='side-bare-user'>
           <UserTweet/>
         </div>
    </div>
  )
}
export default SideBare 