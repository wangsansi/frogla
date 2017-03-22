// pages/second_level/notice/message/message.js
var app = getApp()
Page({
  data:{
    current_message:{}
  },
  onLoad:function(options){
    console.log(options); 
    var notice_messages = app.data.messages;
    var i;
    
    console.log(notice_messages);
    //页面初始化 options为页面跳转所带来的参数
    for(i = 0;i < notice_messages.length;i++){
      if(notice_messages[i].id == options.id){
        this.setData({
          current_message:notice_messages[i]
        })
      }
    } 
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
  }
})