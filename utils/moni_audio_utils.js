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
      '1_1': 'http://lc-KixOdMjP.cn-n1.lcfile.com/qgd7P0yfMcO0PGi8XbVx32w2z3yvYcyj/testAudio_trafficNoise.wav',
      // '1_2': 'audio/care_child_mild.mp3',
      // '1_3': 'audio/care_child_moderate.mp3',
      // '1_4': 'audio/care_child_severe.mp3',
      // '2_1': 'audio/daughter_call_normal.mp3',
      // '2_2': 'audio/daughter_call_mild.mp3',
      // '2_3': 'audio/daughter_call_moderate.mp3',
      // '2_4': 'audio/daughter_call_severe.mp3',
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
