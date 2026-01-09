Page({
  data: {
    logs: []
  },
  onShow () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        value: 1
      })
    }
  }
})
