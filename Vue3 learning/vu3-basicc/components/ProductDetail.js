app.component("product-detail", {
	props: {
		p: {
			type: Object,
			required: true
		}
	},
	template: `
		<div class="detail-item">
			<img :src="p.image" alt="">
			<button class="button" @click="addToCart" :disabled="p.inventory<=0" 
			:class="{disabledButton:p.inventory<=0}">
				add to cart
			</button>
			<div class="item-bottom" :style="{backgroundColor:p.color}">{{p.color}}</div>
		</div>
	`,
	methods:{
		addToCart(){
			this.$emit("add-to-cart");
		}
	}
});