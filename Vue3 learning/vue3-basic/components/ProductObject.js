app.component('product-object',{
    props:{
        myobject: {
            type: Object,
            default: {
                name: "aaaa"
            }
        }
    },
        template:`
        <div class="container">
            <h3>·Object商品详情</h3>
            <div class="tab-bar1">
            <ul>
                <li v-for="value in myobject">
                    {{ value }}
                </li>
            </ul>
            
            </div>
        </div>
        `,
        data(){
            return {

            }
        },
    });