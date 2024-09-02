// utils/test_audio_utils.js

const AV = require('../libs/av-core-min.js')
const query = new AV.Query("Database")
var audio_src = []

const innerAudioContext = wx.createInnerAudioContext()

//随机选择一套题库，把题号传递回testpage的js文件
function randomSet(set_cnt) {
  return Math.floor(Math.random() * set_cnt)
}

//根据测试场景对应的 scene_num 更新 audio_src 数组，在每个测试页面加载时执行一次
function refreshAudioSrc(scene_num) {
  switch(scene_num) {
    case 0: //66d5610a4a68fb2bf29f4480 为 test_1 语谱噪声 的 objectId
      query.get("66d5610a4a68fb2bf29f4480").then((scene_data)=>{
        var set_cnt = scene_data.get("set_cnt")
        var set_num = randomSet(set_cnt)
        audio_src = scene_data.get("audioSrc")[set_num]
      })
      break;
    case 1: //66d561080a2497783f6ddf5b 为 test_2 回声场景 的 objectId
      query.get("66d561080a2497783f6ddf5b").then((scene_data)=>{
        var set_cnt = scene_data.get("set_cnt")
        var set_num = randomSet(set_cnt)
        audio_src = scene_data.get("audioSrc")[set_num]
      })
      break;
    case 2: //66d561044a68fb2bf29f447f 为 test_3 倍速场景 的 objectId
      query.get("66d561044a68fb2bf29f447f").then((scene_data)=>{
        var set_cnt = scene_data.get("set_cnt")
        var set_num = randomSet(set_cnt)
        audio_src = scene_data.get("audioSrc")[set_num]
      })
      break;
    case 3: //66d55ec10a2497783f6ddf59 为 test_4 环境噪声 的 objectId
      query.get("66d55ec10a2497783f6ddf59").then((scene_data)=>{
        var set_cnt = scene_data.get("set_cnt")
        var set_num = randomSet(set_cnt)
        audio_src = scene_data.get("audioSrc")[set_num]
      })
      break;
  }
}

//停止播放测试音频的函数
function stopAudio() {
  innerAudioContext.stop()
}

//播放测试音频的函数，播放前进行1s延时
function playAudio(question_num) {
  stopAudio()  //先停止上一题的音频，避免答题过快导致多题音频重叠
  let src = audio_src[question_num]
  setTimeout(()=>{
    innerAudioContext.autoplay = true
    innerAudioContext.src = src
    innerAudioContext.play()
  }, 1000)
}

export {refreshAudioSrc, stopAudio, playAudio}