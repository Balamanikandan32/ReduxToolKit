import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from '../Features/Icecream/icecreamSlice'

const IcecreamView = () => {
    const numOfIcecream =useSelector(state => state.icecream.numOfIcecream)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Icecreams - {numOfIcecream}</h2>
      <button onClick={()=> dispatch(ordered())}>Buy Icecream</button>
      <button onClick={()=> dispatch(restocked(10))}>Restock Icecream</button>
    </div>
  ) 
}

export default IcecreamView