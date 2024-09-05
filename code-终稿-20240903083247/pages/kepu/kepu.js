Page({
  data: {},

  onShareAppMessage() {
    return {};
  },
  onClick() {
    wx.navigateTo({ url: '/pages/jiemian1_5/jiemian1_5' });
  },
  onClick_1() {
    wx.navigateTo({ url: '/pages/jiemian1_2/jiemian1_2' });
  },
  onClick_2() {
    wx.navigateTo({ url: '/pages/jiemian1_4/jiemian1_4' });
  },
  onClick_3() {
    wx.navigateTo({ url: '/pages/jiemian1/jiemian1' });
  },
  onClick_4() {
    wx.navigateTo({ url: '/pages/jiemian1_3/jiemian1_3' });
  },
  onClick_5() {
    wx.navigateTo({ url: '/pages/jiemian1_1/jiemian1_1' });
  },
  handleWebViewTap: function (event) {
    const url = event.currentTarget.dataset.url; // 获取点击时传递的外部链接
    wx.navigateTo({
      url: '/pages/webview/webview?url=' + encodeURIComponent(url) // 跳转到 webview 页面并传递链接
    });
  },
});