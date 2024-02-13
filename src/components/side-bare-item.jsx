const SideBareItem = ({name, iconeName}) =>{
  return(
        <div className ="flex-side">
            <span className='side-bare-icone'>{iconeName}</span>
            <span className="side-bare-label">{name}</span>
        </div>
  )
}

export default SideBareItem