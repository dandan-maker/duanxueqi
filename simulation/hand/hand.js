// pages/index/index.js
import wxCharts from '../../utils/wxcharts-min.js'; // 引入 wxCharts

Page({
  data: {
    playSucceed:true,
    iconStop:"http://lc-KixOdMjP.cn-n1.lcfile.com/e0S9wgxul7393uDozK1cpzyC29CSSCac/%E6%9A%82%E5%81%9C.png",
    iconPlaySucceed:"http://lc-KixOdMjP.cn-n1.lcfile.com/jR7tiicV1umXUqBnMCtmW1vPh04oDmE4/%E6%92%AD%E6%94%BE.png",
    frequencies: ['250', '500', '1k', '2k', '4k', '8k'], // 频率
    leftHearingLoss: {
      '250': 0,
      '500': 0,
      '1k': 0,
      '2k': 0,
      '4k': 0,
      '8k': 0
    },
    rightHearingLoss: {
      '250': 0,
      '500': 0,
      '1k': 0,
      '2k': 0,
      '4k': 0,
      '8k': 0
    },
    chart: null
  },
  //点击播放/暂停
  chooseIcon:function(){
    let value = this.data.playSucceed;
    this.setData({
      playSucceed:!value
    })
    console.log(value)
  },

  onLoad: function () {
    this.showUsageModal();
    this.updateChart();
  },
  showUsageModal: function () {
    wx.showModal({
      title: '使用说明',
      content: '欢迎使用听力调节程序。您可以通过左右两侧的滑块分别调节左右耳在不同频率下的听力损失情况。调整完毕后，图表会实时显示调节结果。点击播放按钮，将会播放图表对应听力受损情况的模拟音频。',
      showCancel: false,
      confirmText: '知道了',
      confirmColor: '#3CC51F'
    });
  },
  onLeftHearingLossChange: function (e) {
    const freq = e.currentTarget.dataset.frequency;
    this.setData({
      [`leftHearingLoss.${freq}`]: e.detail.value
    }, this.updateChart);
  },

  onRightHearingLossChange: function (e) {
    const freq = e.currentTarget.dataset.frequency;
    this.setData({
      [`rightHearingLoss.${freq}`]: e.detail.value
    }, this.updateChart);
  },

  updateChart: function () {
    const windowWidth = wx.getSystemInfoSync().windowWidth;

    // 清除现有的图表
    if (this.data.chart) {
      this.data.chart.updateData({});
    }

    // 创建新的图表
    this.data.chart = new wxCharts({
      canvasId: 'hearingChart',
      type: 'line',
      categories: this.data.frequencies,
      animation: true,
      series: [{
        name: '左耳',
        data: this.data.frequencies.map(freq => this.data.leftHearingLoss[freq]),
        format: function (val) {
          return val.toFixed(2) + 'dB';
        }
      }, {
        name: '右耳',
        data: this.data.frequencies.map(freq => this.data.rightHearingLoss[freq]),
        format: function (val) {
          return val.toFixed(2) + 'dB';
        }
      }],
      xAxis: {
        disableGrid: false
      },
      yAxis: {
        title: '听力损失 (分贝)',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 0,
        max: 100
      },
      width: windowWidth,
      height: 300,
      dataLabel: true,
      dataPointShape: true,
      extra: {
        lineStyle: 'curve'
      }
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