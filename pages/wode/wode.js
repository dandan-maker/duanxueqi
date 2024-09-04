// pages/wode/wode.js
const AV = require('../../libs/av-core-min.js');
const user = AV.User.current();
Page({

  data: {
    userInfo: '',
    nickname:'昵称'
  },
  onShow() {
    let users = wx.getStorageSync('users')
    this.setData({
      userInfo: users,
      nickname:user.get("nickname")
    })
  },
  gotoxinxi(){
    wx.navigateTo({
      url: '/home/xinxi/xinxi',
    })
  },
  gotowomen(){
    wx.navigateTo({
      url: '/home/women/women',
    })
    
  },
  loginout(){
    wx.setStorageSync('user', null)
    wx.navigateTo({
      url: '/pages/log/log',
    })
  },
  xiazai(){
    wx.navigateTo({
      url: '/home/yinping/yinping',
    })
  },
  gotofamily(){
    wx.navigateTo({
      url: '/home/family/family',
    })
  },
  gotozixun(){
    wx.navigateTo({
      url: '/home/zixun/zixun',
    })
  },
  gototouxiang(){
    wx.navigateTo({
      url: '/home/touxiang/touxiang',
    })
  }
                          
})
