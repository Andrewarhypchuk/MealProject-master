import { useLayoutEffect } from "react";
import { StyleSheet, Text,FlatList,  View } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-meal";

function MealsOverviewScreen({route,navigation}){

  const catID =  route.params.categoryId;

  const displayedMeals = MEALS.filter((item)=>{
    return item.categoryIds.indexOf(catID) >= 0
  })
  const categoryTitle = CATEGORIES.find((category)=> category.id === catID).title;
   useLayoutEffect(()=>{
    navigation.setOptions({
        title:categoryTitle
     })
   },[catID,navigation])
 
  function renderMealItem(itemData){
   const item = itemData.item;


   const mealItemProps = {
    id:item.id,
    title:item.title,
    imageUrl:item.imageUrl,
    affordability:item.affordability,
    complexity:item.complexity,
    duration:item.duration
};

    return <MealItem    {...mealItemProps} />
  }

  return <View style={styles.container}>
        <Text>
            Meals overView - {catID}
        </Text>
        <FlatList data={displayedMeals} 
           keyExtractor={item=>item.id}
           renderItem={renderMealItem}
           />
  </View>
}
export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})