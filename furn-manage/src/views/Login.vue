<template>
  <div class="login">
    <h1>登录</h1>
  <router-link :to="{name:'Home'}">首页</router-link>
  <router-link :to="{name:'Reg'}">注册</router-link>
  <van-cell-group>
    <van-field
      v-model="userName"
      label="用户名"
      placeholder="请输入用户名"
      required
    />
    <van-field
      v-model="passWord"
      label="密码"
      type="password"
      placeholder="请输入密码"
      required
    />
    <van-button size="large" @click="login" type="info">登录</van-button>
  </van-cell-group>
  </div>
</template>
<script>
  const axios = require('axios');
  import { loginIn } from "../utils/auth"
  export default {
    data(){
       return{
        userName:"",
        passWord:"",
       }
    },
    methods:{
      //登录按钮
      login:function(){
        axios({
          method:"post",
          url:'https://api.cat-shop.penkuoer.com/api/v1/auth/login',
          data:{
            userName:this.userName,
            password:this.passWord
          }
        })
        .then(function(data){
          console.log(data);
          if(data.data.code=="success"){
            alert("登录成功");
            loginIn("userName",this.userName);
            loginIn("token",data.data.token);
            this.$router.push({
              name:"Home"
            })
          }else if(data.data.message == "user not found"){
            alert("该用户尚未注册");
          }else{
            alert("用户密码错误");
          }
        }.bind(this))
        .catch(function(err){
          console.log(err);
        })
      },
      gitData(){

      }
    }
  }
</script>
