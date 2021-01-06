<template>
  <view class='index-page'>
    <view class='user-wrapper' />
    <view class='top'>
      <u-swiper class='swiper' interval='3000' img-mode='scaleToFill' :list='list'></u-swiper>
    </view>
    <view class='tab-wrapper'>
      <block v-for='(tab, index) in tabsList' :key='index'>
        <view class='tab' :class='tabActive === index ? "active" : ""' @click='onChangeTab(index)'>{{ tab }}</view>
      </block>
    </view>
    <block v-for="(content, index) in contents" :key="index">
      <view class='item-wrapper' v-show="tabActive === index">
        <view class='item'>
          <image class='item-icon' src='/static/images/tengxun.png' />
          <text class='item-title'>腾讯视频</text>
          <button class='item-btn'>低至{{ index }}元起</button>
        </view>
        <view class='item'>
          <image class='item-icon' src='/static/images/aiqiyi.png' />
          <text class='item-title'>爱奇艺</text>
          <button class='item-btn'>查看全部套餐</button>
        </view>
        <view class='item'>
          <image class='item-icon' src='/static/images/youku.png' />
          <text class='item-title'>优酷</text>
          <button class='item-btn'>查看全部套餐</button>
        </view>
      </view>
    </block>
  </view>
</template>

<script>
export default {
  data () {
    return {
      list: [
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa4.att.hudong.com%2F27%2F67%2F01300000921826141299672233506.jpg&refer=http%3A%2F%2Fa4.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612432022&t=0b05f3910384274c525037b8802423c5',
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa2.att.hudong.com%2F27%2F81%2F01200000194677136358818023076.jpg&refer=http%3A%2F%2Fa2.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612432022&t=415820e45c02a5577db3d3da7d5b0d8a'
      ],
      contents: [1, 2, 3],
      tabsList: ['影视会员', '音频会员', '阅读会员'],
      tabActive: 0
    }
  },
  onLoad () { },
  methods: {
    onChangeTab (index) {
      this.tabActive = index
    }
  }
}
</script>

<style lang='scss' scoped>
@import "~@/assets/styles/fn.scss";

.index-page {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-bottom: rpx(200);
  background: #f6f6f8;
  > .user-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -0;
    width: rpx(750);
    height: rpx(176);
    background: linear-gradient(148deg, #2D2E30, #2D2E30);
  }
  > .top {
    position: relative;
    z-index: 0;
    width: rpx(710);
    height: rpx(318);
    background: #443E57;
    box-shadow: 0 rpx(5) rpx(15) 0 rgba(45, 47, 64, 0.05);
    border-radius: rpx(10);
    > .swiper {
      height: 100%;
    }
  }
  > .tab-wrapper {
    display: flex;
    width: rpx(710);
    margin: rpx(28) 0 rpx(22) 0;
    border: rpx(2) solid #E5BE7B;
    border-radius: rpx(10);
    > .tab {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 33.3333%;
      padding: rpx(22) 0;
      font-size: rpx(32);
      font-weight: bold;
      color: #725420;
      &:nth-child(2) {
        border-left: #E5BE7B rpx(2) solid;
        border-right: #E5BE7B rpx(2) solid;
      }
      &.active {
        background: linear-gradient(-42deg, #F0D7A6, #E5BE7B);
      }
    }
  }
  > .item-wrapper {
    > .item {
      display: flex;
      align-items: center;
      width: rpx(710);
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
        //width: rpx(90);
        //height: rpx(90);
        margin-right: rpx(39);
        background: #FFF;
        //box-shadow: 0 rpx(8) rpx(15) 0 rgba(16, 171, 242, 0.21);
        border-radius: rpx(16);
      }
      > .item-title {
        flex-grow: 1;
        font-size: rpx(34);
        font-weight: bold;
        color: #333;
      }
      > .item-btn {
        width: rpx(202);
        height: rpx(68);
        line-height: rpx(68);
        padding: 0;
        font-size: rpx(28);
        font-weight: 500;
        color: #4D321B;
        background: linear-gradient(75deg, #FBE8C8 0%, #E5BE7B 100%);
        border-radius: rpx(10);
        &::after {
          display: none;
        }
      }
    }
  }
}
</style>

<style lang='scss'>
.index-page {
  > .top {
    .u-swiper-wrap {
      height: 100%;
      swiper {
        height: 100% !important;
      }
    }
  }
}
</style>
