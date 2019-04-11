// pages/third/third.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  navigateBackFirst(){
    var pages = getCurrentPages()
    console.log("页面栈："+pages)
    var first=pages[pages.length-3]
    first.setData({
      text:'third传回的消息'
    })

    wx.navigateBack({
      //delta页面数，与页面栈不是同一个
      delta: 2
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("third页面onLoad")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("third页面onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("third页面onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("third页面onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("third页面onUnload")
    
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

  }
})