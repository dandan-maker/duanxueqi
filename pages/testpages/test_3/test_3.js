// pages/testpages/test_3/test_3.js

//引入外部函数
import {playAudio} from '../util_testpages.js'

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
    origin:'',
    scene_num: 2,
    set_num: 0,
    question_num: 0
  },

  onLoad(options) {
    //开启左上角返回键弹窗提醒
    wx.enableAlertBeforeUnload({
      message: '测试尚未结束，是否退出？',
    })
    //记录上级页面来源：测试中心 or 家庭成员；
    /* //现在testpages的跳转从relaunch改成navigateTo了，可以不使用origin参数，微信会自己记录页面栈，跳回上级页面
    let origin = options.origin
    this.setData({
      origin: origin
    }) */
    //自动播放第一段测试音频
    playAudio(this.data.scene_num, this.data.set_num, this.data.question_num)
  },

  //点击“下一题”图标时的函数
  onNext() {
    if (this.data.prog < 100) {
     //进度百分数+10，并清空输入框中内容
      let new_prog = this.data.prog + 10;
      let new_question_num = this.data.question_num + 1
      this.setData({
        prog: new_prog,
        iptValue: "",
        question_num: new_question_num
      })
      //如果+10后，进度达到100%，即该测试的10题全部答完的时候，显示“返回测试中心”图标，并把“下一题”改为“继续测试”，将输入框禁用
      if (new_prog == 100) {
        wx.disableAlertBeforeUnload() //测试已经完成，取消左上角返回键警告
        this.setData ({
          isEnd: true,
          iptShow: false
        })
      } else {
        //自动播放下一题测试音频
        playAudio(this.data.scene_num, this.data.set_num, this.data.question_num)
      }
      
    } else {  //已经到达100%进度，此时点击“继续测试”
      //点击“继续测试”，跳转下一个测试场景
      //** 改为使用redirectTo，销毁当前1个页面，跳转下一个页面，避免页面堆栈超过navigateTo的上限（10页） **
      wx.redirectTo({
        url: '/pages/testpages/test_4/test_4?origin='+1,
      })
    }
  },

  //点击“返回”的函数
  onBackHome() {
    //返回
    /* if(this.data.origin==1){
      wx.reLaunch({
        url: '/pages/index/index',
      });
    }
    else if(this.data.origin==2){
      wx.reLaunch({
        url: '/pages/member/member',
      });
    } */
    wx.navigateBack()
  },

  //在输入框中输入答案的函数，将用户输入内容存储到this.data当中
  onIpt(event) {
    let seq = this.data.prog / 10;
    this.setData ({
      ['userSentence['+seq+']']: event.detail.value,
      iptValue: event.detail.value
    })
  }
})