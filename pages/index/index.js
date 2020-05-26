
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    today: '',//当天日期
    image: '/pages/image/111.jpg',//背景图片
    desArr: []//数据源数组
  },
  //Zha: 取得时间日期信息
  getNowFormatDate() {
    //获取当天日期
    var date = new Date();
    var seperator1 = "-";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
    return currentdate;
  },
  //Zha: 点击进入添加note的详细界面
  newBtnDown() {
    wx.navigateTo({
      url: '../Note/Note'
    })
  },

  onLoad: function (options) {
    //-监听页面加载
    //获取缓存内容
    this.setData({
      desArr: wx.getStorageSync('oldText')
    })
    if (this.data.desArr == null && this.data.desArr == '') {
      //如果没有缓存则为空
      this.setData({
        desArr: []
      })
    }
    //获取当天日期
    var day = this.getNowFormatDate()
    this.setData({
      today: day
    })
  },
  onShow: function () {
    // 生命周期函数--监听页面显示   
    //获取当前缓存
    var arrayA = wx.getStorageSync('oldText');
    var isChange = wx.getStorageSync('isChange');
    if (arrayA.length != this.data.desArr.length) {
      //如果数量改变从新赋值
      this.setData({
        desArr: arrayA
      })
    } else if (isChange == 1) {
      wx.setStorageSync('isChange', 0);
      this.setData({
        desArr: arrayA
      })
    }
  },
})