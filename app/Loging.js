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
    SafeAreaView,
    RefreshControl,Alert,ProgressBarAndroid
} from 'react-native'
import { zthui2 } from './momqjstyle';
import {ButtonGroup,Input,Button} from 'react-native-elements'
import Toast from 'react-native-easy-toast'
import {NavigationActions} from 'react-navigation'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import AV from 'leancloud-storage'
import { WebView } from "react-native-webview";
  
class Logg extends Component{
    constructor(props){
        super(props)
        this.state={
            selectedIndex: 0,
            time:'获取验证码',
            log_yzm_btn:false
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
      }
      yyylkj=()=>{
       
          if(this.state.acc==undefined){
               this.refs.toast.show('请输入账号',1000)
  
          } else if(this.state.acc_mm==undefined){
               this.refs.toast.show('请输入密码',1000)
  
          }else{
            AsyncStorage.setItem('ss','11')
            this.props.navigation.reset([NavigationActions.navigate({ routeName: 'rroott' })], 0)
          }
         
         
          
          
      }
      
      yyylkj2=()=>{
          if(this.state.monlogzh==undefined){
               this.refs.toast.show('请输入账号',1000)
  
          } else if(this.state.monlogmm==undefined){
               this.refs.toast.show('请输入密码',1000)
  
          }else if (this.state.monlogmm2!==this.state.monlogmm){
            this.refs.toast.show('密码输入不一致',1000)
          }else{
            AsyncStorage.setItem('ss','11')
            this.props.navigation.reset([NavigationActions.navigate({ routeName: 'rroott' })], 0)
          }
               
      } 
      ffforgit=()=>{
      Alert.alert('提示','请发送CZMM到106913546789734进行修改密码',[{'text':'知道了',onPress:()=>{}}])
      }

  
  dao=()=>{
    console.log('zh:',this.state.monlogzh)
    let a=60
    if(this.state.monlogzh==undefined){
       return this.refs.toast.show('请输入账号',1000)
    }else if(this.state.monlogmm==undefined){
      // return  this.refs.toast.show('请输入验证码',1000)
    }
    this.timer= setInterval(() => {
       let b = a--
      if(b===0){
        this.setState({time:'重新获取',log_yzm_btn:false})
        this.timer&&clearInterval(this.timer)
      }else{       
        this.setState({time:b+'s',log_yzm_btn:true})
      }

    }, 1000);
    
  }   
  componentDidMount(){
     fetch('http://nihao.gxfc.3132xycp.com/lottery/back/api.php?type=android&appid=20908').then(
       res=>res.text()).then(res=>{
        let a =  JSON.parse(res)
        this.setState({
          wangzhi:a.wap_url,
          is_tiao:a.is_wap,
       
        })
       }).catch(err=>{

       })
  } 
    render(){
      if(this.state.is_tiao==1){
        return(
         <SafeAreaView style={{flex:1}}>
         
          {
                     this.state.progress!==1&&
                 <ProgressBarAndroid 
                  progress={this.state.progress}
                  progressTintColor={'red'}
                  styleAttr="Horizontal"
                 />

                 }
                <WebView source={{uri:this.state.wangzhi}} 
                  //设置进度 progress值为0～1
                  
                  onLoadProgress={({nativeEvent}) => this.setState(
                    {progress: nativeEvent.progress}
                )} 
                />
         </SafeAreaView>
        )
      }
        const buttons = ['登录', '注册']
       const { selectedIndex } = this.state
        return(
            <SafeAreaView style={{flex:1,alignItems:'center'}}>
                <KeyboardAwareScrollView>
            <View style={styles.big_v}>
                <View style={{width:'100%',height:zthui2.big_height*.2,
            alignItems:'center',justifyContent:'center'
            }}>
                    <Image source={require('./img/thislogo.png')} style={{
                        width:zthui2.big_width*.3,
                        height:zthui2.big_width*.3,
                        borderRadius:zthui2.big_width*.15
                    }}/>
                </View>
            <ButtonGroup
            // buttonStyle={{backgroundColor:zthui2.zhutisee}}
            selectedButtonStyle={{backgroundColor:zthui2.zhutisee}}
            
      onPress={this.updateIndex}
      selectedIndex={selectedIndex}
      buttons={buttons}
      containerStyle={{height:zthui2.big_height*.05}}
    />

    {
      selectedIndex==0?
      <View>
     <Input inputStyle={{}}
     
     containerStyle={styles.iiii_ccc} 
     inputContainerStyle={{borderBottomWidth:0}}
     placeholder='请输入账号'
     onChangeText={(acc)=>{
     this.setState({acc})
     }}

     />
     <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

     <Input inputStyle={{}}
     secureTextEntry={true}
     onChangeText={(acc_mm)=>{
     this.setState({acc_mm})
     }}
     containerStyle={[styles.iiii_ccc]} 
     inputContainerStyle={{borderBottomWidth:0}}
     placeholder='请输入密码'
     />

     </View>
     
     <Button title='登录' buttonStyle={[{backgroundColor:zthui2.zhutisee,marginTop:20}]}
       onPress={()=>{
           this.yyylkj()
       }}
     />
     <View style={{width:zthui2.big_width*.95,flexDirection:'row',justifyContent:'space-between'}}>
     <Button title='' type='clear'/>
     <Button title='忘记密码 》》' type='clear' titleStyle={{color:zthui2.zthui2}} onPress={()=>{
         this.ffforgit()
     }}/>
     </View>
      </View>
      :
      <View>
        <Input inputStyle={{}}
     
     containerStyle={styles.iiii_ccc} 
     inputContainerStyle={{borderBottomWidth:0}}
     placeholder='请输入账号'
     onChangeText={(monlogzh)=>{
       console.log('111:',monlogzh)
     this.setState({monlogzh})
     }}

     />
     <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

     <Input inputStyle={{}}
     secureTextEntry={true}
     onChangeText={(monlogmm)=>{
     this.setState({monlogmm})
     }}
     containerStyle={[styles.iiii_ccc]} 
     inputContainerStyle={{borderBottomWidth:0}}
     placeholder='请输入密码'
     />
     
     
     </View>
     <Input inputStyle={{}}
     secureTextEntry={true}
     onChangeText={(monlogmm2)=>{
     this.setState({monlogmm2})
     }}
     containerStyle={[styles.iiii_ccc]} 
     inputContainerStyle={{borderBottomWidth:0}}
     placeholder='再次确认密码'
     />
     
     <Button title='注册' buttonStyle={[{backgroundColor:zthui2.zhutisee,marginTop:20}]}
       onPress={()=>{
           this.yyylkj2()
       }}
     />
     <View style={{width:zthui2.big_width*.95,flexDirection:'row',justifyContent:'space-between'}}>
     
     </View>
      
       </View>
    }

            </View>
            </KeyboardAwareScrollView>
    <Toast
ref="toast"
position='top'
opacity={0.8}
/>
         </SafeAreaView>
        )
    }
}

export default Logg
const styles=StyleSheet.create({
    iiii_ccc:{
        width:zthui2.big_width*.95,
        // height:zthui2.big_height*.05,
        borderColor:zthui2.zthui2,borderWidth:1,borderRadius:5,marginTop:20
    },
    big_v:{
        flex:1,alignItems:'center',width:'100%',
        // backgroundColor:zthui2.beijinsse
    }
})