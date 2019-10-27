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
    RefreshControl,Alert
} from 'react-native'
import {SearchBar} from 'react-native-elements'
import { zthui2 } from '../momqjstyle';
// import {Top2} from '../compont/compont' 
class MONChainfo extends Component{
  static navigationOptions = {
    title: '记录',
  };
    constructor(props){
      super(props)
      this.state={
        refreshing:true
      }
    }
     likePost(post) {
      post.liked = !post.liked;
      post.liked ? post.likes++ : post.likes--;
    }
     highWay = [
      "Living easy, living free",
      "Season ticket on a one-way ride",
      "Asking nothing, leave me be",
      "Taking everything in my stride",
      "Don't need reason, don't need rhyme",
      "Ain't nothing I would rather do",
      "Going down, party time",
      "My friends are gonna be there too",
      "I'm on the highway to hell",
      "On the highway to hell",
      "Highway to hell",
      "I'm on the highway to hell",
      "Whoa!",
    ];
   

  prodd=()=>{
      this.setState({refreshing:true})
      fetch('https://www.fastmock.site/mock/bf8e3c1a546ac8d4d184d3b0670cf90c/lanqiudaren/record')
      .then(res=>res.json())
      .then(res=>{
          console.log('red',res)
          Alert.alert('提示','暂无记录',[{'text':'确定',onPress:()=>{}}])
         this.setState({refreshing:false})
      })
      .catch(err=>{

      })
  }
  componentWillMount(){
      
  }
  componentDidMount(){
    this.prodd()
  }


   render(){
    
    const base = {
      // SDK 在store/actions中被引入
      // 资源路径根目录，为了方便用户部署在二级以上URL路径上
      resourceUrl: 'https://yx-web.nos-hz.163yun.com/webdoc/h5',
      // 用户logo地址
      logo: 'https://yx-web.nos-hz.163yun.com/webdoc/h5/im/logo.png',
      // 默认用户头像
      defaultUserIcon: 'https://yx-web.nos-hz.163yun.com/webdoc/h5/im/default-icon.png',
      // 默认普通群头像
      defaultGroupIcon: 'https://yx-web.nos-hz.163yun.com/webdoc/h5/im/default-group.png',
      // 默认高级群头像
      defaultAdvancedIcon: 'https://yx-web.nos-hz.163yun.com/webdoc/h5/im/default-advanced.png',
      // 系统通知图标
      noticeIcon: 'https://yx-web.nos-hz.163yun.com/webdoc/h5/im/notice-icon.png',
      // 我的手机图标
      myPhoneIcon: 'https://yx-web.nos-hz.163yun.com/webdoc/h5/im/my-phone.png',
      // 本地消息显示数量，会影响性能
      localMsglimit: 36,
    };
    
       return(
           <SafeAreaView style={{flex:1,alignItems:'center'}}>
               <View style={{flex:1,width:'100%', backgroundColor:zthui2.beijinsse}}>
             {/* <Top2 title='Reservation inquiry'/> */}
         <SearchBar  
        value={this.state.text}
        returnKeyType={'search'}
        onSubmitEditing={()=>{
          console.log('ddddf')
          this.prodd()
        }}
        onChangeText={(text)=>{
            this.setState({text})
        }}
          containerStyle={{
             backgroundColor:zthui2.zhutisee,borderWidth:0,
         }} inputContainerStyle={{backgroundColor:'white'}}/>


         <View style={yys.tab}>
                <Text style={yys.text}>
                姓名
                </Text> 

                <Text style={yys.text}>
                时间
                </Text>
                <Text style={yys.text}>
                状态
                </Text>
            </View> 

         <ScrollView refreshControl={
         <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.prodd}
            title='正在刷新'

          />} contentContainerStyle={{alignItems:'center',flex:1}}>
            
           <View style={{width:zthui2.big_width*.95,flex:1,
            backgroundColor:'white',marginTop:10}}>
          <View style={{}}>

          </View>
          </View> 

         </ScrollView>

               </View>
          
           </SafeAreaView>
       )
   }

}

export default MONChainfo

const yys=StyleSheet.create({
  tab:{
    flexDirection:'row',justifyContent:'space-between',
             backgroundColor:'white',width:'100%',marginTop:3,padding:10
  },
    text:{
        fontSize:zthui2.big_width*.05,fontWeight:'500',color:zthui2.zthui2
    }
})