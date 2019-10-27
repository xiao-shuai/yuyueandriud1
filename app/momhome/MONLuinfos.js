
    
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
import {observer,inject} from 'mobx-react';
import {zthui2} from '../momqjstyle'
import {NavigationActions} from 'react-navigation'
import { Input ,Button} from 'react-native-elements';
import DatePicker from 'react-native-datepicker'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Toast, {DURATION} from 'react-native-easy-toast'
import Icon from 'react-native-vector-icons/Ionicons'
// import {Top,Top2} from '../compont/compont'

@inject('kdata')
@observer
class MonHome extends Component{
  static navigationOptions = {
    title: '首页',
  };
    constructor(props){
        super(props)
        this.state={
             date:"",
             date2:"",
        }
      
        this.tab=[
             {
               left:'name',
             },
           {
              left:'phone',
            },
            {
              left:'company',
            },
            {
              left:'address',
            },
        ]

    }
    shijian=()=>{
        const date = new Date();
        const fyear = date.getFullYear().toString();
        const fmonth = (date.getMonth()+1).toString();
        const fday = date.getDate().toString();
        const zuihoutime=fyear+'-'+fmonth+'-'+fday
        this.setState({date:zuihoutime,date2:zuihoutime})
      } 

     

  
      
  componentWillMount(){
    
  }
     
   
     componentDidMount(){
    
      AsyncStorage.getItem('ss').then(res=>{
        console.log('res:',res)
        if(res==null){
          this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Logg' })], 0)
        }
       
      }).catch(err=>{
        console.log('err:',err)
        
      })
         this.shijian()
      }
      componentWillMount(){
        
      }

      sbsbsb=()=>{
      if(this.state.xxxmm==undefined){

          return this.refs.toast.show('请输入姓名',1000)

      }else if(this.state.pph==undefined){

          return this.refs.toast.show('请输入电话',1000)
      }else if(this.state.cpp==undefined){
         return this.refs.toast.show('请输入公司',1000) 
      }else if(this.state.addrrss==undefined){
        return  this.refs.toast.show('请输入地址',1000)
       }

  
    fetch('https://easy-mock.com/mock/5d27013085f8e619f910e282/jiayoumom/listorder',
    {method:'POST'})
    .then(res=>res.json())
    .then(res=>{})
    .catch(eree=>{})

      let ssd={
        ysm:this.state.xxxmm,
        phph:this.state.pph,
        addrrss:this.state.addrrss,
        hhy:this.state.cpp,
        hhys:this.state.date,
        end:this.state.date2
      }
      this.props.kdata.bbcc(ssd)
      this.props.navigation.navigate('Dingdan')
     

  }

