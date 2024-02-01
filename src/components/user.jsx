import imageProfil from '../images/profile-photo.png';
import Private from '../icones/Private.png';
import More from '../icones/More-2.png';

const UserTweet = () =>{
  return(
    <div className='side-bare-user'>
      <img className='user-picture' src={imageProfil} alt='user picture'/>
      <span className='user-name'>djo kadima</span>
      <img className='user-icone' src={Private} alt='icone shop'/>
      <h6 className='user-tweeter'>@djo</h6>
      <img className='user-see-more' src={More} alt='icone see more'/>
    </div>
  )
}

export default UserTweet