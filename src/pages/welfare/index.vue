<template>
  <view class="container">
    <view class="top">
      <view class="title">
        <text class="number">456</text>
        <text class="available">可用积分</text>
      </view>
      <view class="integral">
        <text class="intefral_t">1元=10积分</text>
        <view class="intefral_m"></view>
        <text class="intefral_b">查看积分记录</text>
      </view>
    </view>
    <view class="main">
      <view class="main_t">
        <view class="exchange1">积分兑换</view>
        <view class="exchange2">积分兑换</view>
        <view class="exchange3">积分兑换</view>
      </view>
      <view class="main_b">
        <view class="top">
          <view class="name">1、香奈儿香水</view>
          <view class="number">数量：x1</view>
          <view class="logistics" @click="toggle">收起物流</view>
        </view>
        <view class="main" v-if="flag===true">
          <view class="state">
            <text>已发货</text>
            <text>运输中</text>
            <text>派件中</text>
            <text>已签收</text>
          </view>
          <view class="stateimg">
            <view class="circular"></view>
            <view class="line"></view>
            <view class="circular"></view>
            <view class="line"></view>
            <view class="circular"></view>
            <view class="line"></view>
            <view class="circular"></view>
          </view>
          <view class="address">
            <text>金华市</text>
            <text>杭州市</text>
          </view>
          <view class="detail">
            <view class="detail_item">
              <view class="top">
                <view class="left">
                  <text>23:27</text>
                  <text>2020-12-22</text>
                </view>
                <view class="right">快件已从义乌出发</view>
              </view>
              <view class="line"></view>
            </view>
            <view class="detail_item">
              <view class="top">
                <view class="left">
                  <text>23:27</text>
                  <text>2020-12-22</text>
                </view>
                <view class="right">快件已从义乌出发</view>
              </view>
              <view class="line"></view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data(){
    return{
      flag:false
    }
  },
  methods:{
    toggle(){
      this.flag=!this.flag
    }
  }
};
</script>

<style lang="scss" >
@import "~@/assets/styles/fn.scss";
.container {
  > .top {
    height: rpx(247);
    border-bottom: rpx(26) solid #f6f6f8;
    > .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      > .number {
        margin-top: rpx(46);
        font-size: rpx(55);
        font-weight: bold;
        color: #b98a52;
      }
      > .available {
        margin-bottom: rpx(51);
        font-size: rpx(26);
        font-weight: 500;
        color: #999999;
      }
    }
    > .integral {
      display: flex;
      justify-content: center;
      align-items: center;
      > .intefral_t {
        font-size: rpx(24);
        font-weight: 500;
        color: #999999;
      }
      > .intefral_m {
        width: rpx(2);
        height: rpx(17);
        margin-left: rpx(31);
        margin-right: rpx(35);
        background: #999999;
      }
      > .intefral_b {
        font-size: rpx(24);
        font-weight: 500;
        color: #bf9564;
      }
    }
  }
  > .main {
    > .main_t {
      display: flex;
      margin-left: rpx(20);
      margin-top: rpx(26);
      > .exchange1 {
        width: rpx(236);
        height: rpx(76);
        font-size: rpx(28);
        color: #725420;
        line-height: rpx(76);
        font-weight: 400;
        text-align: center;
        border: rpx(2) solid #e5be7b;
        border-radius: rpx(10) 0 0 rpx(10);
      }
      > .exchange2 {
        width: rpx(240);
        height: rpx(78);
        line-height: rpx(78);
        text-align: center;
        font-size: rpx(28);
        font-weight: bold;
        color: #725420;
        background: linear-gradient(42deg, #f0d7a6, #e5be7b);
      }
      > .exchange3 {
        width: rpx(228);
        height: rpx(76);
        color: #725420;
        line-height: rpx(76);
        font-weight: 400;
        text-align: center;
        border: rpx(2) solid #e5be7b;
        border-radius: 0 rpx(10) rpx(10) 0;
      }
    }
    > .main_b {
      margin: rpx(44) rpx(20);
      border: rpx(1) solid #e3e3e3;
      border-radius: rpx(10);
      > .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 rpx(25);
        margin: rpx(43);
        > .name {
          font-size: rpx(28);
          font-weight: bold;
          color: #333333;
        }
        > .number {
          font-size: rpx(26);
          font-weight: 500;
          color: #999999;
        }
        > .logistics {
          padding: rpx(17) rpx(16);
          font-weight: 500;
          font-size: rpx(26);
          color: #b98a52;
          border: rpx(1) solid #b98a52;
          border-radius: rpx(10);
        }
      }
      > .main {
        margin-top: rpx(80);
        > .state {
          display: flex;
          justify-content: space-between;
          margin: 0 rpx(68);
          font-size: rpx(26);
          font-weight: 500;
          color: #999999;
        }
        > .stateimg {
          display: flex;
          align-items: center;
          margin: rpx(19) rpx(93) rpx(19);
          .circular {
            width: rpx(20);
            height: rpx(20);
            background: #cdcbce;
            border-radius: 50%;
          }
          .line {
            width: rpx(142);
            height: rpx(4);
            background: #cdcbce;
            margin: 0 rpx(6);
          }
        }
        > .address {
          display: flex;
          justify-content: space-between;
          margin: 0 rpx(64);
          font-size: rpx(26);
          font-weight: 500;
          color: #333333;
        }
        > .detail {
          padding: rpx(65) 0;
          margin: rpx(24) rpx(22);
          border-top: rpx(1) solid #e3e3e3;
          > .detail_item {
            display: flex;
            flex-direction: column;
            > .top {
              display: flex;
              align-items: center;
              margin-right: rpx(26);
              padding: 0 rpx(57);
              > .left {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-right: rpx(26);
                > text {
                  &:nth-child(1) {
                    font-size: rpx(32);
                    font-weight: bold;

                    color: #999999;
                  }
                  &:nth-child(2) {
                    font-size: rpx(22);
                    font-weight: 500;
                    color: #999999;
                  }
                }
              }
              > .right {
                font-size: rpx(32);
                font-weight: bold;
                color: #999999;
              }
            }
            > .line:not(:last-child) {
              width: rpx(2);
              height: rpx(55);
              margin-left: rpx(119);
              background: #999999;
            }
            &:nth-child(1) {
              > .top {
                display: flex;
                align-items: center;
                margin-right: rpx(26);
                padding: 0 rpx(57);
                > .left {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  margin-right: rpx(26);
                  > text {
                    &:nth-child(1) {
                      font-size: rpx(32);
                      font-weight: bold;

                      color: #333333;
                    }
                    &:nth-child(2) {
                      font-size: rpx(22);
                      font-weight: 500;
                      color: #999999;
                    }
                  }
                }
                > .right {
                  font-size: rpx(32);
                  font-weight: bold;
                  color: #333333;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>