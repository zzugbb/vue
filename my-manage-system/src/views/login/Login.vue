<template>
  <div class="login">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="50px" @submit.native.prevent>
      <el-form-item label="账号" prop="account">
        <el-input v-model="loginForm.account" placeholder="admin"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" type="password" placeholder="000000"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')" native-type="submit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {login} from '@/request/api';

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    async login(data) {
      let res = await login(data);
      if (res.length > 0) {
        this.$router.push({ 
          path: 'home' 
        })
      } else {
        this.$message.error('账号或密码错误！');
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let result = {
            account: this.loginForm.account,
            password: this.loginForm.password
          }
          this.login(result);
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  .el-form {
    border: 2px solid #ddd;
    border-radius: 5px;
    padding: 70px;
  }
  .el-form-item__content {
    width: 300px;
    .el-button--primary {
      width: 100%;
    }
  }
}
</style>