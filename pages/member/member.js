const app = getApp()
const AV = require('../../libs/av-core-min.js');
const user = AV.User.current();
Page({
  data:{
isceshi_1:false,
isceshi_2:false,
isceshi_3:false,
isceshi_4:false,
isjiesuo:false,
relationship:'',
name:'',
id:''
  },
  gotoxinxi(){
    wx.navigateTo({
      url: '/pages/xinxi_/xinxi_?relationship='+this.data.relationship,
    })
  },
  gotest_1(){
    wx.navigateTo({
      url: '/pages/testpages/test_1/test_1?origin=2&id='+this.data.id,
    })
  },
  gotest_2(){
    wx.navigateTo({
      url: '/pages/testpages/test_2/test_2?origin=2&id='+this.data.id,
    })
  },
  gotest_3(){
    wx.navigateTo({
      url: '/pages/testpages/test_3/test_3?origin=2&id='+this.data.id,
    })
  },
  gotest_4(){
    wx.navigateTo({
      url: '/pages/testpages/test_4/test_4?origin=2&id='+this.data.id,
    })
  },
  gotobaogao(){
    wx.navigateTo({
      url: '/pages/baogao_1/baogao_1',
    })
  },
  onLoad(options){
let family=user.get("family");
this.setData({
  relationship:family[options.id].relationship,
  name:family[options.id].name,
 id:options.id,
 isceshi_1:family[options.id].isceshi_1,
isceshi_2:family[options.id].isceshi_2,
isceshi_3:family[options.id].isceshi_3,
isceshi_4:family[options.id].isceshi_4,
})
if(this.data.isceshi_1&this.data.isceshi_2&this.data.isceshi_3&this.data.isceshi_4){
  this.setData({
    isjiesuo:true
  });
}
  }
})