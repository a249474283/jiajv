<template>
    <div class="list">

        <van-card
            v-for="item in listdata"
            :num="item.quantity"
            tag="hot"
            :price="item.price"
            :desc="item.descriptions"  
            :title="item.name"
            :thumb="'https://api.cat-shop.penkuoer.com'+item.coverImg"
            :origin-price="item.price*1.2"
            :key="item._id"
            @click="xiangqing(item._id)"
        >
            <div slot="footer">
               
                <van-button size="mini">
                    <van-icon name="shopping-cart" />
                </van-button>

            </div>
        </van-card>
    </div>
</template>
<script>
    const axios = require('axios');

    import { loginIn } from "../utils/auth"
    export default {
        mounted:function(){
            this.getData();
        },
        data(){
            return{
                listdata:{},
                imgUrl:"",
                id:"",
            }
        },
        methods:{
            getData(){
                // axios({
                //     method:"get",
                //     url:'https://api.cat-shop.penkuoer.com/api/v1/products',
                //     params:{
                //         per:10,
                //         page:2,
                //     }
                // })
                axios.get('https://api.cat-shop.penkuoer.com/api/v1/products',{params:{
                        per:10,
                        page:2,
                    }})
                .then(function(data){
                    this.listdata = data.data.products;
                    this.imgUrl = data.data.products.coverImg;
                    console.log(data);
                }.bind(this))
            },
            xiangqing(id){
                this.$router.push({
                    name: 'Detail',
                    params: {
                        id: id,
                    }
                })
            }
        }
    }
</script>
<style>
    .list{
        margin-top: 15%;
    }
</style>
