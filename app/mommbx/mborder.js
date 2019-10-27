import { observable, action } from "mobx";
class Kdata{
    @observable bbw;
    @observable List;
    constructor(){ 
    this.bbw='2345'
    this.ddalist=[
        {
         ysm:'张三',
         phph:'18827654569',
         addrrss:'北京市海淀区',
         hhy:'惠众公司',
         hhys:'2019-7-6',
         end:'2019-7-8'
        }
    ]
   
    }

  bbcc=(e)=>{
     this.ddalist.push(e)
  }  
    
  

}
const kdata=new Kdata()
export {kdata}
