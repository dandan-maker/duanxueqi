// pages/testpages/test_1/test_1.js
Page({
  data: {
    prog: 0,
    userSentence: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    isEnd: false,
    iptShow: true,
    iptValue: "",
    origin:''
  },

  onLoad(options) {
    //等待2s后自动播放第一段测试音频
  let origin=options.origin;
  this.setData({
    origin:origin
  })

  },

  //点击“下一题”图标时的函数
  onNext() {
    if (this.data.prog < 100) {
     //进度百分数+10，并清空输入框中内容
      let new_prog = this.data.prog + 10;
      this.setData({
        prog: new_prog,
        iptValue: ""
      });
      //如果+10后，进度达到100%，即该测试的10题全部答完的时候，显示“返回测试中心”图标，并把“下一题”改为“继续测试”，将输入框禁用
      if (new_prog == 100) {
        this.setData ({
          isEnd: true,
          iptShow: false
        });
      };
      //等待1s后自动播放下一段测试音频
      
    } else {  //已经到达100%进度，此时点击“继续测试”
      //点击“继续测试”，跳转下一个测试场景
      wx.reLaunch({
        url: '/pages/testpages/test_2/test_2?origin='+1,
      });
    }
  },

  //点击“返回测试中心”的函数
  onBackHome() {
    //返回测试中心
    if(this.data.origin==1){
    wx.reLaunch({
      url: '/pages/index/index',
    });
  }
  else if(this.data.origin==2){
    wx.reLaunch({
      url: '/pages/member/member',
    });}
 
  },

  //在输入框中输入答案的函数，将用户输入内容存储到this.data当中
  onIpt(event) {
    let seq = this.data.prog / 10;
    this.setData ({
      ['userSentence['+seq+']']: event.detail.value,
      iptValue: event.detail.value
    });
  }
})