Page({
  data: {
    // 控制弹出层是否可见的变量,true表示可见
    popupVisible: false,  
    popupVisible1: false,

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

  onShareAppMessage() {
    return {};
  },
  onShow() {
    
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