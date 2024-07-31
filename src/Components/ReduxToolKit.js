import { createSlice } from "@reduxjs/toolkit";

const ReduxToolKit = ()=> {
    return(
        <div>
            <h1>ReduxToolKit</h1>
        </div>
    )
}
const initialState = {
    numOfCakes : 10,
}

const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers : {
        ordered: (state,action)=>{
            state.numOfCakes--
        },
        restocked : (state,action)=>{
            state.numOfCakes+=action.payload
        }
    }
})

export const {ordered, restocked}=cakeSlice.actions
export default cakeSlice.reducer
export {ReduxToolKit};