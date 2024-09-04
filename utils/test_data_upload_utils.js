// utils/test_data_upload_utils.js

// const app = getApp() //这句是用来干嘛的啊？
const AV = require('../libs/av-core-min.js')
const user = AV.User.current()

var defaultData =[
  ["","","","","","","","","",""],
  ["","","","","","","","","",""],
  ["","","","","","","","","",""],
  ["","","","","","","","","",""]
]

function uploadUserAnswer(scene_num, userSentence) {
  var answer = user.get("answer")
  // console.log(answer)
  if (!answer) {  //如果Leancloud中无先前存储的用户答案，则初始化赋为默认值
    answer = defaultData
  }
  answer[scene_num] = userSentence
  // console.log(answer)
  //存到服务器并保存
  user.set("answer", answer)
  user.save()
}

function uploadUserAnswer_1(scene_num, userSentence,id) {
  var family = user.get("family")
  
  // console.log(answer)
  if (!family[id].answer) {  //如果Leancloud中无先前存储的用户答案，则初始化赋为默认值
   family[id].answer = defaultData
  }
  family[id].answer[scene_num]=userSentence
  // console.log(answer)
  //存到服务器并保存
  user.set("family", family)
  user.save()
}


export {uploadUserAnswer,uploadUserAnswer_1}