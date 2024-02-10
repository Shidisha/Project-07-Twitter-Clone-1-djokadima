import {useParams} from "react-rooter-dom";

const Explore = () =>{
  const {id} = useParam()
  return(
    <div>
      <input placeholder='Search tweeter' className='trend-chearch '{id}/>
    </div>
  )
}

export default;