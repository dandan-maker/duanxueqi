// pages/zidingyi/zidingyi.js
Page({
  data:{
relationship:''
  },
  goback(){
    wx.navigateTo({
      url: '/jiating/guanxi/guanxi',
    })
  },
  gotoxinxi(){
    wx.navigateTo({
      url: '/jiating/xinxi_/xinxi_?relationship='+this.data.relationship,
    })
  },
  getrelation(e){
this.setData({
  relationship:e.datail.value
})
  }
  
})