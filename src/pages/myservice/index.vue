<template>
  <view class="myservice-page">
    <view class="item" v-for="card in items" :key="card.id">
      <image class="item-icon" :src="card.image" />
      <view class="item-content">
        <text class="item-title">{{ card.title }}</text>
        <text class="time">有效期截止：{{ card.expiretime }}</text>
      </view>
      <button class="item-btn">{{ card.surplusday }}天</button>
    </view>
  </view>
</template>

<script>
import request from '@/utils/request'
export default {
  data () {
    return {
      items: []
    }
  },
  methods: {
    async getPayProductLog () {
      const { data: res } = await request.get({
        header: {
          token: uni.getStorageSync('logininfo').token
        },
        url: 'user/payproductlog'
      })
      if (res.code !== 1) {
        uni.showToast({ title: '请求失败', icon: 'none' })
        return
      }
      this.items = res.msg
    }
  },
  onShow () {
    this.getPayProductLog()
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/fn.scss";

.myservice-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: rpx(24) rpx(20);
  overflow: auto;
  background: #f6f6f8;
  > .item {
    display: flex;
    align-items: center;
    width: 100%;
    height: rpx(150);
    padding: 0 rpx(22) 0 rpx(35);
    background: #FFF;
    box-shadow: 0 rpx(5) rpx(15) 0 rgba(45, 47, 64, 0.05);
    border-radius: rpx(10);
    &:not(:first-child) {
      margin-top: rpx(25);
    }
    > .item-icon {
      width: rpx(110);
      height: rpx(110);
      margin-right: rpx(39);
      background: #FFF;
      border-radius: rpx(16);
    }
    > .item-content {
      display: flex;
      flex-direction: column;
      > .item-title {
        flex-grow: 1;
        font-size: rpx(28);
        font-weight: bold;
        color: #333;
      }
      > .time {
        font-size: rpx(24);
        font-weight: 500;
        color: #666;
      }
    }
    > .item-btn {
      width: rpx(105);
      height: rpx(54);
      line-height: rpx(54);
      padding: 0;
      font-size: rpx(26);
      font-weight: 500;
      color: #725420;
      background: linear-gradient(75deg, #FBE8C8 0%, #E5BE7B 100%);
      border-radius: rpx(10);
      &::after {
        display: none;
      }
    }
  }
}
</style>
