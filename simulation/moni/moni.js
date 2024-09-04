// pages/moni/moni.js
const audioUtils = require('../../utils/moni_audio_utils');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playSucceed:true,
    iconStop:"http://lc-KixOdMjP.cn-n1.lcfile.com/CVmWjSTSjRYJgyIIOtPjGGXT9RD8kQHj/%E6%92%AD%E6%94%BE.png",
    iconPlaySucceed:"http://lc-KixOdMjP.cn-n1.lcfile.com/Q1lGCcWKTpAQNvMVMdO22fAlI9qKTtRJ/%E6%9A%82%E5%81%9C.png",
    scenes:[
      {id:1,text:'照顾孩子',active:false},
      {id:2,text:'家庭聚餐',active:false},
      {id:3,text:'公交环境',active:false},
      {id:4,text:'女儿来电',active:false},
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
    ],
    selectedScene: null,
    selectedHearingType: null,
    playing: false
  },
  // 切换按钮的 active 状态
  toggleActive: function(e) {
    const { index, group } = e.currentTarget.dataset;
    const list = this.data[group].map((item, idx) => {
      // 切换选中状态，并将其他按钮设置为未选中
      item.active = idx === index ? !item.active : false;
      return item;
    });
    this.setData({ [group]: list });

    if (group === 'scenes') {
      this.setData({
        selectedScene: list[index].active ? list[index].id : null
      });
    } else if (group === 'hearingTypes') {
      this.setData({
        selectedHearingType: list[index].active ? list[index].id : null
      });
    }

    if (this.data.selectedScene && this.data.selectedHearingType) {
      audioUtils.refreshAudioSrc(this.data.selectedScene, this.data.selectedHearingType);
      if (this.data.playing) {
        const audioSrc = audioUtils.getAudioSrc();
        if (audioSrc) {
          audioUtils.initAudio(audioSrc);
          audioUtils.play();
        }
      }
    }
  },
  //点击播放/暂停
  chooseIcon:function(){
    let value = this.data.playSucceed;
    this.setData({
      playSucceed:!value
    });
    if (value) {
      const audioSrc = audioUtils.getAudioSrc();
      if (audioSrc) {
        audioUtils.initAudio(audioSrc);
        audioUtils.play();
        this.setData({ playing: true });
      }
    } else {
      audioUtils.pause();
      this.setData({ playing: false });
    }
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
    // 设置音频播放结束的回调函数
    audioUtils.setOnEndedCallback(() => {
      this.setData({
      playSucceed: true
      });
    });
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
    // 暂停音频
    audioUtils.pause();
    this.setData({ playSucceed: true, playing: false });
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    // 暂停音频
    audioUtils.pause();
    this.setData({ playSucceed: true, playing: false });
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