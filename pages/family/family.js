// pages/family/family.js
Page({
  data:{
    userInfo:''
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
  gotomember(){
    wx.navigateTo({
      url: '/pages/member/member',
    })
  }
})