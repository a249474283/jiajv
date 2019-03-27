<template>
  <div class="regis">
    <h1>注册</h1>
      <router-link :to="{name:'Home'}">首页</router-link>
      <router-link :to="{name:'Login'}">登录</router-link>
        <van-cell-group>
          <div class="ts"></div>
          <van-field
            v-model="userName"
            label="用户名"
            placeholder="请输入用户名"
            @change="userIn"
            @focus="userFo"
            required
          />
          <div :class="{ts:'true',jg:usertjg,cg:usertcg}">{{usert}}</div>
         <van-field
            v-model="passWord"
            label="密码"
            placeholder="请输入密码"
            type="password"
            @input="wordIn"
            @focus="wordFo"
            required
          />
          <div :class="{ts:'true',jg:wordtjg,cg:wordtcg}">{{wordt}}</div>
         <van-field
            v-model="passWords"
            type="password"
            label="确认密码"
            placeholder="请再次输入密码"
            @input="wordsIn"
            @focus="wordsFo"
            required
          />
          <div :class="{ts:'true',jg:wordstjg,cg:wordstcg}">{{wordst}}</div>
          <van-button size="large" @click="reg" type="info">注册</van-button>
        </van-cell-group>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        userName:"",
        passWord:"",
        passWords:"",
        usert:" ",
        wordt:" ",
        wordst:" ",
        usertjg:0,
        usertcg:0,
        wordtjg:0,
        wordtcg:0,
        wordstjg:0,
        wordstcg:0,
        Name:0,
        Word:0,
        Words:0,
      }
    },
    methods:{
      //注册按钮
      reg:function(){
        if(!this.userName){
          this.usert = "请输入用户名"
        }
        if(!this.passWord){
          this.wordt = "请输入密码";
        }
        if(!this.passWords){
          this.wordst = "请再次输入密码";
        }
      },
      //用户名验证
      userFo:function(){
        this.usert = "请输入4~10位的字母，数字，_";
      },
      userIn:function(){
        var username = this.userName;
        if(username.length<4||username.length>10){
          this.usertjg = 1;
          this.usert = "用户名应在4~10位之间";
        }else{
          //调用接口检查用户名是否重复
        }
      },
      wordFo:function(){
        this.wordt = "请输入6~20位的字母和数字的组合"
      },
      wordIn:function(){
        var password = this.passWord;
        let rega=/\D/;
        if(password.length<6||password.length>20){
          this.wordtjg = 1;
          this.wordtcg = 0;
          this.wordt = "密码应在6~20位之间"
        }else if(!rega.test(password)){
          this.wordtjg = 1;
          this.wordtcg = 0;
          this.wordt = "密码不能为纯数字"
        }else{
          this.wordtcg = 1;
          this.wordtjg = 0;
          this.wordt = "密码可用";
          this.Word++;
        }
      },
      wordsFo:function(){
        this.wordst = "请再次输入密码"
      },
      wordsIn:function(){
        if(this.passWords==this.passWord){
          this.wordstcg = 1;
          this.wordst="密码一致";
        }else{
          this.wordstcg = 0;
          this.wordstjg = 1;
          this.wordst="两次输入的密码不一致";
        }
      },

    }
  }

</script>
<style>
  .ts{
    height:24px;
    color: #cecece;
    font-size: 12px;
    line-height: 24px;
  }
  .jg{
    color:#f00;
  }
  .cg{
    color:#0f0;
  }
</style>
