const app = Vue.createApp({
    data(){
        return {
            product:"Socks",
            brand:"Vue Mastery",
            author: {
                name: "John",
                books: ["Vue2-Advanced", "Vue3- Basic", "Vue4-Future"],
            },
            firstName:"张",
            lastName:"三",
            arr: [
                "❤  菠萝",
                "❤  树莓 ",
                "❤  草莓",
                "❤  蓝莓 ",
            ],
            sss: {
                boluo: '$15/斤，产自：新疆',
                shumei: '$20/斤，产自：四川',
                caomei:'$28/斤，产自：浙江',
                lanmei:"$30/斤，产自：南京",
            },
            list:[
                
                {
                    name:'商品1',
                    image:'../1.Intro-to-Vue3/assets/images/socks_blue.jpg',
                    details: ['50% cotton', '30% wool', '20% polyester'],
                    stock: 10,
                    sizes: ['s', 'm', 'l', 'xl'],
                    description:'A warm fuzzy pair of socks',
                    price:10
                },
                {
                    name:'商品1',
                    image:'../1.Intro-to-Vue3/assets/images/socks_green.jpg',
                    details: ['50% cotton', '30% wool', '20% polyester'],
                    stock: 10,
                    sizes: ['s', 'm', 'l', 'xl'],
                    description:'A warm fuzzy pair of socks',
                    price:10
                },
                {
                    name:'商品1',
                    image:'../1.Intro-to-Vue3/assets/images/socks_blue.jpg',
                    details: ['50% cotton', '30% wool', '20% polyester'],
                    stock: 10,
                    sizes: ['s', 'm', 'l', 'xl'],
                    description:'A warm fuzzy pair of socks',
                    price:10
                },
               
            ],
            isList: false,
            bills: [],
            // arr: [{
            //     name: '哈密瓜',
            //     age: '82年的哈密瓜',
            //     chandi:'新疆',
            // }
                
                
            // ],
            // sss: {
            //     ss1:"食品",
            //     ss2:"水果",
            //     ss3:"百货",
            //     ss4:"饰品",
            // },
            msg:[
                {name:"苹果1",price:4,num:0},
                {name:"苹果2",price:5,num:0},
                {name:"苹果3",price:6,num:0},
                {name:"苹果4",price:7,num:0},
            ]
        };
    },
    methods:{
        handle(){
            console.log("调用handle方法");
            return this.author.books.length > 2 ? "yes" : "No";
        },
        addCart() {
            this.cart++
        },
        changeDetail(e) {
           this.currentItem = this.list[e]
        },
        add(e) {
            this.bills.splice(0,0,this.list[e])
        }
    },
    computed:{
        title() {
            return this.brand +" " + this.product;
        },
        publishMsg(){
            return this.author.books.length >2  ? "yes" : "no";
        },
        fullName:{
            // getter
            get(){
                return this.firstName +"-"+this.lastName;
            },
            set(newValue){
                //结构赋值
                [this.firstName , this.lastName]= newValue.split("-");
            },
            total() {
                return this.bills.reduce((previous, current) => {
                    return previous + current.price
                }, 0);
            }
        },
        sum:function(){
            var sum=0;
            //循环遍历
            for (var i=0;i<this.msg.length;i++) {
                sum+=this.msg[i].price *this.msg[i].num;
                // 
            }
            return sum;

        }
    },
});