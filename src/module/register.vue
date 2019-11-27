<template id = "body">
  <div id="login">
    <div class="loginConbox">
      <div class="header">
        <!--<div class="logo">-->
        <!--<img src="../../assets/logo.png">-->
        <!--</div>-->
      </div>
      <div class="loginBox">
        <div class="loginCon">
          <p class="title">Anvy Lao管理后台</p>
          <el-card shadow="always" class="login-module" v-if="smdl">
            <div slot="header" class="clearfix formTitlt">
              <span>用户注册</span>
              <span class="titIconbox">
              <i class="iconfont xu-saomadenglu2 fa-lg iconcolor"></i>
              <i class="iconfont xu-saomadenglu01 el-icon--right fa-lg pointer" @click="smdl = !smdl"></i>
            </span>
            </div>
            <el-form :model="ruleForm" :rules="rules" status-icon label-width="100px" class="demo-ruleForm">
              <el-form-item>
                <el-input type="text" v-model="ruleForm.name" auto-complete="on" placeholder="请输入登录昵称"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input type="text" v-model="ruleForm.email" auto-complete="off" placeholder="请输入邮箱"></el-input>
              </el-form-item>

              <el-form-item prop="pass">
                <el-input type="password" v-model="ruleForm.pass" auto-complete="off"
                          placeholder="请输入登录密码"></el-input>
              </el-form-item>
              <el-form-item prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="确认密码"></el-input>
            </el-form-item>
              <el-form-item>
                <el-button class="subBtn" type="primary" @click="submitForm">登录</el-button>
              </el-form-item>
              <p class="smalltxt">
                <router-link class="a" to="#">忘记密码</router-link>
                <router-link class="a" to="#">忘记会员名</router-link>
                <router-link class="a" to="#">免费注册</router-link>
              </p>
            </el-form>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
// import {Message} from "element-ui";
export default {
   open() {
        this.$messsage('这是一条消息提示');
        },
  data () {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };

    return {
      smdl: true,
      ruleForm: {
          name: '',
          email: '',
          pass: '',
          checkPass: ''
        },
      rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
    }
  },
  
  methods: {
   
     submitForm:function(data){
      this.$http.post('http://localhost:8080/user/user/login',this.loginForm)
      .then(function(res){
        console.log(res)
        if(res.data.code != 0){
          this.$message("登录验证失败！")
        } else {  
          this.$message("登录成功！")
          this.$router.push('/container')
        }
        
      })
    }
  }
}
</script>
<style lang="scss">
  #login {
    width: 100%;
    height: 100%;
    background-color: #0d6ff0;
    .loginConbox{
      height:100%;
      background: #2d3a4b;
    }
    .header {
      height: 60px;
      position: relative;
      background: #2d3a4b;
      /*border-bottom: 1px solid rgba(255, 255, 255, 0.3);*/
      .logo{
        margin-left: 30px;
        width: 500px;
        float: left;
        height: 40px;
        padding-top: 10px;
        img{
          height: 100%;
        }
      }
    }
    .loginBox {
      .iconcolor {
        color: #409EFF;
      }
      padding: 74px 0 118px;
      .loginCon {
        width: 990px;
        margin: auto;
        position: relative;
        height: 1000px;
        .el-card__header {
          border-bottom: 0px;
        }
        .title{
          font-size: 36px;
          font-weight: 600;
          color: #ffffff;
          width: 500px;
          float: left;
          margin-top: 0px;
          &:first-child{
            font-size: 34px;
            margin-top: 50px;
            margin-bottom: 30px;
          }
        }
        .login-module {
          width: 380px;
          height: 450px;
          margin-top: 60px;
          border: none;
          position: absolute;
          right: 0;
          .formTitlt {
            font-size: 18px;
            font-weight: 400;
            .titIconbox {
              float: right;
              .pointer {
                cursor: pointer;
              }
            }
          }
          .smalltxt {
            text-align: right;
            .a {
              text-decoration: none;
              color: #999999;
              font-size: 12px;
              margin-left: 8px;
            }
          }
        }
        .el-form-item__content {
          margin-left: 0px !important;
          .subBtn {
            width: 100%;
          }
        }
      }
      .el-input__inner, .el-button, .el-card, .el-message {
        border-radius: 0px !important;
      }
      .el-form-item__content .ico {
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 999;
        width: 40px;
        height: 39px;
        text-align: center;
        border-right: 1px solid #ccc;
      }
      .ewmbox {
        width: 100%;
        height: 240px;
        margin-top: -25px;
        .ewm {
          width: 140px;
          height: 140px;
          margin: 20px auto;
          p {
            font-size: 12px;
            padding-left: 40px;
            margin: 0;
          }
        }
        .ewmicon {
          width: 140px;
          margin: 20px auto 0;
          .iconfont {
            float: left;
          }
          p {
            font-size: 12px;
            padding-left: 40px;
            margin: 0;
          }
        }
      }
    }
  }
</style>