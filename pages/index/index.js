Page({
  data: {
    userInfo: {avatarUrl:'/image/R-C.png',nickName:"Hello World"
  },
    hasUserInfo: false,
    canIUseGetUserProfile: false,
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {

    wx.getUserProfile({
      desc: '用于完成作业', 
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
})