import { configureStore } from "@reduxjs/toolkit";
import FavoritesSlice from './favorites';


 export const store = configureStore({
    
    reducer:{
        favoriteMeals:FavoritesSlice
    }

})