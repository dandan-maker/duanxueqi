// pages/xinxi_/xinxi_.js
const app = getApp()
const AV = require('../../libs/av-core-min.js');
const user = AV.User.current();
Page({
  data:{
relationship:'',
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
    var family={
      relationship:this.data.relationship,
name:this.data.name,
gender:this.data.gender,
age:this.data.age
    }
    user.add("family",family)
    user.save()

    wx.navigateTo({
    
      url: '/home/family/family',
    })
  },
  onLoad(options){
    this.setData({
      relationship:options.relationship
    })
    let family=user.get("family")
    for(var i=0;i<family.length;i++){
      if(family[i].relationship==options.relationship){
        this.setData({
          name:family[i].name,
          gender:family[i].gender,
          age:family[i].age
         })
      }
    }
    
  }
  
})