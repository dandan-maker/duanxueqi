// pages/guanxi/guanxi.js
const app = getApp()
const AV = require('../../libs/av-core-min.js');
const user = AV.User.current();
Page({

  gotozidingyi(){
    wx.navigateTo({
      url: '/jiating/zidingyi/zidingyi',
    })
  },
  //爸爸
  gotoxinxi(e){
    wx.navigateTo({
      url: '/jiating/xinxi_/xinxi_?relationship='+'爸爸',
    })
    
  },
  //妈妈
  gotoxinxi_1(){
    wx.navigateTo({
      url: '/jiating/xinxi_/xinxi_?relationship='+'妈妈',
    })
  },
  //儿子
  gotoxinxi_2(){
    wx.navigateTo({
      url: '/jiating/xinxi_/xinxi_?relationship='+'儿子',
    })
  },
  //女儿
  gotoxinxi_3(){
    wx.navigateTo({
      url: '/jiating/xinxi_/xinxi_?relationship='+'女儿',
    })
  },
  //老伴
  gotoxinxi_4(){
    wx.navigateTo({
      url: '/jiating/xinxi_/xinxi_?relationship='+'老伴',
    })
  },
  //亲人
  gotoxinxi_5(){
    wx.navigateTo({
      url: '/jiating/xinxi_/xinxi_?relationship='+'亲人',
    })
  },
  //朋友
  gotoxinxi_6(){
    wx.navigateTo({
      url: '/jiating/xinxi_/xinxi_?relationship='+'朋友',
    })
  },
  
  
})