<template>
  <div> 
    <el-row>
      <el-col :span="isCollapse ? 1 : 4">
        <Menu :menuCollapse="isCollapse"/>
      </el-col>
      <el-col :span="isCollapse ? 23: 20">
        <div class="header">
          <img src="../assets/menu-open.png" @click="menuCollapse()" v-show="!isCollapse">
          <img src="../assets/menu-close.png" @click="menuCollapse()" v-show="isCollapse">
          <el-button class="login-out" @click="loginOut()">退出</el-button>
        </div>
      </el-col> 
    </el-row>
  </div>

</template>

<script>
import Menu from "@/components/Menu"

export default {
  name: 'Home',
  components: {
    Menu
  },
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    menuCollapse() {
      this.isCollapse = ! this.isCollapse
    },
    loginOut() {
      this.$router.push({ 
        path: '/' 
      })
    }
  }
}
</script>

<style lang="less">
.header {
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  box-shadow: 0px 0px 5px #888888;
  img {
    width: 25px;
    height: 25px;
    margin-top: 12px;
    margin-left: 15px;
    cursor: pointer;
  }
  .login-out {
    float: right;
    height: 30px;
    line-height: 0;
    margin-right: 30px;
    margin-top: 10px;
  }
}
</style>


