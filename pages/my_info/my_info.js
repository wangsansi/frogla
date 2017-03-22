// pages/my_info/my_info.js
Page({
  data:{

  },
  onLoad:function(options){
    var that = this;
    // 页面初始化 options为页面跳转所带来的参数
    wx.getStorage({
      key: 'users',
      success: function(res) {
          console.log(res.data)
          that.setData({
            users:res.data
          })
          console.log(that.data.users)
      } 
    })

    wx.request({
      url: "https://84181068.qcloud.la",
      success: function(res) {
        console.log(res.data)
      }
    })
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