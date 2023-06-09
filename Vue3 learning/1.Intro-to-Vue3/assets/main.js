// 直接创建并立刻赋值
// const product ='Socks';
const app = Vue.createApp({
    // 键值对
        //data() 返回的属性将会成为响应式的状态
        //并且暴露在 `this` 上
    data(){
        return {
            // 状态数据
            product :'Socks',
            description:'A warm fuzzy pair of socks',
            image:'./images/socks_blue.jpg',
            url: "https://cn.vuejs.org/",
            inStock: false,
            stock: 10,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants:[
                {
                    id: 2234, color: 'green',
                    name:'Green Socks',
                    image:'./images/socks_green.jpg',
                    // flag:true,
                },
                {
                    id: 2235, color: 'blue',
                    name:'Blue Socks',
                    image:'./images/socks_blue.jpg',
                    // flag:false,
                }
            ],
            sizes: ['s', 'm', 'l', 'xl'],
            cart: 0,
            clouds:[
                {
                    imageP:'./images/SpringBoot.jpeg',
                    imageT:'./images/tiao.png',
                    imageL:'./images/lock.png',
                    show:false,
                    imageH:'./images/head.jpg',
                    tname:'许莫淇',
                    cname:'后端工程化开发',
                    class:'软件2242 Web2班',
                    flag:false,
                },
                {
                    imageP:'./images/Vue3.jpg',
                    imageT:'./images/tiao.png',
                    imageL:'./images/lock.png',
                    show:false,
                    imageH:'./images/head.jpg',
                    tname:'许莫淇',
                    cname:'前端工程化开发',
                    class:'软件2242 Web2班',
                    flag:false,
                },
                {
                    imageP:'./images/Web.jpeg',
                    imageT:'./images/tiao.png',
                    imageL:'./images/lock.png',
                    // show:false,
                    imageH:'./images/head.jpg',
                    tname:'许莫淇',
                    cname:'Web应用开发',
                    class:'软件2242 Web2班',
                    flag:true,
                }
            ]
        }
    },
        // methods 是一些用来更改状态与触发更新的函数
        // 它们可以在模板中作为事件监听器绑定
    methods:{
        changeShow(index){
            // 图片的移进移出改变show的值
            this.clouds[index].show =! this.clouds[index].show;
            console.log(this.clouds[index].show);
        },
        addToCart() {
            this.cart += 1
        },
        removeToCart() {
            this.cart -= 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})