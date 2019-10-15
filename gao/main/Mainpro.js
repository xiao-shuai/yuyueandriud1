import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    TextInput,AsyncStorage,StatusBar,
    SafeAreaView,Alert,Linking,Modal,ProgressViewIOS
} from 'react-native'
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/Ionicons'
import {gao} from '../sty/sty'
import {inject,observer} from 'mobx-react'

@inject(["mbx"])
@observer // 监听当前组件
class Mainpro extends Component{
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
        backgroundColor: gao.theme,
      },
      headerTintColor: '#fff',
  };
    constructor(props){
        super(props)
        this.state={
   
        }
        
    }
componentWillMount(){
  AsyncStorage.getItem('ok')
  .then(res=>{
      console.log('qq:',res);
      if(res!==null){
       this.props.mbx.change_login(true) 
      }
      
  })
  .catch()   
}

  login=()=>{
      Alert.alert('Tips','Please log in and do it again.',[{'text':'Later on'},{'text':'ok',onPress:()=>{
        this.props.navigation.navigate('Login')
      }}])
  }         

    render(){
      console.log('121',this.props.mbx.login);
       const login=this.props.mbx.login
       
    const aa= this.props.mbx.data
        return(

            <SafeAreaView style={{flex:1}}>
            <View style={{width:gao.w,height:gao.h*.1,
                backgroundColor:gao.theme,
                alignItems:'center',
                justifyContent:'center'
                }}>
           <Text style={{fontSize:18,fontWeight:'500',color:'white'}}>My homepage</Text>
            </View>
             <ScrollView contentContainerStyle={{padding:20}}>
           {
               aa.map((i,k)=>{
              return (
                  <TouchableOpacity style={{
                  flexDirection:'row',
                  alignItems:'center',
                  justifyContent:'space-between',
                  borderBottomWidth:1,
                  borderBottomColor:'#A6ACAF',
                  marginTop:k==0?0:20,
                  paddingBottom:20,
                  // paddingTop:20,
                  
                  }} 
                  onPress={()=>{
                
                     this.props.navigation.navigate('Mainxq',{info:i,k:k})
                    
                }}
                  >
                      <Image source={{uri:i.img}} 
                       style={{width:80,height:80,borderRadius:40,}}
                       />
                       <Text style={{color:'#A6ACAF',fontSize:18}}>{i.tit.length>10?i.tit.substr(0,10)+'...':i.tit}</Text>
                       <Icon name='ios-arrow-forward' style={{fontSize:20,color:'#A6ACAF'}}/>
                  </TouchableOpacity>
              )
               })
           }
               </ScrollView>  
             
            </SafeAreaView>
        )
    }
}

export default Mainpro
const styles =StyleSheet.create({
    ban:{
        width:gao.w,
        height:gao.h*.25
    }
})