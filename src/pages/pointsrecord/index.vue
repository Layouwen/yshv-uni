<template>
  <view class="pointsrecord">
    <view class="item-wrapper" v-for="item in itemList" :key="item.id">
      <view class="title">{{ item.memo }}</view>
      <view class="number" :class="color(item) ? 'color' : ''">{{
        money(item)
      }}</view>
    </view>
  </view>
</template>

<script>
import request from '@/utils/request'
export default {
  data () {
    return {
      itemList: []
    }
  },
  methods: {
    async getItemList () {
      const { data } = await request.get({
        url: 'user/scorelog',
        header: {
          token: uni.getStorageSync('logininfo').token
        }
      })
      if (data.code !== 1) uni.showToast({ title: '请求失败', icon: 'none' })
      this.itemList = data.msg
    },
    color (item) {
      return item.after - item.before > 0
    },
    money (item) {
      const result = item.after - item.before
      return result > 0 ? `+${result}` : result
    }
  },
  onShow () {
    this.getItemList()
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/fn.scss";

.pointsrecord {
  height: 100vh;
  padding: 0 rpx(17) 0 rpx(22);
  overflow: auto;
  > .item-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: rpx(42) 0;
    border-bottom: rpx(1) solid #e3e3e3;
    > .title {
      font-size: rpx(28);
      font-weight: 500;
      color: #333;
    }
    > .number {
      font-size: rpx(28);
      font-weight: 500;
      color: #666;
      &.color {
        color: #b98a52;
      }
    }
  }
}
</style>
