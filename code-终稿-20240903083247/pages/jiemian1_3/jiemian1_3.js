Page({
  handleWebViewTap: function (event) {
    const url = event.currentTarget.dataset.url; // 获取点击时传递的外部链接
    wx.navigateTo({
      url: '/pages/webview/webview?url=' + encodeURIComponent(url) // 跳转到 webview 页面并传递链接
    });
  }
});