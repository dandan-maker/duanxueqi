// pages/zidingyi/zidingyi.js
Page({
  data:{
relationship:''
  },
  goback(){
    wx.navigateTo({
      url: '/pages/guanxi/guanxi',
    })
  },
  gotoxinxi(){
    wx.navigateTo({
      url: '/pages/xinxi_/xinxi_?relationship='+this.data.relationship,
    })
  },
  getrelation(e){
this.setData({
  relationship:e.datail.value
})
  }
  
})