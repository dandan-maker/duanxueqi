// utils/test_data_upload_utils.js

// const app = getApp()
const AV = require('../../../libs/av-core-min.js');
const user = AV.User.current();

function uploadUserAnswer(scene_num, userSentence) {
  var answer = user.get("answer")
  answer[scene_num] = userSentence
  user.set("answer", sentences)
  user.save()
}

export {uploadUserAnswer}