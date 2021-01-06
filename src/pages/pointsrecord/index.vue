<template>
  <view class='pointsrecord'>
    <view class='item-wrapper' v-for="item in itemList" :key="item.id">
      <view class="title">{{ item.title }}</view>
      <view class="number" :class="color(item.number) ? 'color' : ''">{{ item.number }}</view>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      // mock
      itemList: [
        {
          id: 0,
          title: '1个月会员',
          number: '-300'
        },
        {
          id: 1,
          title: '关注公众号',
          number: '+32'
        },
        {
          id: 2,
          title: 'G5MI',
          number: '+231'
        }
      ]
    }
  },
  methods: {
    color (number) {
      return parseInt(number) > 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/fn.scss";

.pointsrecord {
  padding: 0 rpx(17) 0 rpx(22);
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
        color: #B98A52;
      }
    }
  }
}
</style>
