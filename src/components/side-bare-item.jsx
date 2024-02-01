const SideBareItem = ({label, icone}) =>{
  return(
        <div className ="flex-side">
            <a className='side-bare-user' href="#"><img src={icone} alt="icone"/></a>
            <span className="side-bare-label">{label}</span>
        </div>
  )
}

export default SideBareItem