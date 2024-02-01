import { useState } from "react";

const increDecre =() =>{
  const [value, setValue] = useState(0)
  return(
    <>
      <p>vous avez cliquer {value} fois</p>
      <button onClick={()=>setValue(value +1)}>cliquer{increDecre} fois</button>
      
    </>
  )
}

