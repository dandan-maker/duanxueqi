// pages/family/family.js
const app = getApp()
const AV = require('../../libs/av-core-min.js');
const user = AV.User.current();
Page({
  data:{
    userInfo:'',
    family:'',
    nickname:''
  },
  onLoad(){
    user.fetch().then((user) => {
      
    });
    let family=user.get("family")
    let users= wx.getStorageSync('user')
      this.setData({
        userInfo: users,
        family:family,
        nickname:user.get("nickname")
      })
  },
  addpeople(){
    
    wx.navigateTo({
      url: '/jiating/guanxi/guanxi',
    })
  },
  gotomember(e){
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '/jiating/member/member?id='+e.currentTarget.dataset.id,
    })
  }
})