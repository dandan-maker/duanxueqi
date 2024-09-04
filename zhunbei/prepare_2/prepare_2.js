// pages/prepare_2/prepare_2.js
Page({
  data:{
    origin:'',
    target_scene:'',
    id:''
      },
  gotonext(){
    if(this.data.origin==1){
    wx.redirectTo({
      url: '/tests/testpages/test_'+this.data.target_scene+'/test_'+this.data.target_scene+'?origin='+this.data.origin,
    })}else{
      wx.redirectTo({
        url: '/tests/testpages/test_'+this.data.target_scene+'/test_'+this.data.target_scene+'?origin='+this.data.origin+'&id='+this.data.id,
      })
    }
  },
  onLoad(options){
    this.setData({
      origin:options.origin,
      target_scene:options.target_scene,
      id:options.id
    })
  }

})