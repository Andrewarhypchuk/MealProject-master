import { StyleSheet, Text } from "react-native";
import { MEALS } from "../data/dummy-meal";
import { useSelector } from 'react-redux';

function FavoritesScreen(){
   
const favoriteMealsIds = useSelector(state => state.favoriteMeals.ids)
const favoriteMeals = MEALS.filter((meal)=>
    favoriteMealsIds.includes(meal.id)
)
  if(favoriteMeals.length === 0){
 return <Text style={styles.text}>
      You dont have favorites yet.
   </Text>
  }

}

export default FavoritesScreen;

const styles = StyleSheet.create({
   text:{
      fontSize:20,
      color:'white',
      textAlign:'center',
      width:'100%',
      padding:10
   }
})