// pages/wode/wode.js
Page({

  data: {
    userInfo: ''
  },
  onLoad() {
    let user = wx.getStorageSync('user')
    this.setData({
      userInfo: user
    })
  },
  gotoxinxi(){
    wx.navigateTo({
      url: '/pages/xinxi/xinxi',
    })
  },
  gotowomen(){
    wx.navigateTo({
      url: '/pages/women/women',
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
      url: '/pages/yinping/yinping',
    })
  },
  gotofamily(){
    wx.navigateTo({
      url: '/pages/family/family',
    })
  },
  gotozixun(){
    wx.navigateTo({
      url: '/pages/zixun/zixun',
    })
  }
                          
})