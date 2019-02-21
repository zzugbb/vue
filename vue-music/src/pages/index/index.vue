<template>
  <div id="index">
    <!-- banner -->
    <myBanner></myBanner> 
    <!--推荐-->
    <div class="recommend">
      <div class="recommen-title">每日推荐</div> 
      <!-- 列表 -->
      <myList :json='recommentJson'></myList>
    </div>
  </div>
</template>

<script>
import myBanner from '@/components/banner'
import myList from '@/components/list'
import { request } from '@/utils/request'

export default {
  name: 'index',
  components: {
    myBanner,
    myList
  },
  data() {
    return {
      recommentJson: [],
    }
  },
  mounted() {
    this.getRecommentData()
  },
  methods: {
    getRecommentData() {
      const _this = this;
      this.$indicator.open()
      request(`http://localhost:8080/list`).then(function(res) {
        _this.recommentJson = res.data
        _this.$indicator.close()
      })
    },
  }
}
</script>

<style>
#index {
  position: relative;
  width: 100%;
  background: #fff; 
}

.recommend {
  width: 100%;
  position: relative;
}

.recommen-title {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 26px;
  color: #639e5e;
  font-size: 12px;
  margin: 20px auto;
  border-radius: 13px;
  background-color: #d6ffd6;
}

</style>
