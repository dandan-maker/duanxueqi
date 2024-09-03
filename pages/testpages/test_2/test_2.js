// pages/testpages/test_2/test_2.js

//引入外部函数
import {refreshAudioSrc, stopAudio, playAudio} from '../../../utils/test_audio_utils.js'
import {uploadUserAnswer} from '../../../utils/test_data_upload_utils.js'

const app = getApp()
const AV = require('../../../libs/av-core-min.js');
const user = AV.User.current();

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
    id:'',
    scene_num: 1,
    set_num: 0,
    question_num: 0
  },

  onLoad(options) {
    //开启左上角返回键弹窗提醒
    wx.enableAlertBeforeUnload({
      message: '测试尚未结束，是否退出？'
    })
    //现在把testpages的跳转从wx.relaunch改成wx.navigateTo了，会更合理一点，relaunch会销毁先前所有页面；navigateTo会自己记录页面栈，跳回上级页面。
    //记录上级页面来源：测试中心 or 家庭成员；
    let origin = options.origin
    this.setData({
      origin: origin,
      id: options.id
    }) 
    //根据测试场景对应的 scene_num 更新 /utils/test_data_upload_utils.js 中的 audio_src 数组，在每个测试页面加载时执行一次
    refreshAudioSrc(this.data.scene_num)
    //设置0.5s延迟再播放第一题音频，因为 refreshAudioSrc 从线上获取 audio_src 需要一定时间，playAudio 执行太快的话会在 audio_src 还没获取成功时就查找这个空数组，引发报错
    setTimeout(()=>{
      //自动播放第一段测试音频
      playAudio(this.data.question_num)
    }, 500)
  },

  //点击“下一题”图标时的函数
  onNext() {
    if (this.data.prog < 100) {
     //进度百分数+10，并清空输入框中内容
      let new_prog = this.data.prog + 10
      let new_question_num = this.data.question_num + 1
      this.setData({
        prog: new_prog,
        iptValue: "",
        question_num: new_question_num
      })
      //如果+10后，进度达到100%，即该测试的10题全部答完的时候，显示“返回测试中心”图标，并把“下一题”改为“继续测试”，将输入框禁用
      if (new_prog == 100) {
        stopAudio() //测试已经完成，如果音频尚未播完也要停止
        wx.disableAlertBeforeUnload() //测试已经完成，取消左上角返回键警告
        uploadUserAnswer(this.data.scene_num, this.data.userSentence) //上传用户答案到Leancloud
        //显示“返回测试中心”图标，并把“下一题”改为“继续测试”，将输入框禁用
        this.setData ({
          isEnd: true,
          iptShow: false
        })
      } else {
        //自动播放下一题测试音频
        playAudio(this.data.question_num)
      }
      
    } else {  //已经到达100%进度，此时点击“继续测试”
      if(this.data.origin==2){
        let family=user.get("family");
        family[this.data.id].isceshi_2=true;
        user.set("family",family);
        user.save();
      }
      //点击“继续测试”，跳转下一个测试场景
      //改为使用redirectTo，仅仅销毁当前1个页面，跳转下一个页面，避免页面堆栈超过navigateTo的上限（10页）
      wx.redirectTo({
        url: '/pages/testpages/test_3/test_3?origin='+this.data.origin+'&id='+this.data.id,
      })
    }
  },

  //点击“返回”的函数
  onBackHome() {
    if(this.data.origin==2){
      let family=user.get("family")
      family[this.data.id].isceshi_2=true
      user.set("family",family)
      user.save()
      // 这里不知道都使用下面的 wx.navigateBack() 的话，会不会navigateBack回这个带有?id=的member界面？如果从member界面点进来测试的时候，member界面是带有?id=的话，应该是可以回去的
      // wx.reLaunch({
      //   url: '/pages/member/member?id='+this.data.id,
      // })
    }
    wx.navigateBack() //改用navigateBack，配合navigateTo
  },

  //在输入框中输入答案的函数，将用户输入内容存储到this.data当中
  onIpt(event) {
    let seq = this.data.prog / 10
    this.setData ({
      ['userSentence['+seq+']']: event.detail.value,
      iptValue: event.detail.value
    })
  }
})