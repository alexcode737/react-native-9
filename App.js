import {  View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {HomeScreen} from "./Screens/HomeScreen";
import {SettingsScreen} from "./Screens/SettingsScreen";
import { ShoopingScreen } from "./Screens/ShoopingScreen";
import { ContactScreen } from "./Screens/Contact";
import {Ionicons} from "@expo/vector-icons"

const Tab = createBottomTabNavigator();

export default function app(){
  return(
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor:'red',
          tabBarInactiveTintColor:'purple',
          tabBarActiveBackgroundColor:'grey'
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{title:'Inicio',tabBarIcon:({color, size})=>
          (
            <Ionicons name="home" color={'red'} size={18}/>
          )}}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{title:'Configuracion',tabBarIcon:({color, size})=>
          (
            <Ionicons name="settings" color={'orange'} size={18}/>
          )}}
        />
        <Tab.Screen
          name="Contact"
          component={ContactScreen}
          options={{title:'Contactos',tabBarIcon:({color, size})=>
          (
            <Ionicons name="body-outline" color={'orange'} size={18}/>
          )}}
        />
        <Tab.Screen
          name="Shooping"
          component={ShoopingScreen}
          options={{title:'Tienda',tabBarIcon:({color, size})=>
          (
            <Ionicons name="cart-outline" color={'orange'} size={18}/>
          )}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

