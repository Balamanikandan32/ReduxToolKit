import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from '../Features/Cake/cakeSlice'

const CakeView = () => {
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <button onClick={()=> dispatch(ordered())}>Buy Cake</button>
      <button onClick={()=> dispatch(restocked(5))}>Restock Cake</button>
    </div>
  )
}

export default CakeView