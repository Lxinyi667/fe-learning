app.component('product-list',{
    props: {
		free: {
			type: Boolean,
			required: true,
		},
		products: {
			type: Array,
			required: true
		}
	},
	template: `
		<div class="list-item" v-for="(p,index) in products">
			<div class="item-left">
				<img :src="p.image" alt="">
			</div>
			<div class="item-right">
				<h1>{{p.product}}</h1>
				<span>{{p.onSale ? 'onsale' : 'sold out'}}</span><br>
				<!-- v-for="variant in p.variants"
				:key="variant.id" @mouseover="updateImage(variant.image)" 
				{backgroundColor:variant.color}-->
				<div v-for="variant in p.variants" 
				class="color-circle" :key="variant.id"  
				:style="{backgroundColor: variant.color}"></div>
				<div>
				<button class="button" @click="addToCart" :disabled="p.inventory<=0" :class="{disabledButton:p.inventory<=0}">add to cart</button>
				<button class="button" @click="minusToCart" :disabled="p.inventory<=0">remove to cart</button>
				</div>
			</div>
		</div>
	`,
	data() {
	},
	methods: {
		addToCart() {
			this.$emit("add-to-cart");
		},
		updateImage(image) {
			this.image = image;
		},
		minusToCart() {
			this.$emit("remove-to-cart");
		}
	},
	computed: {
		info() {
			if (this.free === true) {
				return '免费';
			}
			return '99.99￥';
		}
	},
});
