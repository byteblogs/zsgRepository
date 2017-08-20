const main = require('../../controllers/mainController.js').controller

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bindKeyInput:'',
    result:'',
    result_id:'',
    listData:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.login({
      success: function (res) {
        console.log(res);
        if (res.code) {
          //发起网络请求
          var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=wx2e87fb865f14d5fb&secret=66bee7d94ef69c1c7dd55276149585dc&js_code=' + res.code+'&grant_type=authorization_code';
          wx.request({
            url: url,
            data: {
              code: res.code
            },
            success:function(res){
              console.log(res);
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  formSubmit: function (e) {
    var _this = this;
    main.insertData(e.detail.value.username, e.detail.value.idcard).then(d => _this.setData({ listData: d }));
    console.log('form发生了submit事件，携带数据为：', e.detail.value.username);
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  bindKeyInput:function(e){
 
    var regLowerCase = new RegExp('[\u4E00-\u9FA5]{2,4}', 'g');
    var rsLowerCase = regLowerCase.exec(e.detail.value);
    console.log(e.detail.value);
    console.log(rsLowerCase);
    if (e.detail.value == null || e.detail.value ==''){
      this.setData({
        result: '不能为空'
      })
    }else if (rsLowerCase==null) {
      this.setData({
        result: '您输入不正确,请输入中文'
      })
    }else{
      this.setData({
        result: ''
      })
    }
  },
  bindIdcardInput:function(e){
    var regLowerCase = new RegExp('[\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)]', 'g');
    var rsLowerCase = regLowerCase.exec(e.detail.value);
    console.log(rsLowerCase);
    if (e.detail.value == null || e.detail.value == '') {
      this.setData({
        result_id: '不能为空'
      })
    } else if (rsLowerCase == null) {
      this.setData({
        result_id: '您输入不正确,请输入正确的身份证号码'
      })
    } else {
      this.setData({
        result_id: ''
      })
    }
  }
})