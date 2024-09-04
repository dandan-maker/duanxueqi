const AV = require('../../libs/av-core-min.js');
const user = AV.User.current();
import {refreshAudioSrc, stopAudio, playAudio} from '../../utils/test_audio_utils.js'
Page({
  data: {
    // 控制弹出层是否可见的变量,true表示可见
    popupVisible: false,  
    popupVisible1: false,

    size:0,
    strokewidth:0,
    id:'',
    correctAnswers:
    [
      [
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
      [
        '这个球队终于打入决赛',
        '他拿出一支烟来请我抽',
        '我非常喜欢明媚的春天',
        '爸爸今天买回一个西瓜',
        '我不能肯定哪个队会赢',
        '下班时间这里常常堵车',
        '这个县城盛产苹果和梨',
        '这部电视剧的确很乏味',
        '谁都喜欢和她一起工作',
        '烟灰缸里有一大堆烟头'
      ],
      [
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
      [
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
      ]
    ],

    answerData:[],


    // 语谱噪声页面对应的传递参数1
    dataYupu:1,
    
    // 语谱噪声页面对应的传递参数2
    dataHuisheng:2,

    // 倍速噪声页面对应的传递参数3
    dataBeisu:3,

    // 环境噪声页面对应的传递参数4
    dataHuanjin:4,

    // 综合得分页面对应的传递参数5
    dataZonghe:5,

    //  测试页面分数，后续通过数据库实时更新，实时渲染
    testScore:[61,88,77,66,55],

    listScore:[
      [],[],[],[]
    ],

    gradientColor1: {
      '0%': '#FFEB3A',
      '100%': '#4DEF8E',
    },
    gradientColor2: {
      '0%': '#E0FF87',
      '100%': '#8FB85B',
    },
    gradientColor3: {
      '0%': '#7CF7FF',
      '100%': '#4B73FF',
    },
    gradientColor4: {
      '0%': '#FFED46',
      '100%': '#FF7EC7',
    },
    gradientColor5: {
      '0%': '#FFBB89',
      '100%': '#7B6AE0',
    },

  },

  onLoad(options){
    const systemInfo = wx.getSystemInfoSync();
    const screenWidth = systemInfo.screenWidth;
    const size = 0.28 * screenWidth;
    const strokewidth=0.075*size;
    this.setData({
      size: size,
      strokewidth:strokewidth,
      id:options.id
    });

    
  },
 

  onShareAppMessage() {
    return {}
  },

  onShow() {
    if (user) {
      const family = user.get("family");
      console.log(family)
      let answer=family[this.data.id].answer
      console.log("这是用户输入",answer);  // 打印出 answer 的内容进行检查
      // 如果需要，可以在这里将 answer 数据设置到页面的数据中
      this.setData({
        answerData: answer,  // 可以在 data 中添加一个 answerData 用于保存这个数据
      });
    } else {
      console.log('User is not logged in or user object is null');
    }

    this.calculateScore();

    this.setData({
      ['testScore[4]']:Math.round( (this.data.testScore[0] + this.data.testScore[1] + this.data.testScore[2] + this.data.testScore[3]) / 4)
    });
  
  },



  calculateScore() {
    // 定义映射规则
    const normalizationMap = {
        "他": "X", "她": "X", "它": "X",
        "的": "Y", "得": "Y", "地": "Y"
    };

    for(let k = 0; k < 4; k++){
        const userAnswers = this.data.answerData[k];
        const correctAnswers = this.data.correctAnswers[k];

        // 确保用户答案数组和正确答案数组长度相同
        if (userAnswers.length !== correctAnswers.length) {
            throw new Error("User answers and correct answers must have the same length");
        }

        // 总分数初始化为0
        let totalScore = 0;

        // 遍历每个用户输入
        for (let i = 0; i < userAnswers.length; i++) {
            let userAnswer = userAnswers[i] || ""; // 用户无输入时默认为空字符串
            let correctAnswer = correctAnswers[i];

            // 如果用户没有输入，分数为0
            if (userAnswer === "") {
                continue;
            }

            // 计算匹配的字符数
            let correctCharCount = 0;

            // 将用户输入和正确答案中的特定字符归一化
            userAnswer = userAnswer.split('').map(char => normalizationMap[char] || char).join('');
            correctAnswer = correctAnswer.split('').map(char => normalizationMap[char] || char).join('');

            // 遍历用户输入的每个字
            for (let userChar of userAnswer) {
                // 遍历正确答案中的每个字
                for (let j = 0; j < correctAnswer.length; j++) {
                    const correctChar = correctAnswer[j];
                    if (userChar === correctChar) {
                        correctCharCount++;
                        // 匹配后移除该正确答案中的字符，防止重复计分
                        correctAnswer = correctAnswer.slice(0, j) + correctAnswer.slice(j + 1);
                        break;
                    }
                }
            }

            // 计算分数：正确字符数 / 正确答案的字符数 * 10
            const score = (correctCharCount / correctAnswers[i].length) * 10;

            let listScore = this.data.listScore; // 获取当前的 listScore 数组
            // 更新指定位置的值
            listScore[k][i] = score; 
            console.log("这是list：", listScore[k][i]);
            
            // 将更新后的数组设置回 data 中
            this.setData({
                listScore: listScore
            });

            // 累加到总分
            totalScore += score;
        }

        // 更新总分到页面数据
        this.setData({
            [`testScore[${k}]`]: totalScore
        });

        console.log("总分数:", totalScore);
    }
},


// 点击语谱噪声查看答案，执行onPop
onPop(){
// 打开弹层
  this.setData({ popupVisible: true });

// 传递数据给yupuONE.js
   // 获取组件的实例
  const yupuONE = this.selectComponent("#yupuONEComponent");

   // 调用组件中的方法，并传递参数
  if (yupuONE) {
  yupuONE.receiveData(this.data.dataYupu);
  }
  refreshAudioSrc(this.data.dataYupu-1);
},

// 点击回声测试查看答案，执行onPop2
onPop2(){
  // 打开弹层
    this.setData({ popupVisible: true });
  
  // 传递数据给yupuONE.js
     // 获取组件的实例
    const yupuONE = this.selectComponent("#yupuONEComponent");
  
     // 调用组件中的方法，并传递参数
    if (yupuONE) {
    yupuONE.receiveData(this.data.dataHuisheng);
    }
    refreshAudioSrc(this.data.dataHuisheng-1);
  },

  // 点击倍速测试查看答案，执行onPop3
onPop3(){
  // 打开弹层
    this.setData({ popupVisible: true });
  
  // 传递数据给yupuONE.js
     // 获取组件的实例
    const yupuONE = this.selectComponent("#yupuONEComponent");
  
     // 调用组件中的方法，并传递参数
    if (yupuONE) {
    yupuONE.receiveData(this.data.dataBeisu);
    }
    refreshAudioSrc(this.data.dataBeisu-1);
  },

  // 点击环境噪声查看答案，执行onPop4
onPop4(){
  // 打开弹层
    this.setData({ popupVisible: true });
  
  // 传递数据给yupuONE.js
     // 获取组件的实例
    const yupuONE = this.selectComponent("#yupuONEComponent");
  
     // 调用组件中的方法，并传递参数
    if (yupuONE) {
    yupuONE.receiveData(this.data.dataHuanjin);
    }
    refreshAudioSrc(this.data.dataHuanjin-1);
  },

  // 点击综合得分查看答案，执行onPop5
onPop5(){
  // 打开弹层
    this.setData({ popupVisible1: true });
  
  // 传递数据给yupuONE.js
     // 获取组件的实例
    // const yupuONE = this.selectComponent("#yupuONEComponent");
  
     // 调用组件中的方法，并传递参数
  //   if (yupuONE) {
  //   yupuONE.receiveData(this.data.dataZonghe);
  //   }
  },
  

handleClosePopup() {
    this.setData({
      popupVisible: false  // 将 popupVisible 设置为 false 关闭弹窗
    });
  },

  handleClosePopup1() {
    this.setData({
      popupVisible1: false  // 将 popupVisible 设置为 false 关闭弹窗
    });
  },

// 关闭弹层
  onClose() {
    this.setData({ popupVisible: false });
  },

  onClose1() {
    this.setData({ popupVisible1: false });
  },


  




});