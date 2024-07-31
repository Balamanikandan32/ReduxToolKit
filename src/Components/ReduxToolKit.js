import { configureStore, createSlice } from "@reduxjs/toolkit";

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

const store = configureStore({
    reducer:{
        cake:cakeSlice.reducer
    },
})


console.log("initial state",store.getState())
const unsubscribe = store.subscribe(()=> console.log("updated state",store.getState()))

store.dispatch(cakeSlice.actions.ordered())
store.dispatch(cakeSlice.actions.restocked(5))


export const {ordered, restocked}=cakeSlice.actions
export default cakeSlice.reducer
export {ReduxToolKit};