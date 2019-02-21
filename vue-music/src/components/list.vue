<template>
  <ul class="list">
    <li class="list-item" v-for="item in json" :key="item.sound.id">
      <router-link class="item-link" :to="{ path: 'detail', query: { 'id': item.sound.id } }">
        <!-- 图片 -->
        <div class="item-image-container">
          <img class="item-image" :src="item.sound.pic_500">
          <div :class="item.sound.is_hot == 1 ? 'fire-red' : (item.sound.is_hot == 3 ? 'fire-yellow' : 'fire-blue') "  class="my-icon-hot item-fire"></div>
        </div>
        <!-- 名字 -->
        <div class="item-name">{{item.sound.name}}</div>
      </router-link>
      <!-- 频道 -->
      <div class="item-channel">
        <a class="item-channel-value">{{item.sound.channel.name}}</a>
        <div class="item-channel-label">频道</div>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'myList',
  props: {
    json: Array
  }
}
</script>
<style>
.list {
  display: flex;
  flex-wrap: wrap;
}

.list-item {
  width: 44%;
  padding: 0 10px;
  margin-bottom: 8px;
}

.item-link {
  display: block;
}

.item-image-container {
  width: 100%;
  height: 175px;
  position: relative;
  overflow: hidden;
}  

.item-image {
  width: 100%;
  min-height: 175px;
}

.item-fire {
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  font-size: 16px;
  border-radius: 100%;
  background: #fff;
}

.fire-red {
  color: #ed3d57;
}

.fire-blue {
  color: #3a94f7;
}

.fire-yellow {
  color: #f3993e;
}

.item-name {
  width: 100%;
  color: #555;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-top: 8px;
}


.item-channel {
  display: flex;
  align-items: center;
  color: #999;
  font-size: 12px;
  margin-top: 5px;
}

.item-channel-value {
  max-width: 80%;
  width: 80%;
  color: #7dd97f;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
