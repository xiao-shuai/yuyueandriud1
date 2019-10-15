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
import {Button} from 'react-native-elements'
import {inject,observer} from 'mobx-react'

@inject(["mbx"])
@observer // 监听当前组件
class Mainxq extends Component {

    
    constructor(props){
        super(props)
        
        this.state={
           
        }
        
    }
   
    static navigationOptions=({ navigation })=>{
         return {
            title: 'details',
            header:null,
            headerStyle: {
                backgroundColor: gao.theme,
              },
              headerTintColor: '#fff',
              headerRight: (
                <Button
                  onPress={() => {
                    // navigation.getParam('shou')
                    console.log('222:',this.props);
                    
                      
                  }}
                  type='clear'
                //   buttonStyle={{marginLeft:20}}
                  containerStyle={{right:20,}}
                  title={<Icon name='ios-heart' style={{fontSize:20,color:'white'}}/>}
                  color="#fff"
                />
              ),
         }
    }

   

   
  


   componentDidMount() {
    // this.props.navigation.setParams({ shou: this.aa });
  }
     render(){
         const info =this.props.navigation.getParam('info')
         const k =this.props.navigation.getParam('k')
         const s=this.props.navigation.getParam('s')
         console.log('s:',s);
         
         return(
         <SafeAreaView style={{flex:1}}>
             <View style={{width:gao.w,height:gao.h*.1,
                backgroundColor:gao.theme,
                alignItems:'center',
                justifyContent:'space-between',
                padding:15,
                flexDirection:'row'
                }}>
                 <TouchableOpacity onPress={()=>{
                   this.props.navigation.goBack()
                 }} style={{width:'15%'}}> 
                  <Icon name='ios-arrow-back' style={{color:'white',fontSize:30,}}/>
                 </TouchableOpacity>
                 <Text style={{fontSize:20,fontWeight:'500',color:'white'}}>details</Text>
 <TouchableOpacity onPress={()=>{
   this.props.mbx.shou(k)
}}>
 <Icon name='ios-heart' style={{color:info.shou?'red':'white',fontSize:25,}}/>
</TouchableOpacity>


             </View>
          <ScrollView contentContainerStyle={{
              padding:20,alignItems:'center'
          }}>
              {
                  s==undefined?
                  <Text style={{fontSize:18,fontWeight:'500',color:'#797D7F'}}>{info.tit}</Text>
                  :
                  <Text style={{fontSize:18,fontWeight:'500',color:'#797D7F'}}>pastry- Delicious</Text>
              }


             <Text style={{marginTop:20,lineHeight:20,color:'#A6ACAF',fontSize:16}}>
             Ancient early taste refers to nostalgia. It is the dialect of southern Fujian. In the early days, due to the underdeveloped food industry, many delicacies were made of pure natural food, based on hand-made, with a simple and delicious taste. On the contrary, as productivity has increased, the quality of food produced in batches has declined, so people are more nostalgic for early food. Strictly speaking, the ancient premature cake is not a type of cake, but because this kind of cake began to spread from southern Fujian to all parts of the country, so many people are accustomed to calling it this way.
             </Text>
             {
                 s==undefined?
                 <Image source={{uri:info.img}} style={{width:'100%',height:gao.h*.24,borderRadius:8,marginTop:20}}/>
                 :
                 <Image source={info} style={{width:'100%',height:gao.h*.24,borderRadius:8,marginTop:20}}/>
             }
             
             <Text style={{marginTop:20,lineHeight:20,color:'#A6ACAF',fontSize:16}}>
             In terms of raw materials, the proportion of oil added to the cake is relatively high, and the baking percentage is usually more than 70%. Higher oil content has two advantages: first, it is easier to handle hot noodles; second, oil can soften the cake and make it softer. The sugar content of the cake is also higher. According to the proportion of protein, 45%-50% fine sugar can be used. The more sugar, the more protein foaming will be inhibited, so that the degree of expansion of the cake will be affected, in addition, the more water-holding capacity of the cake, so it will be relatively wet.
             </Text>
          </ScrollView>
         </SafeAreaView>
         )
     }
}
export default Mainxq