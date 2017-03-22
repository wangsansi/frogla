// pages/post/post.js
var app = getApp();
Page({
  data:{
    _num: 1,
    myExpresses:[]
  },
  onLoad:function(options){
    //拿到用户的信息存到页面data里，待会拿来对expresses的信息做筛选
    var that = this;
    wx.getStorage({
      key: 'users',
      success: function(res) {
        that.setData({
          users:res.data
        })
      } 
    })
    //拿缓存数据里的expresses数据，拿成功后和用户roomId对比，筛选结果写入data
    wx.getStorage({
      key: 'expresses',
      success: function(res) {
        var getExpressesList = res.data
        var expressesList = [];
        for(var i = 0;i < getExpressesList.length;i++){
          var everyExpress = getExpressesList[i];
          //开始筛选
          if(everyExpress.roomId==that.data.users.roomId){
            //发送到data
            expressesList.push(everyExpress)
          }
        }
        that.setData({
          myExpresses:expressesList
        })   
      }
    });
  },
  onReady:function(){ 

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
  change:function(e){
    var currentDataNum = e.currentTarget.dataset.num;    
    this.setData({
      _num: currentDataNum
    })
  },
  signFor:function(e){
    var that = this;
    //改data里的数据
    var my_expresses = this.data.myExpresses;
    for(var i = 0;i < my_expresses.length;i++){
      if(my_expresses[i].id == e.currentTarget.dataset.id){
        var sign_for = my_expresses.splice(i,1);
        sign_for[0].state = true;
        my_expresses.push(sign_for[0]);
      }
    };
    that.setData({
      myExpresses:my_expresses
    })
    //改缓存的数据
    
  }
})