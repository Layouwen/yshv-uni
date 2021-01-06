<template>
  <view class='mycoupon-page'>
    <view class="tabs">
      <view class='left' :class="tabActive === 0 ? 'active' : ''" @click='onChangeTab(0)'>待领取</view>
      <view class="right" :class="tabActive === 1 ? 'active' : ''" @click='onChangeTab(1)'>可使用</view>
    </view>
    <view class="coupons">
      <view class="coupon" v-for="coupon in couponList" :key="coupon.id" @click='onReceive(coupon.id)'>
        <view class="money-wrapper">
          <view class='money'>
            <text>{{ coupon.money }}</text>
            <text>元</text>
          </view>
        </view>
        <view class="content">
          <text class="title">{{ coupon.title }}</text>
          <text class='time'>截止至{{ coupon.time }}</text>
        </view>
        <view class="btn">
          <text class='text'>立即领取</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      tabActive: 0,
      test1: [
        {
          id: 0,
          money: 10,
          title: '通用优惠券',
          time: '2020-12-24'
        },
        {
          id: 1,
          money: 100,
          title: '仅限充值腾讯会员使用',
          time: '2020-12-30'
        }
      ],
      test2: [
        {
          id: 0,
          money: 1000,
          title: '优惠券',
          time: '2020-12-24'
        },
        {
          id: 1,
          money: 500,
          title: '仅限充值爱奇艺使用',
          time: '2020-12-30'
        },
        {
          id: 2,
          money: 300,
          title: '仅限充值腾讯会员使用',
          time: '2020-12-30'
        }
      ],
      couponList: [
        {
          id: 0,
          money: 10,
          title: '通用优惠券',
          time: '2020-12-24'
        },
        {
          id: 1,
          money: 100,
          title: '仅限充值腾讯会员使用',
          time: '2020-12-30'
        }
      ]
    }
  },
  methods: {
    onChangeTab (number) {
      this.couponList = number === 0 ? this.test1 : this.test2
      this.tabActive = number
    },
    onReceive (id) {
      uni.showToast({
        title: '优惠券',
        icon: 'none'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/fn.scss";

.mycoupon-page {
  padding: rpx(26) rpx(20);
  > .tabs {
    display: flex;
    width: 100%;
    border: rpx(2) solid #E5BE7B;
    border-radius: rpx(10);
    > view {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      padding: rpx(27) 0;
      font-size: rpx(28);
      font-weight: 500;
      color: #725420;
      &.active {
        background: linear-gradient(-42deg, #F0D7A6, #E5BE7B);
      }
    }
  }
  > .coupons {
    padding-top: rpx(25);
    > .coupon {
      display: flex;
      width: 100%;
      height: rpx(172);
      margin-bottom: rpx(21);
      background: url("../../assets/images/coupon.png") no-repeat 0 0;
      background-size: 100%;
      box-shadow: 0 rpx(5) rpx(15) 0 rgba(66, 66, 66, 0.05);
      border-radius: rpx(10);
      > .money-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: rpx(211);
        margin: rpx(29) rpx(54) rpx(45) 0;
        border-right: rpx(1) solid #C7B3A2;
        > .money {
          > text {
            color: #4D321B;
            &:first-child {
              font-size: rpx(61);
            }
            &:last-child {
              font-size: rpx(32);
              font-weight: bold;
            }
          }
        }
      }
      > .content {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        > .title {
          font-size: rpx(28);
          font-weight: bold;
          color: #333;
          margin-bottom: rpx(5);
        }
        > .time {
          font-size: rpx(24);
          font-weight: 500;
          color: #95867A;
        }
      }
      > .btn {
        position: relative;
        width: rpx(90);
        height: 100%;
        > .text {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          display: block;
          width: rpx(28);
          line-height: rpx(34);
          font-size: rpx(28);
          font-weight: bold;
          color: #4D321B;
          word-wrap: break-word;
        }
      }
    }
  }
}
</style>
