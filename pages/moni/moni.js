// pages/moni/moni.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playSucceed:true,
    iconStop:"http://lc-KixOdMjP.cn-n1.lcfile.com/e0S9wgxul7393uDozK1cpzyC29CSSCac/%E6%9A%82%E5%81%9C.png",
    iconPlaySucceed:"http://lc-KixOdMjP.cn-n1.lcfile.com/jR7tiicV1umXUqBnMCtmW1vPh04oDmE4/%E6%92%AD%E6%94%BE.png",
  },
  //点击播放/暂停
  chooseIcon:function(){
    let value = this.data.playSucceed;
    this.setData({
      playSucceed:!value
    })
    console.log(value)
  },
  viewTap(e){
    console.log(e);
  },
  toHand:function(){
    wx.navigateTo({
      url: '../hand/hand',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})