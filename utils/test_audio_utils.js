// utils/test_audio_utils.js

const innerAudioContext = wx.createInnerAudioContext()

const localData = {
  //二维数组，存有 [每个测试场景] 下 [每套题] 中 '每个题号' 对应音频的src（目前暂时先都使用同一个本地测试音频代替）
  //可以把这个音频src数据库和每道题的文本答案合并到一起，到时候一起移动到存放全局数据的地方，各个页面均可读取，比如放在app.js或者leancloud上
  audioSrc: [[
    //场景1：语谱噪声
      //第1套题
      ['/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav']/*,
      //第2套题
      ['/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav']*/
    ],[
    //场景2：回声场景
      //第1套题
      ['/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav']/*,
      //第2套题
      ['/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav']*/
    ],[
    //场景3：倍速场景
      //第1套题
      ['/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav']/*,
      //第2套题
      ['/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav']*/
    ],[
    //场景4：环境噪声
      //第1套题
      ['/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav']/*,
      //第2套题
      ['/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav','/audio/test_2/testAudio_trafficNoise.wav']*/      
    ]
  ]
}

/*
//随机选择一套题库，把题号传递回testpage的js文件
function randomMHINT() {

}
*/

//停止播放测试音频的函数
function stopAudio() {
  innerAudioContext.stop()
}

//播放测试音频的函数，播放前进行1s延时
function playAudio(scene_num, set_num, question_num) {
  stopAudio()  //先停止上一题的音频，避免答题过快导致多题音频重叠
  let src = localData.audioSrc[scene_num][set_num][question_num]
  setTimeout(()=>{
    innerAudioContext.autoplay = true
    innerAudioContext.src = src
    innerAudioContext.play()
  }, 1000)
}

export {stopAudio, playAudio}