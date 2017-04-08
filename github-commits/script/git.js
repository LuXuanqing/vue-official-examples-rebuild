var apiURL = 'https://api.github.com/repos/LuXuanqing/vue-official-examples-rebuild/commits?per%20page=5&sha='

new Vue({
  el: '#git',
  data: {
    branches: ['master', 'dev'],
    currentBranch: 'master',
    commits: null
  },
  created: function() {
    this.fetchData()
  },
  filters: {
    truncate: function(v) {
      var newline = v.indexOf('\n')
      if (newline > 0) {
        return v.slice(0, newline)
      } else {
        return v
      }
    },
    formatDate: function(v) {
      return v.replace(/T|Z/g, ' ')
    }
  },
  watch: {
    currentBranch: 'fetchData'
  },
  methods: {
    fetchData: function() {
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', apiURL + self.currentBranch)
      xhr.onload = function() {
        if (this.status == 200) {
          self.commits = JSON.parse(xhr.responseText)
        }
      }
      xhr.send()
    }
  }
})
