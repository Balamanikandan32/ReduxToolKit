import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from '../Features/Icecream/icecreamSlice'

const IcecreamView = () => {
    const[restockIcecream, setRestockIcecream] = useState(1)
    const numOfIcecream =useSelector(state => state.icecream.numOfIcecream)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Icecreams - {numOfIcecream}</h2>
      <button onClick={()=> dispatch(ordered())}>Buy Icecream</button>
      <input name = "restockIcecream" value ={restockIcecream} onChange={(e)=> setRestockIcecream(e?.target?.value)} />
      <button onClick={()=> dispatch(restocked(parseInt(restockIcecream)))}>Restock Icecream</button>
    </div>
  ) 
}

export default IcecreamView