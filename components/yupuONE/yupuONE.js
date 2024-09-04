import {refreshAudioSrc, stopAudio, playAudio} from '../../utils/test_audio_utils.js'

Component({
  properties: {
    // 定义从页面传递到组件的参数，并监听数据变化
    receivedData: {
      type: Number,
      value: 0,
      observer: function(newVal) {
        this.updateContent(newVal);
      }
    },

    answerArray: {
      type: Array,
      value: []  // 默认值
    },

    listArray: {
      type: Array,
      value: []  // 默认值
    }
  },
  data: {
    // 点击“查看正确答案”后把参数传递到这
   receivedData:0,


  //  数组可以后续通过数据库进行实时刷新
   listCorrectAnswer:['他刚才说话时吞吞吐吐',
                      '他刚才说话时吞吞吐吐2',
                      '他刚才说话时吞吞吐吐3',
                      '他刚才说话时吞吞吐吐4',
                      '他刚才说话时吞吞吐吐5',
                      '他刚才说话时吞吞吐吐6',
                      '他刚才说话时吞吞吐吐7',
                      '他刚才说话时吞吞吐吐8',
                      '他刚才说话时吞吞吐吐9',
                      '他刚才说话时吞吞吐吐10'
                    ],

   listYourAnswer:['他刚才说话时吞吞吐吐',
                   '他刚才说话时吞吞吐吐2',
                   '他刚才说话时吞吞吐吐3',
                   '他刚才说话时吞吞吐吐4',
                   '他刚才说话时吞吞吐吐5',
                   '他刚才说话时吞吞吐吐6',
                   '他刚才说话时吞吞吐吐7',
                   '他刚才说话时吞吞吐吐8',
                   '他刚才说话时吞吞吐吐9',
                   '他刚才说话时吞吞吐吐10'
                  ],

   listYourScore:[100,99,98,97,96,95,94,93,92,91],



// 点击“1”到“10”10个按钮时把参数传递到这
   receiveDataButton:1,

   audioNUm:0,

  },

pageLifetimes: {
//根据数据库实时刷新数组里面内容
    show() {
      this.updateContent(this.data.receivedData);

},  
},
  
  methods: {
    // 暂时不太清楚作用
    // onClick() {
    //   wx.navigateBack();
    // },
    
    closePage() {
      this.triggerEvent('closePopup');  // 触发自定义事件
    },

    // 接收来自baogao.js的参数
    receiveData(data) {
      // 设置接收到的数据到组件的 data 中
      this.setData({
        receivedData: data,
      });

      // 你可以在这里处理接收到的数据
      // console.log("Received data in yupuONE component:", this.data.receivedData);
    },

// 更新内容的方法，根据 receivedData 的值设置不同的数据
updateContent(receivedData) {
  let content = {};

  if (receivedData == 1) {
    content = {
      listCorrectAnswer: [
        '她刚才讲话时吞吞吐吐',
        '楼下的小猫整晚都在叫',
        '她买了一台短波收音机',
        '他们说前天看到有飞碟',
        '她的乒乓球打得非常好',
        '我们都笑他是个胆小鬼',
        '前面不远有一个汽车站',
        '这个小学生有数学天赋',
        '她切菜不小心切伤手指',
        '学校经常检查宿舍卫生'
      ],
      listYourAnswer: this.data.answerArray[0],
      listYourScore: this.data.listArray[0]
    };
  } else if (receivedData == 2) {
    content = {
      listCorrectAnswer: [
        '这个球队终于打入决赛',
        '他拿出一支烟来请我抽',
        '我非常喜欢明媚的春天',
        '爸爸今天买回一个西瓜',
        '我不能肯定哪个队会赢',
        '下班时间这里经常堵车',
        '这个县城盛产苹果和梨',
        '这部电视剧的确很乏味',
        '谁都喜欢和她一起工作',
        '烟灰缸里有一大堆烟头'
              
      ],
      listYourAnswer: this.data.answerArray[1],
      listYourScore: this.data.listArray[1]
    };
  } else if (receivedData == 3) {
    // 如果 receivedData == 3 需要处理的数据逻辑
    content = {
      listCorrectAnswer: [
        '我十分钟后在门口等你', 
        '他的作文在比赛中获奖', 
        '我在桌子下发现一支笔',
        '那个牌子的电器非常好',
        '他第二天就把钱送来了',
        '这个小女孩长得很秀气',
        '那个饭馆的包子很出名',
        '她今天下午突然肚子疼', 
        '他家今天来了很多客人', 
        '我大年初一给爸爸拜年'     
      ],
      listYourAnswer:this.data.answerArray[2],
      listYourScore: this.data.listArray[2],
    };
  }
  else if (receivedData == 4) {
    // 如果 receivedData == 4需要处理的数据逻辑
    content = {
      listCorrectAnswer: [
        '公司接到一份国外订单', 
        '工地上有很多建筑工人', 
        '上个月很多人得了流感',
        '爸爸准备去考驾驶执照',
        '他吃完晚饭经常去散步',
        '她和同学们失去了联系',
        '姐夫修好了那台收音机',
        '这个大公司今年要裁员', 
        '小朋友用铅笔画向日葵', 
        '他们请了个保姆看小孩'     
      ],
      listYourAnswer: this.data.answerArray[3],
      listYourScore: this.data.listArray[3]
    };
  }
  // else if (receivedData == 5) {
  //   // 如果 receivedData == 5 需要处理的数据逻辑
  //   content = {
  //     listCorrectAnswer: ['内容4-1', '内容4-2', '内容4-3', '内容4-4', '内容4-5','内容4-6', '内容4-7', '内容4-8', '内容4-9', '内容4-10'],
  //     listYourAnswer: ['内容4-1', '内容4-2', '内容4-3', '内容4-4', '内容4-5','内容4-6', '内容4-7', '内容4-8', '内容4-9', '内容4-10'],
  //     listYourScore: [70, 69, 68, 67, 66,65,64,63,62,61]
  //   };
  // }


  // 更新数据
  this.setData(content);
  
},


    // 点击按钮1后执行的函数
    Click1(){
      this.setData({
        receiveDataButton:1,
        audioNUm:0
      })
      console.log(this.data.receiveDataButton)

    },

    // 点击按钮2后执行的函数
    Click2(){
      this.setData({
        receiveDataButton:2,
        audioNUm:1
      })
      console.log(this.data.receiveDataButton)

    },

    // 点击按钮3后执行的函数
    Click3(){
      this.setData({
        receiveDataButton:3,
        audioNUm:2
      })
      console.log(this.data.receiveDataButton)
      playAudio(2);
    },

    // 点击按钮4后执行的函数
    Click4(){
      this.setData({
        receiveDataButton:4,
        audioNUm:3
      })
      console.log(this.data.receiveDataButton)
    },

    // 点击按钮5后执行的函数
    Click5(){
      this.setData({
        receiveDataButton:5,
        audioNUm:4
      })
      console.log(this.data.receiveDataButton)
    },

    // 点击按钮6后执行的函数
    Click6(){
      this.setData({
        receiveDataButton:6,
        audioNUm:5
      })
      console.log(this.data.receiveDataButton)
    },

    // 点击按钮7后执行的函数
    Click7(){
      this.setData({
        receiveDataButton:7,
        audioNUm:6
      })
      console.log(this.data.receiveDataButton)
    },

    // 点击按钮8后执行的函数
    Click8(){
      this.setData({
        receiveDataButton:8,
        audioNUm:7
      })
      console.log(this.data.receiveDataButton)
    },

    // 点击按钮9后执行的函数
    Click9(){
      this.setData({
        receiveDataButton:9,
        audioNUm:8
      })
      console.log(this.data.receiveDataButton)
    },

    // 点击按钮10后执行的函数
    Click10(){
      this.setData({
        receiveDataButton:10,
        audioNUm:9
      })
      console.log(this.data.receiveDataButton)

    },
    
    PlayAudio(){
     playAudio(this.data.audioNUm);
    }
  },




});