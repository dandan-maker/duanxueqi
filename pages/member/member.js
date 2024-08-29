Page({
  data:{
isceshi_1:true,
isceshi_2:true,
isceshi_3:true,
isceshi_4:true,
isjiesuo:true,
  },
  gotoxinxi(){
    wx.navigateTo({
      url: '/pages/xinxi_/xinxi_',
    })
  },
  gotest_1(){
    wx.navigateTo({
      url: '/pages/testpages/test_1/test_1?origin='+2,
    })
  },
  gotest_2(){
    wx.navigateTo({
      url: '/pages/testpages/test_2/test_2?origin='+2,
    })
  },
  gotest_3(){
    wx.navigateTo({
      url: '/pages/testpages/test_3/test_3?origin='+2,
    })
  },
  gotest_4(){
    wx.navigateTo({
      url: '/pages/testpages/test_4/test_4?origin='+2,
    })
  },
  gotobaogao(){
    wx.navigateTo({
      url: '/pages/baogao_1/baogao_1',
    })
  }
})