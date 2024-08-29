// app.js
const AV = require('./libs/av-core-min');
const adapters= require('./libs/leancloud-adapters-weapp.js');

AV.setAdapters(adapters);
AV.init({
  appId: 'KixOdMjPI0JzcTn8PcoHAZk3-gzGzoHsz',
  appKey: 'WjP9K247gWSo6I0n9f36zhGa',
  serverURLs: "https://kixodmjp.lc-cn-n1-shared.com"
})
App({
  globalData:{
    user:''
  }
})
