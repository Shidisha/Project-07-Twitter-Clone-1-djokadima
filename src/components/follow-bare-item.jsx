const FollowBareItem = ({ title, profil, nameTweeter, verified, titleAuthor }) => {
  return (
    <div>
      <div>
      <h4>{title}</h4>
      <img src={profil} alt='profile image' />
      <p>{nameTweeter}</p>
      <img src={verified} alt='icon verified' />
      <p>@{titleAuthor}</p>
      </div>
      <button>Follow</button>
    </div>
  )
}

export default FollowBareItem;