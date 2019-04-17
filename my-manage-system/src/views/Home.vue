<template>
  <div>
    <el-row>
      <el-col :span="4">
        <Menu/>
      </el-col>
      <el-col :span="20">
        欢迎来到 xx 系统
      </el-col> 
    </el-row>
  </div>

</template>

<script>
import Menu from "@/components/menu"

export default {
  name: 'Home',
  components: {
    Menu
  }
}
</script>

