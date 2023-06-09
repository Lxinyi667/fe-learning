app.component('product-display',{
    template:`
        <div class="product-display">
            <div class="product-container">
                <div class="product-image" >
                    <img v-bind:src="image" />
                </div>
                <div class="product-info">
                    <h1>{{ title }}</h1>
                    <p>{{ sale }}</p>
                 
                    <div
                        v-for="(variant,index)  in variants" 
                        :key="variant.id" 
                        // @click="updateImage(variant.image)" 
                        @click="updatevariant(index)" 
                        class="color-circle"
                        :style="{ backgroundColor: variant.color }">
                      </div>
                    <h2>SIZE</h2>
                    <div v-for="(item, index) in list" :key="index">
                        {{ item }}
                    </div>
                    <span> Cart ( {{cart}} ) </span>

                    <button 
                        class="button"
                        :class="{disabledButton: !stock}"
                        :disabled="!stock" 
                        @click="addToCart">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
        `,
data(){
    return {
        // 状态数据
        product :'Socks',
        brand:"Vue Mastery",
        description:'A warm fuzzy pair of socks',
        image:'../1.Intro-to-Vue3/assets/images/socks_blue.jpg',
        url: "https://cn.vuejs.org/",
        inStock: false,
        stock: 10,
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants:[
            {
                id: 2234, color: 'green',
                name:'Green Socks',
                image:'../1.Intro-to-Vue3/assets/images/socks_green.jpg',
                // flag:true,
            },
            {
                id: 2235, color: 'blue',
                name:'Blue Socks',
                image:'../1.Intro-to-Vue3/assets/images/socks_blue.jpg',
                // flag:false,
            }
        ],
        sizes: ['s', 'm', 'l', 'xl'],
        cart: 0,
        selectedVariant:0,
       
    }
},
    // methods 是一些用来更改状态与触发更新的函数
    // 它们可以在模板中作为事件监听器绑定
methods:{
   
    addToCart() {
        this.cart += 1
    },
    removeToCart() {
        this.cart -= 1
    },
    updateImage(variantImage) {
        this.image = variantImage
    },
   
    },
    computed:{
        title() {
            return this.brand +" " + this.product;
        },
        image(){
            return this.variants[this.selectedVariant].image;
        },
        stock(){
            return this.variants[this.selectedVariant].quantity;
        },
        sale(){
            if(this.stock > 0){
                return this.brand + " "+ this.product + "is on sale";
            }
                return this.brand + " "+ this.product + "has sold out";
        },
        msg(){
            if(this.free === true){
                return "免费";
            }
            return "99.999";
        },
    },
});