// pages/erji/erji.js
Page({
  data:{
origin:'',
target_scene:'',
id:''
  },
  gonext(){
    wx.redirectTo({
      url: '/zhunbei/prepare/prepare?origin='+this.data.origin+'&target_scene='+this.data.target_scene+'&id='+this.data.id,
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