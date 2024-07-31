import { configureStore, createSlice } from "@reduxjs/toolkit";

const ReduxToolKit = ()=> {
    return(
        <div>
            <h1>ReduxToolKit</h1>
        </div>
    )
}
const initialCakeState = {
    numOfCakes : 10,
}

const initialIcecreamState = {
    numOfIcecream : 20,
}

const cakeSlice = createSlice({
    name: "cake",
    initialState:initialCakeState,
    reducers : {
        ordered: (state,action)=>{
            state.numOfCakes--
        },
        restocked : (state,action)=>{
            state.numOfCakes+=action.payload
        }
    }
})

const IcecreamSlice = createSlice({
    name: "icecream",
    initialState:initialIcecreamState,
    reducers: {
        ordered:(state,action)=>{
            state.numOfIcecream--
        },
        restocked:(state,action)=>{
            state.numOfIcecream+= action.payload
        }
    }
})
const store = configureStore({
    reducer:{
        cake:cakeSlice.reducer,
        icecream: IcecreamSlice.reducer,
    },
})


console.log("initial state",store.getState())
const unsubscribe = store.subscribe(()=> console.log("updated state",store.getState()))

store.dispatch(cakeSlice.actions.ordered())
store.dispatch(cakeSlice.actions.restocked(5))
store.dispatch(IcecreamSlice.actions.ordered())
store.dispatch(IcecreamSlice.actions.restocked(3))



export const {ordered, restocked}=cakeSlice.actions
export default cakeSlice.reducer
export {ReduxToolKit};