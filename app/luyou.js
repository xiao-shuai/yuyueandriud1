import React,{Component} from 'react'
import { 
     createAppContainer,
    } from 'react-navigation';
 import { createBottomTabNavigator} from 'react-navigation-tabs'
 import {createStackNavigator} from 'react-navigation-stack'
 import  Ionicons  from 'react-native-vector-icons/Ionicons' 
 import  {
     Chainfo,
     MonHome,
     My,
     DiiZhi,Logg,OrderDingdan,ABGuanyuwm,Faak
} from  './allpages'
import {zthui2} from './momqjstyle'
let whereIsMyMind = [
  "Ooooooh - stop",
  "With your feet in the air and your head on the ground",
  "Try this trick and spin it, yeah",
  "Your head will collapse",
  "But there's nothing in it",
  "And you'll ask yourself",
  "Where is my mind [3x]",
  "Ooooh",
  "With your feet in the air and your head on the ground",
  "Ooooh",
  "Try this trick and spin it, yeah",
  "Ooooh",
  "Ooooh"
];

 const rroott=createBottomTabNavigator(
    {
        Home:MonHome,
        Map:DiiZhi,
        Order:Chainfo,    
        Me:My,
      },
      {
       initialRouteName: 'Home',
       defaultNavigationOptions:({ navigation })=>({
           tabBarIcon:({focused, horizontal, tintColor})=>{
          
          const { routeName } = navigation.state;
           let iconName;
           if (routeName === 'Home') {
               iconName ='ios-home';
             } else if (routeName === 'Order') {
               iconName = 'ios-paper';
             }else if(routeName==='Map'){
              iconName='ios-pin'
             }
             else{
                 iconName='ios-person'
             }
             return  <Ionicons name={iconName} size={horizontal ? 20 : 25} 
         color={focused?zthui2.zhutisee:zthui2.zthui} />;
        }
       }),
       tabBarOptions: {
          activeTintColor:zthui2.zhutisee,
          inactiveTintColor:zthui2.zthui,
        },
      }
 )

 const Tymonlvy =createStackNavigator({
  rroott:{
        screen:rroott,
        navigationOptions:()=>({
            header:null,
            headerBackTitle:null,
        })
      },
      MonHome:{
        screen:MonHome,
        navigationOptions:()=>({
            header:null,
            headerBackTitle:null,
        })
      },
      
      Logg:{
        screen:Logg,
        navigationOptions:()=>({
          
            header:null
        })
      },
      Dingdan:{
        screen:OrderDingdan,
        navigationOptions:()=>({
            title:'预约详情',
            headerTintColor:zthui2.zhutisee
          
        })
      },
      ABGuanyuwm:{
        screen:ABGuanyuwm,
        navigationOptions:()=>({
            title:'关于我们',
            headerTintColor:zthui2.zhutisee
            // header:null
        })
      },
      Faak:{
        screen:Faak,
        navigationOptions:()=>({
            title:'反馈',
            headerTintColor:zthui2.zhutisee
            // header:null
        })
      },
    


 })

 export default createAppContainer(Tymonlvy)
