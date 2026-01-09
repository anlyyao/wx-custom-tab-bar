// custom-tab-bar/index.js
Component({
  data: {
    value: 0,
    list: [
      { value: 0, label: '首页', icon: 'home', url: '/pages/index/index' },
      { value: 1, label: '日志', icon: 'chat', url:  '/pages/logs/logs'},
    ],
  },

  methods: {
    switchTab(e) {
      const value = e.detail.value;
      wx.switchTab({
        url: this.data.list[value].url
      })
      this.setData({value})
    }
  }
})