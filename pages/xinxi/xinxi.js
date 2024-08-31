// pages/xinxi/xinxi.js
const app = getApp()
const AV = require('../../libs/av-core-min.js');
const user = AV.User.current();
Page({
  data:{
    name:'',
    gender:'',
    age:''
  },
  savename(e){
this.setData({
  name:e.detail.value
})
console.log()
  },
  savegender(e){
    this.setData({
      gender:e.detail.value
    })
  },
  saveage(e){
    this.setData({
      age:e.detail.value
    })
  },
  goback(){
user.set("name",this.data.name)
user.set("gender",this.data.gender)
user.set("age",this.data.age)
user.save();
    wx.switchTab({
      url: '/pages/wode/wode',
    })
  },
  onLoad(){
   this.setData({
    name:user.get("name"),
    gender:user.get("gender"),
    age:user.get("age")
   })
    

  }
})
  