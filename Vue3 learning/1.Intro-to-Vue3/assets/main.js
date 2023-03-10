// 直接创建并立刻赋值
// const product ='Socks';
const app = Vue.createApp({
    // 键值对
    data(){
        return {
            // 状态数据
            product :'Socks',
            description:'A warm fuzzy pair of socks',
            image:'./images/socks_green.jpg',
            url:'https://cn.vuejs.org/',
            inStock:true,
            count:0,
            details:[
                {
                  
                    name:'Green Socks',
                    image1:'./images/socks_green.jpg',
                    flag:true,
                },
                {
                   
                    name:'Blue Socks',
                    image1:'./images/socks_blue.jpg',
                    flag:false,
                }
            ],
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
    methods:{
        changeShow(index){
            this.clouds[index].show =! this.clouds[index].show;
            console.log(this.clouds[index].show);
        }
    }
})