import { createSlice } from "@reduxjs/toolkit";

const FavoritesSlice =  createSlice({
    name:'favorites',
    initialState:{
        ids:[],   
    },
    reducers:{
        addFavorite:(state,action)=>{
          state.ids.push(action.payload)
        },
        removeFavorite:(state,action)=>{
           state.ids.splice(state.ids.indexOf(action.payload),1)
        }
    }
}
)
export const{addFavorite,removeFavorite} = FavoritesSlice.actions;
export default FavoritesSlice.reducer