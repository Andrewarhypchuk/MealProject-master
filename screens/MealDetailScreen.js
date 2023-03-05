import {useLayoutEffect} from 'react';
import { Image, StyleSheet, Text, View ,ScrollView } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import List from "../components/MealDetail/List";
import SubTitle from "../components/MealDetail/SubTitle";
import MealDetails from "../components/MealDetails";
import {MEALS} from '../data/dummy-meal';
import { addFavorite, removeFavorite } from '../redux/favorites';
import IconButton from './../components/IconButton';

function MealDetailScreen({route,navigation}){
    
    const mealId = route.params.mealId;
    const dispatch = useDispatch();
    const selectedMeal = MEALS.find((meal)=>meal.id === mealId);

    const favoriteMealsId = useSelector((state)=>state.favoriteMeals.ids) 
    const mealIsFavorite = favoriteMealsId.includes(mealId)
    function changeFavoriteStatusHandler(){
        if(mealIsFavorite){
           dispatch(removeFavorite(mealId))
        }else{
           dispatch(addFavorite(mealId))
        }
    }
    function headerButtonPressHandler(){
        console.log('Pressed!')
        changeFavoriteStatusHandler()
    }
   useLayoutEffect(()=>{
     navigation.setOptions({
        headerRight:()=>{
            return <IconButton icon='star' color='green' onPress={changeFavoriteStatusHandler} />
        }
     })
   },[navigation,headerButtonPressHandler,]);

    return <ScrollView>
        <Image style={styles.image} source={{ uri:selectedMeal.imageUrl}} />
        <Text style={styles.title}>
           {selectedMeal.title}
        </Text>
        <View>
          <MealDetails 
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
          />
        </View>
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <SubTitle>Ingredients</SubTitle>    
            <List data={selectedMeal.ingredients} />
            <SubTitle>Steps</SubTitle>
            <List data={selectedMeal.steps} />
          </View>
        </View>


              <View style={styles.detailContainer}>
           
 
           </View>
    </ScrollView>
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    detailContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'start'
    },
    image:{
        width:'100%',
        height:350
    },
    title:{
       fontSize:24,
       margin:8,
       fontWeight:'bold' ,
       textAlign:'center',
       color:'white'
    },
    detailText:{
        color:'white'
    },
    listOuterContainer:{
       alignItems:'center'
    },
    listContainer:{
        maxWidth:'80%',
    }
})


