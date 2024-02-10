import tweeterData from '../tweeter-data.json';

const UserTweet = () =>{
  return(
    <div className='side-bare-user'>
        <div className='bare-user'>
            <img className='user-picture' src={tweeterData.users[0]} alt='user picture'/>
            <span className='user-name'>{tweeterData.users[1]}</span>
            <img className='user-icone' src= {tweeterData.users[3]} alt='icone shop'/>
            <h6 className='user-tweeter'>@{tweeterData.users[2]}</h6>
        </div>
       <img className='user-see-more' src={tweeterData.users[4]} alt='icone see more'/>
    </div>
  )
}

export default UserTweet;