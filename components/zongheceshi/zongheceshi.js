// components/zongheceshi/zongheceshi.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    closePage1() {
      this.triggerEvent('closePopup1');  // 触发自定义事件
    },
  },
  onClick() {
    wx.navigateBack();
  },
})