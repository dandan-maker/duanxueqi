Page({
  onLoad: function (options) {
    this.setData({
      url: decodeURIComponent(options.url) // 获取传递过来的链接并解码
    });
  }
});
