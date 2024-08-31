// pages/family/family.js
const app = getApp()
const AV = require('../../libs/av-core-min.js');
const user = AV.User.current();
Page({
  data:{
    userInfo:'',
    family:user.get("family")
  },
  onLoad(){
    let user= wx.getStorageSync('user')
      this.setData({
        userInfo: user
      })
  },
  addpeople(){
    
    wx.navigateTo({
      url: '/pages/guanxi/guanxi',
    })
  },
  gotomember(e){
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '/pages/member/member?id='+e.currentTarget.dataset.id,
    })
  }
})