<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="menuCollapse"
    style="height:100vh;background-color:#545c64"
    >
    <el-menu-item style="height:120px;">
      <template>
        <div class="menu-user">
          <div class="logo-div">
            <img src="../assets/logo.png" class="logo"/>
            <span>后台系统</span>
          </div>
          <img src="../assets/avator.jpg" class="avator"/>
        </div>  
      </template>
    </el-menu-item>
    <el-menu-item index="1">
      <i class="el-icon-location"></i>
      <span>账单列表</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">账单新增</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">我的</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Menu",
  props: ['menuCollapse'],
  data() {
    return {
    }
  }
}
</script>

<style lang="less">

.menu-user {
  text-align: center;
  color: #fff;
  font-size: 25px;

  .logo {
    width: 30px;
    height: 30px;
    padding-right: 15px;
    vertical-align: middle;
  };

  .avator {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
}
</style>

