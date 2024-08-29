// pages/women/women.js
Page({
  gotochuxin(){
    wx.navigateTo({
      url: '/pages/chuxin/chuxin',
    })
  },
  maker(){
    wx.showModal({
      title: '初创人员', // 弹窗的标题
      content: '创始人有点神秘~', // 弹窗的内容，即自定义文字
      showCancel: false, // 不显示取消按钮，让弹窗更简洁
      confirmText: '确定', // 确认按钮的文字
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击了确定');
          // 在这里处理用户点击确定之后的逻辑
        }
      }
    });
  },
  connectus(){
    wx.navigateTo({
      url: '/pages/lianxi/lianxi',
    })
  }
 
})