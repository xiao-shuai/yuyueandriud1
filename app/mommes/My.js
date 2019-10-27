import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    TextInput,AsyncStorage,
    SafeAreaView
} from 'react-native'
import { zthui2 } from '../momqjstyle';

import {Button} from 'react-native-elements'
import {NavigationActions} from 'react-navigation'
class My extends Component{
    static navigationOptions = {
        title: '我的',
      };
    constructor(props){
      super(props)
      this.state={

      }
    }

   render(){
       const tttbb=[
           {
               n:'我的预约',
               go:'Dingdan'
           },
           {
            n:'意见反馈',
            go:'Faak'
        },
         {
            n:'关于我们',
            go:'ABGuanyuwm'
         },
        

       ]
       return(
           <SafeAreaView style={{flex:1,alignItems:'center'}}>
               <Button title='个人中心' 
               buttonStyle={{backgroundColor:zthui2.zhutisee,width:zthui2.big_width}}
               type='clear' titleStyle={{
            color:'white',fontSize:zthui2.big_width*.06,fontWeight:'500'
          }}/> 
               <View style={{flex:1,width:'100%',backgroundColor:zthui2.beijinsse}}>
                   {/* <Top title='Personal center'/> */}
                   {/* <Top title='Personal center'/> */}
                   {/* <Top title='Personal center'/> */}
                   {/* <Top title='Personal center'/> */}
                   {/* <Top title='Personal center'/> */}
                   
                 <View style={styles.t_v}>
              <Image source={require('../img/toux.png')} style={{
                  width:zthui2.big_width*.25,height:zthui2.big_width*.25,
              }} resizeMode={'contain'}/>
              <View style={{marginLeft:'10%'}}>
                  {/* <Top title='Personal center'/> */}
                  {/* <Top title='Personal center'/> */}
                  {/* <Top title='Personal center'/> */}
              <Text style={styles.text}>个人信息</Text>   
               <Text style={[styles.text,{marginTop:5}]}>姓名 : 张三</Text> 
              </View>
                 </View>
                 {/*  */}
                 {/* <Top title='Personal center'/> */}{/* <Top title='Personal center'/> */}{/* <Top title='Personal center'/> */}
                 {
                     tttbb.map((i,k)=>{
                     
                        return(
                            <TouchableOpacity style={{
                                width:'100%',padding:20,backgroundColor:'white',
                                marginTop:k==0?15:2
                            }} onPress={()=>{
                                this.props.navigation.navigate(i.go)
                            }}>
                             <Text style={{fontSize:zthui2.big_width*.05,color:zthui2.zthui2}}>{i.n}</Text>
                            </TouchableOpacity>
                        )
                      
                     })
                 }
              
              <Button  title='退出' buttonStyle={{marginTop:15,backgroundColor:zthui2.zhutisee}}
                onPress={()=>{
                    AsyncStorage.removeItem('ss')
                    this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Logg' })], 0)
                }}
              />

               </View>
           </SafeAreaView>
       )
   }

}

export default My
const styles=StyleSheet.create({
    t_v:{
        backgroundColor:'white',
        width:'100%',padding:10,marginTop:3,
        flexDirection:'row',alignItems:'center'
    },
    text:{
        fontSize:18,color:zthui2.zthui2,fontWeight:'500'
    }
})