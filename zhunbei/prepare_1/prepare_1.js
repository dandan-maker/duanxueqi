// pages/prepare_1/prepare_1.js
Page({
  data:{
    origin:'',
    target_scene:'',
    id:''
      },
  gotonext(){
    wx.redirectTo({
      url: '/zhunbei/prepare_2/prepare_2?origin='+this.data.origin+'&target_scene='+this.data.target_scene+'&id='+this.data.id,
    })
  },
  onLoad(options){
    this.setData({
      origin:options.origin,
      target_scene:options.target_scene,
      id:options.id
    })
  }
  
})