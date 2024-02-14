
const FollowBareItem = ({ title, profil, nameTweeter, verified, titleAuthor }) => {
  return (
      <div className ="follow-bare">
        <div className="who-to-follow-title">
            <h4>{title}</h4>
        </div>
        <div  className="trends-follow-details">
           <div className='who-to-follow-contenair'>
               <img  className="trend-avatar" src={profil} alt='profile image' />
               <p>{nameTweeter}</p>
               <img className="trend-title-author" src={verified} alt='icon verified' />
               
           </div>
        </div>
        <p className="trend-title-details">@{titleAuthor}</p>
        <button className="button-follow">Follow</button>
    </div>
  )
}

export default FollowBareItem;