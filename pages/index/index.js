// index.js
Page({
  data: {
    testscene_1_3: [{
      title:"语谱噪声",
      num:"1",
      bgcolor:"#fdf3b9",
      icon_src:"/image/index_img/index_icon_speech.png"
    },{
      title:"倍速场景",
      num:"3",
      bgcolor:"#bcdbca",
      icon_src:"/image/index_img/index_icon_echo.png"
    }],
    testscene_2_4: [{
      title:"回声场景",
      num:"2",
      bgcolor:"#c2e5ea",
      icon_src:"/image/index_img/index_icon_noise.png"
    },{
      title:"环境噪声",
      num:"4",
      bgcolor:"#f1d5e1",
      icon_src:"/image/index_img/index_icon_speed.png"
    }]
  },

  /* 点击按钮进入相应测试界面 */
  onClick(event) {
    let target_scene = event.currentTarget.dataset.id;
    // console.log(target_scene);
    wx.reLaunch({
      url: '/pages/testpages/test_'+target_scene+'/test_'+target_scene+'?origin='+1,
    })
  }
})