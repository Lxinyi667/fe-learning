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
            inventory:100
        }
    }
})