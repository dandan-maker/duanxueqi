Page({
  data: {
    question: '',
    messages: [],
    access_token: '',
    userInfo:''
  },

  updateQuestion(e) {
    this.setData({ question: e.detail.value });
  },
  getAccessToken(){
    wx.request({
      url: 'https://aip.baidubce.com/oauth/2.0/token',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        grant_type: 'client_credentials',
        client_id: 'BT05YDzNdNRVcLAL9pN3vWev',
        client_secret: 'GCBU2DFwMEM1L2iYxvZiFroc2HBn6MBN'
      },
      success: (res) => {
        this.setData({
          access_token: res.data.access_token
        });
      }
    })
  },
  callAI(){
    wx.request({
      url: 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/ernie_speed?access_token=' + this.data.access_token,
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      data: {
        system: '你是一名耳科专家，拥有丰富的医学知识，将回答病人的一些医学问题，同时对病人进行情绪疏导',
        messages: this.data.messages
      },
      success: (res) => {
        this.data.messages.push({ content: res.data.result, role: 'assistant' });
        this.setData({
          messages: this.data.messages,
          question: ''
        });
      }
    })
  },
  sendMessage() {
    if (!this.data.question) return;
    const message = { content: this.data.question, role: 'user' };
    this.data.messages.push(message);
    this.setData({
      messages: this.data.messages,
      question: ''
    });
    this.callAI();
  },
  onLoad: function(options){
      this.getAccessToken();
      let user = wx.getStorageSync('user')
    this.setData({
      userInfo: user
    })
  }
});
