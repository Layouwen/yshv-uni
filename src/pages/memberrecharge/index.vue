<template>
  <view class="container">
    <view class="input">
      <input type="text" placeholder="请输入充值号码" placeholder-class="aaa" />
    </view>
    <view class="main">
      <view class="main_t">
        <view class="gold">
          <image class="yellow" src="../../static/yellow.png" mode="" />
          <view class="float">
            <image class="goldimg" src="../../static/gold.png" mode="" />
            <text>黄金会员</text>
          </view>
        </view>
        <view class="diamonds">
          <image class="black" src="../../static/black.png" mode="" />
          <view class="float">
            <image
              class="diamondsimg"
              src="../../static/diamonds.png"
              mode=""
            />
            <text>钻石会员</text>
          </view>
        </view>
      </view>
      <view class="main_box">
        <view class="main_item">
          <view class="main_item_l">
            <text class="monthcard">月卡</text>
            <text class="month">1个月</text>
          </view>
          <text>￥19.8</text>
          <text>原价：25.8</text>
        </view>
        <view class="main_item">
          <view class="main_item_l">
            <text class="monthcard">月卡</text>
            <text class="month">1个月</text>
          </view>
          <text>￥19.8</text>
          <text>原价：25.8</text>
        </view>
        <view class="main_item">
          <view class="main_item_l">
            <text class="monthcard">月卡</text>
            <text class="month">1个月</text>
          </view>
          <text>￥19.8</text>
          <text>原价：25.8</text>
        </view>
        <view class="main_item">
          <view class="main_item_l">
            <text class="monthcard">月卡</text>
            <text class="month">1个月</text>
          </view>
          <text>￥19.8</text>
          <text>原价：25.8</text>
        </view>
      </view>
    </view>
    <view class="button">立即开通</view>
    <view class="tips">
      <view class="tips_title">充值须知</view>
      <view class="tips_detail">
        1.本平台业务为自动充值（一般3秒—1分钟左右）；
        2.购买的会员业务不会自动续费，过期后需要再次购买使用；
        3.充值成功后，请您登录腾讯视频官网查询会员状态和时间；
        4.本商品适用平台：手机、电脑、iPad上使用，电视端需要选择指定套餐；
        5.因虚拟产品特殊性，充值前请核对充值账号，一旦充值成功将无法转移和退款；
        6.我们平台上的产品和定价信息在公布前已经过合适，但是在极少数情形下可能有误。如果我们发现定价错误，我们将取消您的订单，并对订单金额全额退款。
        7.如在充值过程中遇到疑问，可咨询“在线客服”。
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang='scss'>
@import "~@/assets/styles/fn.scss";

// 所有rpx单位写法换成 rpx(数字)
// 例如： width: rpx(100);
.container {
  background: #ffffff;
  > .input {
    width: rpx(710);
    border-bottom: rpx(1) solid #615f5b;
    margin: 0 auto;
    padding: rpx(33) 0;
    .aaa {
      width: rpx(208);
      height: rpx(28);
      font-size: rpx(30);
      font-family: PingFang SC;
      font-weight: 500;
      color: #999999;
      line-height: 42px;
    }
  }
  > .main {
    > .main_t {
      position: relative;
      display: flex;
      margin: 0 rpx(20);
      margin-top: rpx(32);
      > .gold {
        position: relative;
        z-index: 999;
        > .yellow {
          width: rpx(373);
          height: rpx(75);
        }
        > .float {
          position: absolute;
          left: rpx(70);
          top: 0;
          > text {
            width: rpx(109);
            height: rpx(26);
            font-size: rpx(28);
            font-weight: bold;
            color: #725420;
            line-height: rpx(75);
          }
          > .goldimg {
            width: rpx(38);
            height: rpx(32);
            margin-right: rpx(14);
          }
        }
      }
      > .diamonds {
        position: absolute;
        right: 0;
        > .black {
          width: rpx(373);
          height: rpx(75);
        }
        > .float {
          position: absolute;
          left: rpx(142);
          top: 0;
          > text {
            width: rpx(109);
            height: rpx(26);
            font-size: rpx(28);
            font-weight: 500;
            color: #cfb596;
            line-height: rpx(75);
          }
          > .diamondsimg {
            width: rpx(30);
            height: rpx(28);
            margin-right: rpx(14);
          }
        }
      }
    }
    > .main_box {
      margin: 0 auto;
      width: rpx(711);
      height: rpx(718);
      background: white;
      box-shadow: 0px 5px 15px 0px rgba(45, 47, 64, 0.05);
      > .main_item {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: rpx(665);
        height: rpx(152);
        border: 2px solid #ba894f;
        background: linear-gradient(135deg, #fef5e7 0%, #ffcf85 100%);
        box-shadow: 0px rpx(5) rpx(15) 0px rgba(45, 47, 64, 0.05);
        border-radius: rpx(10);
        margin: 0 auto;
        margin-bottom: rpx(18);
        > .main_item_l {
          display: flex;
          flex-direction: column;
          align-items: center;
          > .monthcard {
            font-size: rpx(34);
            font-weight: bold;
            color: #333333;
          }
          > .month {
            font-size: rpx(26);
            font-weight: 500;
            color: #999999;
          }
        }
      }
    }
  }
  > .button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: rpx(72);
    margin-bottom: rpx(80);
    width: rpx(711);
    height: rpx(100);
    background: linear-gradient(75deg, #fbe8c8 0%, #e5be7b 100%);
    border-radius: rpx(10);
    font-size: rpx(32);
    font-weight: bold;
    color: #4d321b;
  }
  > .tips {
    width: rpx(707);
    margin: 0 auto;
    > .tips_title {
      font-size: rpx(26);
      font-weight: bold;
      color: #333333;
      margin-bottom: rpx(30);
    }
    > .tips_detail {
      width: rpx(707);
      height: rpx(507);
      font-size: rpx(26);
      font-weight: 500;
      color: #999999;

      line-height: rpx(48);
    }
  }
}
</style>
