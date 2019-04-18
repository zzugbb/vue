<template>
  <div class="bill-add"> 
    <el-form :model="form" :rules="rules" ref="form" label-width="120px">
      <el-form-item label="费用产生时间" prop="time">
        <el-col :span="11">
          <el-date-picker type="datetime" placeholder="选择日期时间" v-model="form.time" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="费用具体数量" prop="money">
        <el-input-number v-model="form.money" :precision="2" :step="1"></el-input-number>
      </el-form-item>
      <el-form-item label="费用具体描述" prop="desc">
        <el-input v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { saveBill } from '@/request/api';

export default {
  name: 'BillAdd',
  data() {
      return {
        form: {
          time: '',
          money: 0,
          desc: ''
        },
        rules: {
          desc: [
            { required: true, message: '请输入费用描述', trigger: 'blur' }
          ],
          money: [
            { required: true, message: '请输入费数量', trigger: 'change' }
          ],
          time: [
            { type: 'date', required: true, message: '请选择日期时间', trigger: 'change' }
          ],
        }
      }
    },
    methods: {
      async saveBill(data) {
        let res = await saveBill(data);
        if (res._id) {
          this.resetForm('form');
          this.$message({
            message: '保存成功',
            type: 'success'
          });
        } 
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let result = {
              time: this.form.time,
              money: this.form.money,
              desc: this.form.desc
            }
            this.saveBill(result)
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
.bill-add {
  width: 600px;
  margin: 50px auto;
}
</style>


