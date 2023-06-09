const app = Vue.createApp({
    // data() 返回的属性将会成为响应式的状态
    // 并且暴露在 `this` 上
    data() {
      return {
        count: 0,
        // isLessZero:false,
        // isHighTen:false
        option:false,
        resColor:"grey",
      };
    },
    // methods 是一些用来更改状态与触发更新的函数
    // 它们可以在模板中作为事件监听器绑定
  methods: {
    decrease() {
      this.count--;
      if (this.count < 0) {
        this.resColor = "red";
        }
    },
    reset(){
      this.count=0;
      this.resColor = "grey";
    },
    increase(){
      this.count++;
      if (this.count > 10) {
        this.resColor = "green";
        }
    },
    

  }

})