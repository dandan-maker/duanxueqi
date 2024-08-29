// pages/log/log.js
const app = getApp()
const AV = require('../../libs/av-core-min.js');
Page({
  data: {
    userInfo: ''

  },
  onLoad(){
    let users= wx.getStorageSync('user')
    this.setData({
      userInfo: users
    })
if(this.data.userInfo){
  wx.switchTab({
    url: '/pages/index/index',
  })
}
  },
  login(){
    wx.getUserProfile({
      desc: '用于完善个人信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: res => {
        let users = res.userInfo
        // 把用户信息缓存到本地
        wx.setStorageSync('user', users)
        console.log("用户信息", users)
        this.setData({
          userInfo: users
        })
        AV.User.loginWithWeapp().then(user => {
          app.globalData.user = user.toJSON();
        }).catch(console.error);
        wx.switchTab({
          url: '/pages/index/index',
        })
      },
      fail: res=> {
        console.log("授权失败", res)
      }
    })
    
    

  },
  openTerms(){
    
  }
})