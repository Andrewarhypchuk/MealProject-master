import { FlatList } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { CATEGORIES } from "../data/dummy-meal";

function Categories({navigation}){
    function renderCategory(itemData){

        function pressHandler(){
          navigation.navigate('MealsOverView',{
            categoryId:itemData.item.id
          })
        }
    
        return <CategoryGridTitle
         title={itemData.item.title} 
         color={itemData.item.color} 
         onPress={pressHandler}
         />
    }
    
   return <FlatList 
        numColumns={2}
       data={CATEGORIES} 
       keyExtractor={(item)=>item.id} 
       renderItem={renderCategory} />
}

export default Categories;