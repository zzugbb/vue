<template>
  <div class="sms-template">
    <el-form ref="form" :model="form" label-width="60px" label-position="left">
      <el-form-item label="内容：" style="width:60%;position:relative">
        <el-input
          type="textarea"
          id="text"
          :autosize="{ minRows: 5 }"
          v-model="form.textContent"
          :readonly="form.readonly"
        ></el-input>
        <el-button style="position:absolute;right:-70px" type="" size="small"
          @click="handleClickEdit">{{form.readonly ? "编辑" : "保存"}}</el-button>
      </el-form-item>
    </el-form>
    <div style="margin-left:60px;margin-top:20px" v-show="!form.readonly">
      <el-tag
        v-for="tag in tags"
        :key="tag.id"
        :closable="tag.closable"
        style="margin-right:10px;cursor:pointer"
        @close="handleClickTag(tag)"
        @click="handleClickTag(tag)"
      >
        {{ tag.name }}
      </el-tag>
    </div>
    <div style="margin-left:60px;margin-top:30px">
      <el-button type="primary" size="small" @click="submit">应用</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmsTemplate",
  data() {
    return {
      form: {
        textLabel: "{$0}{$1}{$4}{$7}",
        textContent: "{服务器地址}{服务器IP}{级别}{原因}",
        readonly: true
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
  watch: {
    'form.textContent': function(val, oldVal) {
      console.log(val);
      for (let i = 0; i < this.tags.length; i++) {
        let tempContent = "{" + this.tags[i].name + "}";
        if (val.indexOf(tempContent) > -1) {
          this.tags[i].closable = true;
        } else {
          this.tags[i].closable = false;
        }
      }
    }
  },
  methods: {
    handleClickTag(tag) {
      if (tag.closable) { // 选中状态
        let tempContent = "{" + tag.name + "}";
        this.form.textContent = this.form.textContent.replace(tempContent, "");
      } else { // 未选中状态
        let tempContent = "{" + tag.name + "}";
        this.insertAtCursor(document.getElementById("text"), tempContent);
        this.form.textContent = document.getElementById("text").value;
        console.log(this.form.textContent);
      }
      tag.closable = !tag.closable;
    },
    //提交参数处理
    contentToLabel() {
      this.form.textLabel = this.form.textContent;
      for (let i = 0; i < this.tags.length; i++) {
        let tempContent = "{" + this.tags[i].name + "}";
        let tempLabel = "{$" + this.tags[i].id + "}";
        this.form.textLabel = this.form.textLabel.replace(tempContent, tempLabel);
      }
    },
    //点击编辑保存
    handleClickEdit() {
      if (!this.form.readonly) { //保存
        console.log(this.form.textContent) //一些校验
      }
      this.form.readonly = ! this.form.readonly;
    },
    submit() {
      this.contentToLabel();
      console.log(this.form.textContent);
      console.log(this.form.textLabel);
    },
    /**
     * 在textarea光标处插入内容
     * @param {*文本框对象} myField
     * @param {*要插入的值} myValue
     */
    insertAtCursor(myField, myValue) {
      if (document.selection) { // IE support
        myField.focus();
        let sel = document.selection.createRange();
        sel.text = myValue;
        sel.select();
      } else if (myField.selectionStart || myField.selectionStart == "0") { // MOZILLA/NETSCAPE support
        let startPos = myField.selectionStart;
        let endPos = myField.selectionEnd;
        // save scrollTop before insert
        let restoreTop = myField.scrollTop;
        myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);
        if (restoreTop > 0) {
          myField.scrollTop = restoreTop;
        }
        myField.focus();
        myField.selectionStart = startPos + myValue.length;
        myField.selectionEnd = startPos + myValue.length;
      } else {
        myField.value += myValue;
        myField.focus();
      }
    }
  }
};
</script>
