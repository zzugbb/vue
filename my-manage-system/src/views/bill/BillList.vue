<template>
  <el-table
    :data="tableData"
    stripe
    border
    :default-sort = "{prop: 'money', order: 'descending'}"
    style="width: 100%">
    <el-table-column
      prop="time"
      label="日期"
      sortable
      width="200">
    </el-table-column>
    <el-table-column
      prop="money"
      label="金额"
      sortable
      width="200">
    </el-table-column>
    <el-table-column
      prop="desc"
      label="描述">
    </el-table-column>
  </el-table>
</template>

<script>
import {getBills} from '@/request/api';
import {convertUTCTimeToLocalTime} from '@/utils/timeFormat';

export default {
  name: "BillList",
  mounted() {
    this.getBills();
  },
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    async getBills() {
      let res = await getBills();
      for(var i = 0 ; i < res.length; i++) {
        res[i].time = convertUTCTimeToLocalTime(res[i].time)
      }
      this.tableData = res;
      console.log(res)
    }
  }
}
</script>