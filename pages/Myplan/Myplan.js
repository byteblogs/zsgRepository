// pages/Myplan/Myplan.js
const main = require('../../controllers/mainController.js').controller

var GetList = function (_this,data) {
  var listData = _this.data.listData;
  for(var i=0;i<data.length;i++){
    listData.push(data[i]);
  }
  console.log(listData);
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    var _this = this;
    main.getListData('baimao','1','2').then(d => _this.setData({ listData: d }))
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
       console.log("asda");
       wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //console.log("页面上拉触底事件的处理函数");
    var _this = this;    
    var listData = _this.data.listData;
    var currentPage=2;
    var totaData;
    main.getListData('baimao', currentPage, '2').then(d => {
      totaData = d.totalCount;
      console.log(d.data.length);
      if (listData.data.length < totaData){
        for (var i = 0; i < d.data.length; i++) {
          listData.data.push(d.data[i]);
        }
      }
    
      console.log("2222222222"+listData);
      _this.setData({ listData: listData });
     
      if (d.totalCount == currentPage){
        wx.showToast({
          title: '没有数据了',
        })
      }
    })

    currentPage++;
   
    if (totaData == currentPage){

    }



  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})

