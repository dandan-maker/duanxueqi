// index.js

import {stopAudio} from '../../utils/test_audio_utils.js'

const app = getApp()
const AV = require('../../libs/av-core-min.js');
const user = AV.User.current();

Page({
  data: {
    testscene_1_3: [{
      title:"语谱噪声",
      num:"1",
      bgcolor:"#fdf3b9",
      icon_src:"http://lc-KixOdMjP.cn-n1.lcfile.com/PlmLOrPGyHEjJyGB8BaoJRftoBejxy09/index_icon_speech.png"
    },{
      title:"倍速场景",
      num:"3",
      bgcolor:"#bcdbca",
      icon_src:"http://lc-KixOdMjP.cn-n1.lcfile.com/fmSxjtfR6pUU5JifSPPJUAh0INV9TSaB/index_icon_speed.png"
    }],
    testscene_2_4: [{
      title:"回声场景",
      num:"2",
      bgcolor:"#c2e5ea",
      icon_src:"http://lc-KixOdMjP.cn-n1.lcfile.com/lHw3hdwyULDs45A0iEQVlXIE2FOeGFPd/index_icon_noise.png"  //图片链接只是文件命名有误，暂且不调整
    },{
      title:"环境噪声",
      num:"4",
      bgcolor:"#f1d5e1",
      icon_src:"http://lc-KixOdMjP.cn-n1.lcfile.com/zaJuOYNej6L2NHGSOl9pQ39dyPQH4U7O/index_icon_echo.png" //图片链接只是文件命名有误，暂且不调整
    }]
  },

  //切入前台时的函数
  onShow() {
    //如果从测试场景中切回测试首页，音频还在播放的话，要停止播放
    stopAudio()
  },

  // 点击按钮进入相应测试界面
  onClick(event) {
    let target_scene = event.currentTarget.dataset.id;
    // console.log(target_scene);
    wx.navigateTo({
      url: '/zhunbei/erji/erji?origin=1'+'&target_scene='+target_scene,
    })
  },
  
})