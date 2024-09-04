// home/touxiang/touxiang.js
const AV = require('../../libs/av-core-min.js');
const user = AV.User.current();
Page({
data:{
  avatarUrl:'',
  nickname:''
},
onChooseAvatar(e) {
  const avatarUrl  = e.detail 
  this.setData({
    avatarUrl:avatarUrl
  })
},
getname(e){

  
this.setData({
  nickname:e.detail.value
})
},
onLoad(){
  let user=wx.getStorageSync('user')
  if(user.gender==0){
  var avatarUrl="http://lc-KixOdMjP.cn-n1.lcfile.com/YO3vxYsDyWb2ocd5CHtjvn4CCV9qkdjN/%E8%80%81%E5%A5%B6%E5%A5%B6.png"}
  else{
    var avatarUrl="http://lc-KixOdMjP.cn-n1.lcfile.com/6c0KflruPvOHqbA9HvPM9SwGj1VGv5Tn/%E8%80%81%E7%88%B7%E7%88%B7.png"
  }
  this.setData({
avatarUrl:avatarUrl
  })
},
baocun(){
  if(!this.data.nickname){
    wx.showToast({
      title: '昵称不能为空',
  icon: 'error',
  duration: 2000
    })
  }else{
user.set("nickname",this.data.nickname)
user.save()
setTimeout(()=>{
wx.switchTab({
  url: '/pages/wode/wode',
})}, 1000)
}}
  
})