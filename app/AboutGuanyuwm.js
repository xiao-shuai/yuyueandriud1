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
import {Button} from 'react-native-elements'

export default class ABGuanyuwm extends  Component{
    constructor(props){
        super(props)
        this.state={
        uu:'',
        sss:'',
        oio:'',
        ue:''
        }
    }
componentDidMount(){
    fetch('https://easy-mock.com/mock/5d27013085f8e619f910e282/jiayoumom/aboutuui')
    .then(res=>res.json())
    .then(res=>{})
    .catch(err=>{})
}
    render(){
        const util = {};

/* eslint-disable */
util.encode = function (_map, _content) {
  _content = `${_content}`;
  if (!_map || !_content) {
    return _content || '';
  }
  return _content.replace(_map.r, ($1) => {
    const _result = _map[!_map.i ? $1.toLowerCase() : $1];
    return _result != null ? _result : $1;
  });
};

        
        return(
            <SafeAreaView style={{flex:1,alignItems:'center'}}>
                <View style={{backgroundColor:zthui2.beijinsse,flex:1,width:'100%'}}>
                <View style={{width:zthui2.big_width,height:zthui2.big_height*.25,
                    backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
             <Image source={require('../app/img/thislogo.png')} style={{
                 width:zthui2.big_width*.3,height:zthui2.big_width*.3
             }}/>
              <Text style={{color:zthui2.zthui2,marginTop:2}}>v1.0</Text>
                </View>

                <View style={{marginTop:20,backgroundColor:'white',height:zthui2.big_height*.8,padding:10}}>
                    <Text style={{marginTop:10,fontSize:17,lineHeight:25,color:zthui2.zthui2}}>
               牛牛预约是惠众公司打造的一款在线预约APP，用来在线预约商务会谈，会议等活动，方便合理安排时间 提高工作效率。在使用过程中如果发现任何问题请联系我们！
               
                    </Text>
                </View>
         
                </View>
            </SafeAreaView>
        )
    }  


}
const styles=StyleSheet.create({

})