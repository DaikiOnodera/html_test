function initial(){
  new Vue({
    el: '#msg',
    data: {
      message: 'this is Vue.js sample!',
      text1: ''
    },
    methods: {
      doAction: function(){
        var str = this.text1;
        this.message = 'you typed: <span style="color:white; background:red">' + str + '</span>';
      }
    }
  })
}
