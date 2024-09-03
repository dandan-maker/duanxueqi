// pages/moni/moni.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playSucceed:true,
    iconStop:"http://lc-KixOdMjP.cn-n1.lcfile.com/e0S9wgxul7393uDozK1cpzyC29CSSCac/%E6%9A%82%E5%81%9C.png",
    iconPlaySucceed:"http://lc-KixOdMjP.cn-n1.lcfile.com/jR7tiicV1umXUqBnMCtmW1vPh04oDmE4/%E6%92%AD%E6%94%BE.png",
    scenes:[
      {id:1,text:'照顾孩子',active:false},
      {id:2,text:'女儿来电',active:false},
      {id:3,text:'家庭聚餐',active:false},
      {id:4,text:'公交环境',active:false},
      {id:5,text:'看病就医',active:false},
      {id:6,text:'市场买菜',active:false},
      {id:7,text:'厨房做菜',active:false},
      {id:8,text:'广场散步',active:false}
      ],
    hearingTypes:[
      {id:1,text:'正常听力',active:false},
      {id:2,text:'轻度听损',active:false},
      {id:3,text:'中度听损',active:false},
      {id:4,text:'重度听损',active:false}
    ]
  },
  // 切换按钮的 active 状态
  toggleActive: function(e) {
    const { index, group } = e.currentTarget.dataset;
    const list = this.data[group].map((item, idx) => {
      if (idx === index) item.active = !item.active; // 切换 active 状态
      return item;
    });
    this.setData({ [group]: list });
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
  // 跳转到自定义模拟页面
  toHand:function(){
    wx.navigateTo({
      url: '../hand/hand',
    })
  },
  // 返回上一页面
  goBack: function() {
    wx.navigateBack();
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