const innerAudioContext = wx.createInnerAudioContext()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options){
    innerAudioContext.src = 'cloud://music-1gmssxew6c2d4dfb.6d75-music-1gmssxew6c2d4dfb-1314937408/博饼起源.mp3'
    innerAudioContext.onPlay(() => {
      console.log('开始播放简介')
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
    },
   onShow(){
    innerAudioContext.play()
   },
  onUnload(){
    innerAudioContext.pause()
  },

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