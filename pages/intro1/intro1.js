  var mydata =  require("../../utils/data");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isFold:false,
    showdata: '',
    list:'',
    quesList:'',
    id:'',
    listData: [
      { "code": "01", "text": "text1", "type": "type1" },
      { "code": "02", "text": "text2", "type": "type2" },
      { "code": "03", "text": "text3", "type": "type3" },
      { "code": "04", "text": "text4", "type": "type4" },
      { "code": "05", "text": "text5", "type": "type5" },
      { "code": "06", "text": "text6", "type": "type6" },
      { "code": "07", "text": "text7", "type": "type7" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      showdata: mydata.intro1Data(options.id),
      list: mydata.intro1Data(options.id).list,
      quesList: mydata.intro1Data(options.id).quesList,
      id: options.id
    })

   // console.log()
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
  showCont:function(){
    console.log("asda");
    this.setData({
      isFold: !this.isFold
    });
  },
  add_plan_bind:function(){
    var that = this;
    var id = that.data.id;
    if(id==''||id==null){
      id=1;
    }
    wx.navigateTo({
      url: '../healthnotify/healthnotify?id=' + id,
    })
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },
  kindToggleques:function(e){
    console.log("dasd");
    var id = e.currentTarget.id, quesList = this.data.quesList;
    for (var i = 0, len = quesList.length; i < len; ++i) {
      if (quesList[i].id == id) {
        quesList[i].open = !quesList[i].open
      } else {
        quesList[i].open = false
      }
    }
    this.setData({
      quesList: quesList
    });
  },
  showPlanTKbind:function(e){
    wx.navigateTo({
      url: '../intro2/intro2',
    })
  }
})