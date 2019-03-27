<template>
  <div class="login">
    <h1>登录</h1>
  <router-link :to="{name:'Home'}">首页</router-link>
  <router-link :to="{name:'Regis'}">注册</router-link>
  </div>
</template>
<script>
  import { loginIn } from '../utils/auth'
  export default {
  
  }
</script>
