// pages/second_level/notice/notice.js
var app = getApp()
Page({
  data:{
    userInfo: {}, 
    messages:{},
  },
  onLoad:function(){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(app.globalData.userInfo);
    console.log(app);
    var notice_messages = app.data.messages;
    var user_info = app.globalData.userInfo;
    this.setData({
        userInfo:user_info,
        messages:notice_messages
    });
    console.log(app.users);
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  // enterMessage:function(){
  //   wx.navigateTo({
  //     url: 'message/message'
  //   })
  // }
})