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
import {SearchBar} from 'react-native-elements'
import { zthui2 } from './momqjstyle';
import {Top} from './compont/compont' 
import {Button} from 'react-native-elements'
import {observer,inject} from 'mobx-react';
@inject('kdata')
@observer
export default class OrderDingdan extends  Component{
    constructor(props){
        super(props)
        this.state={
        
        }
    }
componentDidMount(){
    fetch('https://easy-mock.com/mock/5d1472a93b2ae07e7cd63f3d/lllst')
    .then(res=>res.json())
    .then(res=>{})
    .catch(eree=>{})
}
    render(){
        // console.log('33',this.props.kdata.bbw)
        const list=this.props.kdata.ddalist
        return(
            <SafeAreaView style={{flex:1,alignItems:'center'}}>
                <View style={{backgroundColor:zthui2.beijinsse,flex:1,width:'100%'}}>
               
                 <ScrollView contentContainerStyle={{
                     alignItems:'center',flex:1
                 }}>
                     {
                         list.map((i,k)=>{
                          return(
                            <View style={styles.wz}>
                            <Text style={styles.wz2}>电话 : {i.phph} </Text>
                            <Text style={styles.wz2}>公司 : {i.hhy} </Text>
                            <Text style={styles.wz2}>地址 : {i.addrrss} </Text>
                            <Text style={styles.wz2}>姓名 : {i.ysm} </Text>
                            <Text style={styles.wz2}>开始时间 : {i.hhys} </Text>
                            <Text style={styles.wz2}>结束时间 : {i.end} </Text>
                         </View>
                          )
                         })
                     }


                 </ScrollView>

                </View>
            </SafeAreaView>
        )
    }  


}
const styles=StyleSheet.create({
     wz:{
        width:zthui2.big_width*.95,
        backgroundColor:'white',
       padding:10,marginTop:20,borderRadius:8,
       shadowColor:zthui2.zhutisee,
       shadowOffset:{width:2,height:2},
       shadowOpacity:.8,
       shadowRadius:8
     },
     wz2:{
        fontSize:zthui2.big_width*.05,color:zthui2.zthui2,marginTop:5
     }
})