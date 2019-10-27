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
    RefreshControl
} from 'react-native'
import {SearchBar,Input,Button} from 'react-native-elements'
import { zthui2 } from './momqjstyle';
import Toast, {DURATION} from 'react-native-easy-toast'

export default class Faak extends  Component{
    constructor(props){
        super(props)
        this.state={
        
        }
    }
    gobacc=()=>{
        if(this.state.eeff==undefined){
            return this.refs.toast.show('内容不能为空',1000)
        }
        fetch('https://easy-mock.com/mock/5d1472a93b2ae07e7cd63f3d/LOGINING',
        {method:'POST'})
        .then(res=>res.json())
        .then(res=>{})
        .catch(eree=>{})
        this.refs.toast.show('谢谢你的反馈，我们将核实修复！',1000)
    }
    render(){
        const util = {};
        util.simpleClone = (obj) => {
            var cache = []
            var strObj = JSON.stringify(obj, function (key, value) {
              if (typeof value === 'object' && value !== null) {
                if (cache.indexOf(value) !== -1) {
                  // Circular reference found, discard key
                  return
                }
                // Store value in our collection
                cache.push(value)
              }
              return value
            })
            return JSON.parse(strObj)
          }
        return(
            <SafeAreaView style={{flex:1,alignItems:'center'}}>
                <View style={styles.asd_vi}>
             <Input containerStyle={styles.mon_fb_con} 
             inputContainerStyle={styles.qww_fb_in}
             inputStyle={styles.jhj}
              multiline={true}
              onChangeText={(eeff)=>{
                this.setState({eeff})
              }}
             />
               
            <Button title='提交' buttonStyle={styles.ann}
              onPress={()=>{
                  this.gobacc()
              }}
            />
                </View>
                <Toast
       ref="toast"
       position='top'
       
       opacity={0.8}
       />
            </SafeAreaView>
        )
    }  


}
const styles=StyleSheet.create({
    jhj:{
        width:'100%',
        height:'100%',
        marginTop:5
    },
    asd_vi:{
        backgroundColor:zthui2.beijinsse,flex:1,
        width:'100%',alignItems:'center'
    },
    ann:{
        width:zthui2.big_width*.95,marginTop:15,backgroundColor:zthui2.zhutisee
    },
    qww_fb_in:{
        borderBottomWidth:0,width:'100%',height:'100%',marginTop:5
    },
   mon_fb_con:{
    width:zthui2.big_width*.95,
    height:zthui2.big_height*.25,
    backgroundColor:'white',
    marginTop:10,borderRadius:8
   }
})