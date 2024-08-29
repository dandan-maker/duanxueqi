// pages/yinping/yinping.js
Page({
  data: {
    showOptionsPanel: false,
    showOptionsPanel_1: false,
    showOptionsPanel_2: false,
    showOptionsPanel_3: false,
    selectedItem: {},
    selectedItem_1: {},
    selectedItem_2: {},
    selectedItem_3: {},
    options: [
      {value: '1', text: '题目 1'},
      {value: '2', text: '题目 2'},
      {value: '3', text: '题目 3'},
      {value: '4', text: '题目 4'},
      {value: '5', text: '题目 5'},
      {value: '6', text: '题目 6'},
      {value: '7', text: '题目 7'},
      {value: '8', text: '题目 8'},
      {value: '9', text: '题目 9'},
      {value: '10', text: '题目 10'}
    ]
  },

  // 显示下拉选项
  showOptions() {
    this.setData({showOptionsPanel: true});
  },
  showOptions_1() {
    this.setData({showOptionsPanel_1: true});
  },
  showOptions_2() {
    this.setData({showOptionsPanel_2: true});
  },
  showOptions_3() {
    this.setData({showOptionsPanel_3: true});
  },
  // 选择选项
  selectOption(e) {
    const index = e.currentTarget.dataset.index;
    const selectedItem = this.data.options[index];
    this.setData({
      selectedItem:selectedItem,
      showOptionsPanel: false
    });
    
  },
  selectOption_1(e) {
    const index = e.currentTarget.dataset.index;
    const selectedItem_1 = this.data.options[index];
    this.setData({
      selectedItem_1:selectedItem_1,
      showOptionsPanel_1: false
    });
    
  },
  selectOption_2(e) {
    const index = e.currentTarget.dataset.index;
    const selectedItem_2 = this.data.options[index];
    this.setData({
      selectedItem_2:selectedItem_2,
      showOptionsPanel_2: false
    });
    
  },
  selectOption_3(e) {
    const index = e.currentTarget.dataset.index;
    const selectedItem_3 = this.data.options[index];
    this.setData({
      selectedItem_3:selectedItem_3,
      showOptionsPanel_3: false
    });
    
  }
});
