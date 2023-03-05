import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import Categories from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverViewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import {createDrawerNavigator} from '@react-navigation/drawer'
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import {store} from './redux/store.js'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return <Drawer.Navigator  screenOptions={{
    headerStyle:{  backgroundColor:'#351401' },
    headerTintColor:'white',
    sceneContainerStyle:{      backgroundColor:'#3f2f25'       },
    drawerContentStyle:{      backgroundColor:'#3f2f25'       },
    drawerInactiveTintColor:'white',
    drawerActiveTintColor:'#351401',
    drawerActiveBackgroundColor:'#e4baa1'
  }}

  >
    <Drawer.Screen 
    name='Categories'
    component={Categories} 
    options={{
      title:'All Categories',
      drawerIcon:({color,size})=> <Ionicons
       name='list' 
       color={color} 
       size={size}
       /> 
    }}
    >

    </Drawer.Screen>
    <Drawer.Screen 
    name='Favorites'
    component={FavoritesScreen}
    options={{
      drawerIcon:({color,size})=> <Ionicons
       name='star' 
       color={color} 
       size={size}
       /> 
    }}
    >

    </Drawer.Screen>
  </Drawer.Navigator>
}

export default function App() {
  return (
   <>
   <StatusBar  style='light'/>
   <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
         headerStyle:{  backgroundColor:'#351401' },
         headerTintColor:'white',
         contentStyle:{      backgroundColor:'#3f2f25'       }
      }}>
        <Stack.Screen 
        name='DrawerScreen' 
        component={DrawerNavigator} 
        options={{
          headerShown:false
        }}
      
        />
        <Stack.Screen 
           name='MealsOverView' 
           component={MealsOverviewScreen} 
           />
           <Stack.Screen 
               name='MealDetail' 
               component={MealDetailScreen}
               />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
