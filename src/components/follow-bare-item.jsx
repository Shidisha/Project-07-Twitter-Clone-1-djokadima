const FollowBareItem = ({title, profil, nameTweeter, verified, titleAuthor}) =>{
  return(
    <div>
      <h4>{title}</h4>
      <img src={profil} alt='profile image'/>
      <p>{nameTweeter}</p>
      <img src={verified} alt='icon verified'/>
      <p>{titleAuthor}</p>
    </div>
  )
}

export default FollowBareItem;