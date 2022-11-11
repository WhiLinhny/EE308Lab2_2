const innerAudioContext = wx.createInnerAudioContext()

Page({
  data: {
    src: '',
  },

   onLoad:function(options){
  innerAudioContext.autoplay = true
  innerAudioContext.src = 'cloud://music-1gmssxew6c2d4dfb.6d75-music-1gmssxew6c2d4dfb-1314937408/北陂孤雁 - 打上花火.mp3'
  innerAudioContext.onPlay(() => {
    console.log('开始播放')
  })
  innerAudioContext.onError((res) => {
    console.log(res.errMsg)
    console.log(res.errCode)
  })
  },
 onShow(){
  innerAudioContext.play()
 },
 onHide() {
    innerAudioContext.pause()
},
audioPlay: function () {
  innerAudioContext.play()
},
audioPause:function(){
  innerAudioContext.pause()
},
audioStop:function(){
  innerAudioContext.stop()
},


  jump() {
    wx.navigateTo({
      url: '../load/load',
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
 

  /**
   * 生命周期函数--监听页面隐藏
   */
 



  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})