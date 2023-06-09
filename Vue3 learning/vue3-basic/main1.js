const app = Vue.createApp({


	data() {
		return {
			cart: 0,
			detail: false,
			list: true,
			x: true,
			y: false,
			products: [{
					color: '#264BDD',
					attri: 'class',
					product: 'Vue Mastery Socks',
					description: 'A warm fuzzy pair of socks.',
					image: '../1.Intro-to-Vue3/assets/images/socks_blue.jpg',
					url: 'https://cn.vuejs.org/',
					count: 10,
					inStock: true,
					inventory: 5,
					onSale: true,
					disable: false,
					details: ['50% cotton', '30% wool', '20% polyester'],
					size: ['S', 'M', 'L', 'XL'],
					variants: [{
						id: 2234,
						color: 'blue',
						image: '../1.Intro-to-Vue3/assets/images/socks_blue.jpg'
					}, ]
				},
				{
					color: '#46BF3F',
					attri: 'class',
					product: 'Vue Mastery Socks',
					description: 'A warm fuzzy pair of socks.',
					image: '../1.Intro-to-Vue3/assets/images/socks_green.jpg',
					url: 'https://cn.vuejs.org/',
					count: 10,
					inStock: true,
					inventory: 0,
					onSale: false,
					disable: false,
					details: ['50% cotton', '30% wool', '20% polyester'],
					size: ['S', 'M', 'L', 'XL'],
					variants: [{
						id: 2234,
						color: 'green',
						image: '../1.Intro-to-Vue3/assets/images/socks_blue.jpg'
					}]
				},
				{
					color: '#F169DA',
					attri: 'class',
					product: 'Vue Mastery Socks',
					description: 'A warm fuzzy pair of socks.',
					image: '../1.Intro-to-Vue3/assets/images/socks_blue.jpg',
					url: 'https://cn.vuejs.org/',
					count: 10,
					inStock: true,
					inventory: 0,
					onSale: true,
					disable: false,
					details: ['50% cotton', '30% wool', '20% polyester'],
					size: ['S', 'M', 'L', 'XL'],
					variants: [{
						id: 2234,
						color: 'pink',
						image: '../1.Intro-to-Vue3/assets/images/socks_blue.jpg'
					}]
				}

			]
		}
	},
	methods: {
		updateCart() {
			this.cart++;
		},
		subCart() {
			if (this.cart > 0) {
				this.cart -= 1;
			}
		},
		showDetail() {
			this.detail = true;
			this.list = false;
			console.log(this.detail);
			console.log(this.list);
		},
		showList() {
			this.list = true;
			this.detail = false;
			console.log(this.detail);
			console.log(this.list);
		}
	}
})
