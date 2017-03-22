// pages/my/enter.js
var app = getApp();
Page({
  data: {
    buildingArray: [],
    buildingIndex: 0,
    unitArray:[],
    unitIndex: 0,
    roomArray: [],
    roomIndex: 0
  },
  //选择器选好的值发送到显示界面
  changeBuilding: function(e) {
    console.log('当前选择的buildingindex:' + e.detail.value)
      this.setData({
        buildingIndex: e.detail.value
      }) 
  },
  changeUnit: function(e) {
    console.log('当前选择的unitindex:' + e.detail.value)
      this.setData({
        unitIndex: e.detail.value
      }) 
  },
  changeRoom: function(e) {
    console.log('当前选择的unitindex:' + e.detail.value)
      this.setData({
        roomIndex: e.detail.value
      }) 
  },
  onLoad:function(){
    // 页面初始化 options为页面跳转所带来的参数
    console.log('onLoad');
    var that = this;
    //定义几幢、几单元的临时数组，用来操作
    var currentBuildingArray=[];
    var currentUnitArray=[];
    var currentRoomArray=[];
    //添加几幢的数组
    for(var i = 1; i <= 12; i++){
      if(i < 10){
        i = "0"+i
      }else{
        i = i.toString();
      }
      currentBuildingArray.push(i);
      that.setData({
        buildingArray:currentBuildingArray
      })
    }
    //添加几单元的数组
    for(var k = 1; k <= 4; k++){
      k = "0" + k;
      console.log("k"+k)
      currentUnitArray.push(k);
      that.setData({
        unitArray:currentUnitArray
      })
    }
    //添加房间号的数组
    for(var n = 1; n <= 6; n++){
      var rooms = ["01","02"];
      var r;
      var m;
      for (r in rooms){
        m = n+rooms[r];
        currentRoomArray.push(m);
      }
      that.setData({
        roomArray:currentRoomArray
      })
    }
  },
  formSubmit: function(e) {
    e.detail.value.roomId = e.detail.value.buildingNumber+e.detail.value.unitNumber+e.detail.value.roomNumber
    console.log(e.detail.value);
    wx.setStorage({
      key:"users",
      data:e.detail.value
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
