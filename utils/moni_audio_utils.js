// utils/moni_audio_utils.js

const innerAudioContext = wx.createInnerAudioContext();

class AudioUtils {
  constructor() {
    this.audioContext = innerAudioContext;
    this.audioSrc = [];
    this.onEndedCallback = null;

    // 监听音频播放结束事件
    this.audioContext.onEnded(() => {
      if (this.onEndedCallback) {
        this.onEndedCallback();
      }
    });
  }

  // 初始化音频
  initAudio(src) {
    if (this.audioContext) {
      this.audioContext.stop();
    }
    this.audioContext.src = src;
  }

  // 播放音频
  play() {
    if (this.audioContext) {
      this.audioContext.play();
    }
  }

  // 暂停音频
  pause() {
    if (this.audioContext) {
      this.audioContext.pause();
    }
  }

  // 停止音频
  stop() {
    if (this.audioContext) {
      this.audioContext.stop();
    }
  }

  // 刷新音频源
  refreshAudioSrc(sceneId, hearingTypeId) {
    // 根据 sceneId 和 hearingTypeId 来选择不同的音频源
    const audioMap = {
      '1_1': 'http://lc-KixOdMjP.cn-n1.lcfile.com/IhnUlM1PK0BqnHDlC4KhDu4p4ISaxvb9/%E7%85%A7%E9%A1%BE%E5%AD%A9%E5%AD%90%E6%A8%A1%E6%8B%9F.mp3',
      '1_2': 'http://lc-KixOdMjP.cn-n1.lcfile.com/XIEM8d1yTEygNkN7wP4TTr2u55TPzM88/%E7%85%A7%E9%A1%BE%E5%AD%A9%E5%AD%90-%E8%BD%BB%E5%BA%A6.wav',
      '1_3': 'http://lc-KixOdMjP.cn-n1.lcfile.com/QhavQteOQALXhVX55UEdD69oo7IWCvt1/%E7%85%A7%E9%A1%BE%E5%AD%A9%E5%AD%90-%E4%B8%AD%E5%BA%A6.wav',
      '1_4': 'http://lc-KixOdMjP.cn-n1.lcfile.com/AbYkt0UoQl1JwBrq6ac5h2IfJAuSj9we/%E7%85%A7%E9%A1%BE%E5%AD%A9%E5%AD%90-%E9%87%8D%E5%BA%A6.wav',
      '2_1': 'http://lc-KixOdMjP.cn-n1.lcfile.com/N4HfdozaaFR0RxjtzvyAmNses6XAnyrR/%E5%AE%B6%E5%BA%AD%E8%81%9A%E9%A4%90%E6%A8%A1%E6%8B%9F.mp3',
      '2_2': 'http://lc-KixOdMjP.cn-n1.lcfile.com/4GLYAxi3JTTdMC0272zebASvgg9Oo4vW/%E5%AE%B6%E5%BA%AD%E2%80%94%E8%BD%BB%E5%BA%A6.wav',
      '2_3': 'http://lc-KixOdMjP.cn-n1.lcfile.com/76ex7C7CCJVc0Ei15EWAOdw54oyK0evT/%E5%AE%B6%E5%BA%AD-%E4%B8%AD%E5%BA%A6.wav',
      '2_4': 'http://lc-KixOdMjP.cn-n1.lcfile.com/71gCoflu49n54V2a6uTk1WVt3Eo6RqJi/%E5%AE%B6%E5%BA%AD-%E9%87%8D%E5%BA%A6.wav',
      '3_1':'http://lc-KixOdMjP.cn-n1.lcfile.com/KRjzu4C8LMm2lVIcdQgFz8eBeajicbiI/%E5%85%AC%E4%BA%A4%E7%8E%AF%E5%A2%83%E6%A8%A1%E6%8B%9F.mp3',
      '3_2':'http://lc-KixOdMjP.cn-n1.lcfile.com/YmPR7YGElsWgwfWqGPGpizm9DPLo9eN3/%E5%85%AC%E4%BA%A4%E2%80%94%E8%BD%BB%E5%BA%A6.wav',
      '3_3':'http://lc-KixOdMjP.cn-n1.lcfile.com/gfHfyLEyfEFbI9KSXyaYTCSXk2mRJFQ2/%E5%85%AC%E4%BA%A4-%E4%B8%AD%E5%BA%A6.wav',
      '3_4':'http://lc-KixOdMjP.cn-n1.lcfile.com/JR3tKJp0Uh7gAg1AGX8eOIh5MM5CDPbp/%E5%85%AC%E4%BA%A4-%E9%87%8D%E5%BA%A6.wav',
      // 添加其他音频源
    };
    const key = `${sceneId}_${hearingTypeId}`;
    this.audioSrc = audioMap[key] || null;
  }

  // 获取当前音频源
  getAudioSrc() {
    return this.audioSrc;
  }

  // 设置音频播放结束的回调函数
  setOnEndedCallback(callback) {
    this.onEndedCallback = callback;
  }
}

module.exports = new AudioUtils();
