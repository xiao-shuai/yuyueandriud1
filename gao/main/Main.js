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
class Main extends Component{

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

  // login=()=>{
  //     Alert.alert('Tips','Please log in and do it again.',[{'text':'Later on'},{'text':'ok',onPress:()=>{
  //       this.props.navigation.navigate('Login')
  //     }}])
  // }         

    render(){
      console.log('121',this.props.mbx.login);
      //  const login=this.props.mbx.login
        const aa=[
            {
              img:'https://c-ssl.duitang.com/uploads/item/201706/13/20170613200830_hHMLZ.thumb.700_0.jpeg',
              tit:'Coffee dessert',
              hot:'125'  
            },
            {
                img:'https://c-ssl.duitang.com/uploads/item/201601/11/20160111171905_zF5d3.thumb.700_0.jpeg',
                tit:'Turkish dessert',
                hot:'234'  
              },
              {
                img:'https://c-ssl.duitang.com/uploads/item/201804/29/20180429094010_zvWmK.thumb.700_0.jpeg',
                tit:'Jujube Mud Cake',
                hot:'345'  
              },
              {
                img:'https://c-ssl.duitang.com/uploads/item/201511/17/20151117211302_SKysX.thumb.700_0.jpeg',
                tit:'Coffee dessert',
                hot:'333'  
              },
              {
                img:'https://c-ssl.duitang.com/uploads/item/201508/15/20150815155144_Pd3sn.thumb.700_0.jpeg',
                tit:'Cakes and Pastries',
                hot:'233'  
              },
              {
                img:'https://c-ssl.duitang.com/uploads/item/201504/15/20150415H1746_tjWdz.thumb.700_0.jpeg',
                tit:'Cakes and Pastries',
                hot:'234'  
              },
              {
                img:'https://c-ssl.duitang.com/uploads/item/201801/02/20180102033254_iEPwV.thumb.700_0.jpeg',
                tit:'Cakes and Pastries',
                hot:'233'  
              },
              {
                img:'https://c-ssl.duitang.com/uploads/item/201704/10/20170410170512_NzuBV.thumb.700_0.jpeg',
                tit:'Cakes and Pastries',
                hot:'234'  
              },
              {
                img:'https://c-ssl.duitang.com/uploads/item/201506/15/20150615103608_f8rYx.thumb.700_0.jpeg',
                tit:'Cakes and Pastries',
                hot:'234'  
              },
        ]
        return(

            <SafeAreaView style={{flex:1}}>

             <ScrollView>
                 
            <View style={{height:gao.h*.25}}>
             {/* <Swiper  >
              <TouchableOpacity onPress={()=>{
                  this.props.navigation.navigate('Mainxq',{info:require('../img/ban1.png'),s:'1'})
              }}>
             <Image source={require('../img/ban1.png')} style={styles.ban}/>
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=>{
                  this.props.navigation.navigate('Mainxq',{info:require('../img/ban2.png'),s:'1'})
              }}>
            <Image source={require('../img/ban2.png')} style={styles.ban}/>
              </TouchableOpacity>
             </Swiper> */}
             </View>
              
              {/*  */}
              <View style={{paddingBottom:0,paddingTop:20,paddingLeft:20}}>
                  <Text style={{fontSize:18,fontWeight:'500',color:gao.theme}}>Hot desserts</Text>
              </View>

              <View style={{
              padding:20,
              flexDirection:'row',
              justifyContent:'space-between',
              flexWrap:'wrap'
              }}>
              {
                aa.map((i,k)=>{
                  return (
                      <TouchableOpacity style={{marginTop:20}} key={k} 
                        onPress={()=>{
                            
                             this.props.navigation.navigate('Mainxq',{info:i})
                            
                        }}
                      >
                       <Image source={{uri:i.img}} style={{width:gao.w*.28,height:gao.w*.28}} />
                       <Text style={{marginTop:8,fontWeight:'500',fontSize:16}}>{i.tit.substr(0,10)+'...'}</Text>
                      </TouchableOpacity>
                  )
                })
              }
              </View>
             </ScrollView>  
             <TouchableOpacity onPress={()=>{
                  
                  this.props.navigation.navigate('Relese')
                  
             }}>
                 <Icon name='ios-add-circle' style={{
                     fontSize:50,color:gao.theme,
                     position:'absolute',bottom:80,
                     right:20
                 }}/>
             </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

export default Main
const styles =StyleSheet.create({
    ban:{
        width:gao.w,
        height:gao.h*.25
    }
})