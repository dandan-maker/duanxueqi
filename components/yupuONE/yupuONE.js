Component({
  properties: {
    // 定义从页面传递到组件的参数，并监听数据变化
    receivedData: {
      type: Number,
      value: 0,
      observer: function(newVal) {
        this.updateContent(newVal);
      }
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

  },

pageLifetimes: {
//根据数据库实时刷新数组里面内容
    show() {
      this.updateContent(this.data.receivedData);

},  
},
  
  methods: {
    // 暂时不太清楚作用
    onClick() {
      wx.navigateBack();
    },
    
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
        '他刚才说话时吞吞吐吐',
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
      listYourAnswer: [
        '他刚才说话时吞吞吐吐',
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
      listYourScore: [100, 99, 98, 97, 96, 95, 94, 93, 92, 91]
    };
  } else if (receivedData == 2) {
    content = {
      listCorrectAnswer: [
        '这只球队终于打入球赛',
        '这只球队终于打入球赛2',
        '这只球队终于打入球赛3',
        '这只球队终于打入球赛4',
        '这只球队终于打入球赛5',
        '这只球队终于打入球赛6',
        '这只球队终于打入球赛7',
        '这只球队终于打入球赛8',
        '这只球队终于打入球赛9',
        '这只球队终于打入球赛10'
      ],
      listYourAnswer: [
        '这只球队终于打入球赛',
        '这只球队终于打入球赛2',
        '这只球队终于打入球赛3',
        '这只球队终于打入球赛4',
        '这只球队终于打入球赛5',
        '这只球队终于打入球赛6',
        '这只球队终于打入球赛7',
        '这只球队终于打入球赛8',
        '这只球队终于打入球赛9',
        '这只球队终于打入球赛10'
      ],
      listYourScore: [90, 89, 88, 87, 86, 85, 84, 83, 82, 81]
    };
  } else if (receivedData == 3) {
    // 如果 receivedData == 3 需要处理的数据逻辑
    content = {
      listCorrectAnswer: ['内容3-1', '内容3-2', '内容3-3', '内容3-4', '内容3-5','内容3-6', '内容3-7', '内容3-8', '内容3-9', '内容3-10'],
      listYourAnswer: ['内容3-1', '内容3-2', '内容3-3', '内容3-4', '内容3-5','内容3-6', '内容3-7', '内容3-8', '内容3-9', '内容3-10'],
      listYourScore: [80, 79, 78, 77, 76,75,74,73,72,71]
    };
  }
  else if (receivedData == 4) {
    // 如果 receivedData == 3 需要处理的数据逻辑
    content = {
      listCorrectAnswer: ['内容4-1', '内容4-2', '内容4-3', '内容4-4', '内容4-5','内容4-6', '内容4-7', '内容4-8', '内容4-9', '内容4-10'],
      listYourAnswer: ['内容4-1', '内容4-2', '内容4-3', '内容4-4', '内容4-5','内容4-6', '内容4-7', '内容4-8', '内容4-9', '内容4-10'],
      listYourScore: [70, 69, 68, 67, 66,65,64,63,62,61]
    };
  }
  else if (receivedData == 5) {
    // 如果 receivedData == 3 需要处理的数据逻辑
    content = {
      listCorrectAnswer: ['内容4-1', '内容4-2', '内容4-3', '内容4-4', '内容4-5','内容4-6', '内容4-7', '内容4-8', '内容4-9', '内容4-10'],
      listYourAnswer: ['内容4-1', '内容4-2', '内容4-3', '内容4-4', '内容4-5','内容4-6', '内容4-7', '内容4-8', '内容4-9', '内容4-10'],
      listYourScore: [70, 69, 68, 67, 66,65,64,63,62,61]
    };
  }

  // 更新数据
  this.setData(content);
  
},

    // 点击按钮1后执行的函数
    Click1(){
      this.setData({
        receiveDataButton:1
      })
      console.log(this.data.receiveDataButton)

    },

    // 点击按钮2后执行的函数
    Click2(){
      this.setData({
        receiveDataButton:2
      })
      console.log(this.data.receiveDataButton)
    },

    // 点击按钮3后执行的函数
    Click3(){
      this.setData({
        receiveDataButton:3
      })
      console.log(this.data.receiveDataButton)
    },

    // 点击按钮4后执行的函数
    Click4(){
      this.setData({
        receiveDataButton:4
      })
      console.log(this.data.receiveDataButton)
    },

    // 点击按钮5后执行的函数
    Click5(){
      this.setData({
        receiveDataButton:5
      })
      console.log(this.data.receiveDataButton)
    },

    // 点击按钮6后执行的函数
    Click6(){
      this.setData({
        receiveDataButton:6
      })
      console.log(this.data.receiveDataButton)
    },

    // 点击按钮7后执行的函数
    Click7(){
      this.setData({
        receiveDataButton:7
      })
      console.log(this.data.receiveDataButton)
    },

    // 点击按钮8后执行的函数
    Click8(){
      this.setData({
        receiveDataButton:8
      })
      console.log(this.data.receiveDataButton)
    },

    // 点击按钮9后执行的函数
    Click9(){
      this.setData({
        receiveDataButton:9
      })
      console.log(this.data.receiveDataButton)
    },

    // 点击按钮10后执行的函数
    Click10(){
      this.setData({
        receiveDataButton:10
      })
      console.log(this.data.receiveDataButton)
    },

  },




});