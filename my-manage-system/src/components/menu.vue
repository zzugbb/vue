<template>
  <el-menu
    router
    default-active="/home/bill-list"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="menuCollapse"
    style="height:100vh; background-color:#545c64"
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
    <el-menu-item index="/home/bill-list" >
      <i class="fa fa-credit-card menu-icon" aria-hidden="true"></i>
      <span>账单列表</span>
    </el-menu-item>
    <el-menu-item index="/home/bill-add">
      <i class="fa fa-paypal menu-icon" aria-hidden="true"></i>
      <span slot="title">账单新增</span>
    </el-menu-item>
    <el-menu-item index="/home/my">
      <i class="fa fa-user-circle menu-icon" aria-hidden="true"></i>
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

.menu-icon {
  font-size: 18px;
  width: 20px;
  text-align: center;
  margin-right: 10px;
  vertical-align: middle;
}
</style>

