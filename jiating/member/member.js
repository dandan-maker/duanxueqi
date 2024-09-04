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
      url: '/jiating/xinxi_/xinxi_?relationship='+this.data.relationship,
    })
  },
  gotest_1(){
    wx.navigateTo({
      url: '/zhunbei/erji/erji?origin=2&target_scene=1&id='+this.data.id,
    })
  },
  gotest_2(){
    wx.navigateTo({
      url: '/zhunbei/erji/erji?origin=2&target_scene=2&id='+this.data.id,
    })
  },
  gotest_3(){
    wx.navigateTo({
      url: '/zhunbei/erji/erji?origin=2&target_scene=3&id='+this.data.id,
    })
  },
  gotest_4(){
    wx.navigateTo({
      url:'/zhunbei/erji/erji?origin=2&target_scene=4&id='+this.data.id,
    })
  },
  gotobaogao(){
    if(this.data.isjiesuo==true){
      wx.navigateTo({
        url: '/tests/baogao_1/baogao_1?id='+this.data.id,
      })
   }
    else{
      wx.showModal({
        title: '失败', // 弹窗的标题
        content: '请先完成任一场景的测试', // 弹窗的内容，即自定义文字
        showCancel: false, // 不显示取消按钮，让弹窗更简洁
        confirmText: '确定', // 确认按钮的文字
        success: function(res) {
          if (res.confirm) {
            console.log('用户点击了确定');
            // 在这里处理用户点击确定之后的逻辑
          }
        }
      });
    }
  },
  // 页面相关事件处理函数--监听用户下拉动作
onPullDownRefresh: function () {
  let family=user.get("family");
this.setData({
  relationship:family[this.data.id].relationship,
  name:family[this.data.id].name,
 id:this.data.id,
 isceshi_1:family[this.data.id].isceshi_1,
isceshi_2:family[this.data.id].isceshi_2,
isceshi_3:family[this.data.id].isceshi_3,
isceshi_4:family[this.data.id].isceshi_4,
})
if(this.data.isceshi_1||this.data.isceshi_2||this.data.isceshi_3||this.data.isceshi_4){
  this.setData({
    isjiesuo:true
  });
}
wx.stopPullDownRefresh()
  },
  // 当数据重置成功之后，调用此函数，关闭下拉刷新的效果
 

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
if(this.data.isceshi_1||this.data.isceshi_2||this.data.isceshi_3||this.data.isceshi_4){
  this.setData({
    isjiesuo:true
  });
}
  }
})