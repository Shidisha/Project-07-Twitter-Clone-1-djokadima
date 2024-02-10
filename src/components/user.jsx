import tweeterData from '../tweeter-data.json';

const UserTweet = () =>{
  return(
    <div className='side-bare-user'>
        <div className='bare-user'>
            <img className='user-picture' src={tweeterData.users[1]} alt='user picture'/>
            <span className='user-name'>{tweeterData.users[2]}</span>
            <img className='user-icone' src= {tweeterData.users[4]} alt='icone shop'/>
            <h6 className='user-tweeter'>@{tweeterData.users[3]}</h6>
        </div>
       <img className='user-see-more' src={tweeterData.users[5]} alt='icone see more'/>
    </div>
  )
}

export default UserTweet;