  render(){
    
       return(
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
        <View style={{flex:1,width:'100%',alignItems:'center',backgroundColor:zthui2.beijinsse}}>
         <View style={styles.topbig}>
         {/* let ssd={
        ysm:this.state.xxxmm,
        phph:this.state.pph,
        addrrss:this.state.addrrss,
        hhy:this.state.cpp,
        hhys:this.state.date,
        end:this.state.date2
      }
      this.props.kdata.bbcc(ssd)
      this.props.navigation.navigate('Dingdan') */}
          <Button title='预约中心' type='clear' titleStyle={styles.top_tt}/> 
         
         </View>
         <KeyboardAwareScrollView contentContainerStyle={{alignItems:'center'}}>
          {/* let ssd={
        ysm:this.state.xxxmm,
        phph:this.state.pph,
        addrrss:this.state.addrrss,
        hhy:this.state.cpp,
        hhys:this.state.date,
        end:this.state.date2
      }
      this.props.kdata.bbcc(ssd)
      this.props.navigation.navigate('Dingdan') */}
          
           <View style={styles.vvvtext}>
             <Text style={styles.text_left}>姓名</Text>
             <Input  
             onChangeText={(xxxmm)=>{
              this.setState({xxxmm})
          }}
             containerStyle={styles.connnn}
             multiline={true}
             inputContainerStyle={styles.conttex}
             inputStyle={{
                marginLeft:5,
               }}/>
           </View>
{/* let ssd={
        ysm:this.state.xxxmm,
        phph:this.state.pph,
        addrrss:this.state.addrrss,
        hhy:this.state.cpp,
        hhys:this.state.date,
        end:this.state.date2
      }
      this.props.kdata.bbcc(ssd)
      this.props.navigation.navigate('Dingdan') */}
           <View style={styles.vvvtext}>
             <Text style={styles.text_left}>电话</Text>
             <Input  
             onChangeText={(pph)=>{
              this.setState({pph})
          }}
             containerStyle={styles.connnn}
             multiline={true}
             inputContainerStyle={styles.conttex}
             inputStyle={{
                marginLeft:5,
               }}/>
           </View>

           <View style={styles.vvvtext}>
             <Text style={styles.text_left}>公司</Text>
             <Input  
             onChangeText={(cpp)=>{
              this.setState({cpp})
          }}
             containerStyle={styles.connnn}
             multiline={true}
             inputContainerStyle={styles.conttex}
             inputStyle={{
                marginLeft:5,
               }}/>
           </View>

           <View style={styles.vvvtext}>
             <Text style={styles.text_left}>地址</Text>
             <Input  
             onChangeText={(addrrss)=>{
              this.setState({addrrss})
          }}
             containerStyle={styles.connnn}
             multiline={true}
             inputContainerStyle={styles.conttex}
             inputStyle={{
                marginLeft:5,
               }}/>
           </View>
           


          <View style={styles.vvvtext}>
             <Text style={styles.text_left}>开始时间</Text>
          
         <DatePicker
        style={[styles.connnn,{borderWidth:0}]}
        
        date={this.state.date}
        mode="date"
        showIcon={false}
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate={this.state.date}
        maxDate="2020-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36,
            borderWidth:0
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />

           </View>

           <View style={styles.vvvtext}>
             <Text style={styles.text_left}>结束时间</Text>
          
         <DatePicker
        style={[styles.connnn,{borderWidth:0}]}
        
        date={this.state.date2}
        mode="date"
        showIcon={false}
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate={this.state.date2}
        maxDate="2020-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36,
            borderWidth:0
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date2: date})}}
      />

           </View>
    
           <View style={styles.vvvtext}>
             <Text style={styles.text_left}>备注</Text>
             <Input  
            //  placeholder='可选'
             containerStyle={styles.connnn}
             multiline={true}
             inputContainerStyle={styles.conttex}
             inputStyle={{
                marginLeft:5,
               }}/>
           </View>

           <Button    buttonStyle={styles.bbtt} title={'提交'} 
               onPress={()=>{
                 this.sbsbsb()
               }}
           />
        
          </KeyboardAwareScrollView>
          
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
export default MonHome

const styles=StyleSheet.create({
  top_tt:{

    color:'white',fontSize:zthui2.big_width*.06,fontWeight:'500'
  },
  bbtt:{
    width:zthui2.big_width*.95,
    // height:zthui2.big_height*.05,
    marginTop:20,
    marginBottom:10,backgroundColor:zthui2.zhutisee
  },
  conttex:{
    borderBottomColor:'white',borderBottomWidth:0
  },
  connnn:{
    width:zthui2.big_width*.7,
    backgroundColor:zthui2.zthui,borderRadius:5
  },
  text_left:{
     fontSize:zthui2.big_width*.05,color:zthui2.zhutisee
  },
     vvvtext:{
      width:zthui2.big_width,flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      backgroundColor:'white',
      padding:10,marginTop:5
     },
 
     topbig:{
      width:zthui2.big_width,
      height:zthui2.big_height*.1,
      backgroundColor:zthui2.zhutisee,
      // flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      // padding:10
     }

})

