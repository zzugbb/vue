<template>
  <div class="sms-template">
    <el-form ref="form" :model="form" label-width="60px" label-position="left">
      <el-form-item label="内容：" style="width:60%">
        <el-input type='textarea' :autosize="{ minRows: 3 }" v-model="form.content"></el-input>
      </el-form-item>
    </el-form>
    <div style="margin-left:60px;margin-top:20px">
      <el-tag v-for="tag in tags" :key="tag.id" :closable="tag.closable" style="margin-right:10px;cursor:pointer"
        @close="handleClickTag(tag)" @click="handleClickTag(tag)">
        {{tag.name}}
      </el-tag>
    </div>  
    <div style="margin-left:60px;margin-top:30px">
      <el-button type="primary" size="small">应用</el-button>
    </div>  
  </div>  
</template>

<script>
export default {
  name: "SmsTemplate",
  data() {
    return {
      form: {
        content: "[{服务器地址}][{服务器IP}][{级别}][{原因}]"
      },
      tags: [
        { name: "服务器地址", id: 0, closable: true },
        { name: "服务器IP", id: 1, closable: true },
        { name: "分类", id: 2, closable: false },
        { name: "名称", id: 3, closable: false },
        { name: "级别", id: 4, closable: true },
        { name: "时间", id: 5, closable: false },
        { name: "备注", id: 6, closable: false },
        { name: "原因", id: 7, closable: true },
        { name: "类型", id: 8, closable: false },
        { name: "建议", id: 9, closable: false }
      ]
    };
  },
  methods: {
    handleClickTag(tag) {
      if (tag.closable) { //选中状态
        let tempStr = "{" + tag.name + "}"
        this.form.content = this.form.content.replace(tempStr, "")
      } else { //未选中状态

      }
      tag.closable = !tag.closable;
    }
  }
};
</script>
