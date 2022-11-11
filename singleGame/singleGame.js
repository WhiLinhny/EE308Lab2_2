const innerAudioContext = wx.createInnerAudioContext()
const backAudioContent =wx.createInnerAudioContext()
Page({
  data: {
    src:'',
    resultList: [],
    rank: "", //判定的结果
    img: [],
    // 骰子图片地址
    dices: [
      '../image/playDice.gif',
      '../image/dice1.png',
      '../image/dice2.png',
      '../image/dice3.png',
      '../image/dice4.png',
      '../image/dice5.png',
      '../image/dice6.png',
    ],

    //博饼结果
    dicelist: [],

    result: {
      result: {
        name: '一秀',
        score: 0
      }
    }
  },

  click() {
    console.log("点击投掷")
    innerAudioContext.src = 'cloud://music-1gmssxew6c2d4dfb.6d75-music-1gmssxew6c2d4dfb-1314937408/rollingdice.mp3'
    this.setData({
      img: "/image/playDice.gif",
      dicelist: [],
      rank: ""
    })
    innerAudioContext.play()
    setTimeout(() => {
      this.setData({
        img: ""
      })
      this.result()
    }, 2000)
  },

  random(min, max) { //生成随机数
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  result() {
    var list = [];
    var listsrc = [];
    var one = 0; //统计投掷结果
    var two = 0;
    var three = 0;
    var four = 0;
    var five = 0;
    var six = 0;
    var score=0;
    for (var i = 0; i < 6; i++) {
      var t = this.random(1, 6);
      list.push(t);
      if (t == 1) one++;
      if (t == 2) two++;
      if (t == 3) three++;
      if (t == 4) four++;
      if (t == 5) five++;
      if (t == 6) six++;
    }
    this.setData({
      resultList: list
    })
    for (var i = 0; i < 6; i++) {
      var dicesrc = "/image/dice" + this.data.resultList[i] + ".png"
      listsrc.push(dicesrc)
    }
    this.setData({
      dicelist: listsrc,
    })
    var flag = 0;
    if (one == 1 && two == 1 && three == 1 && four == 1 && five == 1 && six == 1) {
      this.setData({
        rank: "恭喜你博中：对堂！",
      })
      flag = 1
    } else {
      if (four == 1) {
        this.setData({
          rank: "恭喜你博中：一秀！",
        })
        flag = 1
      }
      if (four == 2) {
        this.setData({
          rank: "恭喜你博中：二举！",
        })
        flag = 1
      }
      if (four == 3) {
        this.setData({
          rank: "恭喜你博中：三红！",
        })
        flag = 1
      }
      if (four == 4) {
        if (one == 2) {
          this.setData({
            rank: "恭喜你博中：状元插金花！",
          })
          flag = 1
        } else {
          this.setData({
            rank: "恭喜你博中：状元！",
          })
          flag = 1
        }
      }
      if (four == 6) {
        this.setData({
          rank: "恭喜你博中：六杯红！",
        })
        flag = 1
      }
      if (one==4||two==4||three == 4||five==4||six==4) {
        this.setData({
          rank: "恭喜你博中：四进！",
        })
        flag = 1
      }
      if (one==5||two==5||three == 5||five==5||six==5) {
        this.setData({
          rank: "恭喜你博中：五子登科！",
        })
        flag = 1
      }
      if (six == 6) {
        this.setData({
          rank: "恭喜你博中：六杯黑！",
        })
        flag = 1
      }
      if(one==6){
        this.setData({
          rank:"恭喜你博中：遍地锦！"
        })
      }
    }
    if (flag == 0) {
      this.setData({
        rank: "没有博中，再接再厉哦",
      })
    }
    console.log( this.data.rank)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

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