//index.js
//获取应用实例
var app = getApp()
Page({ 
  data: {
    imgUrls: [
      '../../images/slider_1.jpeg',
      '../../images/slider_2.jpeg',
      '../../images/slider_3.jpeg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  post: function() {
    wx.navigateTo({
      url: '../second_level/post/post'
    })
  },
  notice: function() {
    wx.navigateTo({
      url: '../second_level/notice/notice'
    })
  },
  repairs: function() {
    wx.navigateTo({
      url: '../second_level/repairs/repairs'
    })
  },
  post: function() {
    wx.navigateTo({
      url: '../second_level/post/post'
    })
  },
  pay: function() {
    wx.navigateTo({
      url: '../second_level/pay/pay'
    })
  },
  suggest: function() {
    wx.navigateTo({
      url: '../second_level/suggest/suggest'
    })
  },
  visitor: function() {
    wx.navigateTo({
      url: '../second_level/visitor/visitor'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  tapName: function(event) {
    console.log(event)
  }
})

