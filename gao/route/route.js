import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import Main from '../main/Main'
import Shequ from '../shequ/Shequ'
// import My from '../my/My'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {gao} from '../sty/sty'
import Relese from '../main/Relese'
// import Login from '../login/Login'
// import New from '../login/New'
import Mainxq from '../main/Mainxq'
// import Shequxq from '../shequ/Shequxq'
import Sug from '../my/Sug'
import My_relese from '../my/My_relese'
import Mainpro from '../main/Mainpro'
import Shou from '../main/Shou'
const SOME=createBottomTabNavigator(
    {
        Mainpro: Mainpro,
        Relese:Relese,
        Shou:Shou,
        Sug:Sug,
        
      },
      {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
           
            let iconName;
            if (routeName === 'Mainpro') {
                 iconName = 'home';
              // Sometimes we want to add badges to some icons. 
              // You can check the implementation below.
            //   IconComponent = HomeIconWithBadge; 
            } else if (routeName === 'Relese') {
                 iconName = `cloud-outline`;
            } else if (routeName==`Shou`){
              iconName=`heart`
            }
            else if (routeName==='Sug'){
                 iconName=`account`
            }
    
            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} style={{fontSize:25,color:focused?gao.theme:gao.hui}}/>;
          },
        }),
        tabBarOptions: {
          activeTintColor: gao.theme,
          inactiveTintColor: 'gray',
        },
      }
  )


  const SOME_PAGE=createStackNavigator({
    Btm:{
      screen:SOME,
      navigationOptions:()=>({
       header:null,
       headerBackTitle:null,
   })
    },
    Relese:{screen:Relese},
   
    // New:{screen:New},
    Mainxq:{screen:Mainxq},
    // Shequxq:{screen:Shequxq},
    Sug:{screen:Sug},
    My_relese:{screen:My_relese}

   
  })   


  export default createAppContainer(SOME_PAGE)