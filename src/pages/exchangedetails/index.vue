<template>
  <view class="container">
    <view class="top">
      <image src="../../static/logo.png" mode="" />
    </view>
    <view class="item1">
      <text>香奈儿香水1瓶（市场价：1299元）</text>
      <text class="integral">2000积分</text>
    </view>
    <view class="item1">
      <text>数量</text>
      <text class="number">x1</text>
    </view>
    <view class="item1">
      <text>优惠券</text>
      <text class="coupon">不可用</text>
    </view>
    <view class="item1">
      <text>地址</text>
      <view>
        <text class="name">黄先生 13867895656</text>
        <view class="address">广东省广州市白云区666号路</view>
      </view>
      <text class="address">></text>
    </view>
    <view class="button">立即兑换</view>
    <view class="tips_title">兑换须知</view>
    <view class="tips_detail">
      1.实物商品图片仅供参考，请以实际到货实物为准；<br>
      2.虚拟商品图片可以直接使用即可；<br> 
      3.本平台向您保证所售商品均为正品行货；<br>
      4.因厂家会在没有任何通知的情况下更改产品包装、产地或附件，本平台不能确保客户收到的商品与平台图片、附件等说明完全一致，只能确保为原厂正货！并保证与市场同类产品一致，若没急事更新，请大家谅解；<br>
      5.我们平台上的产品和定价信息在公布前已经过合适，但是，在极少数情形下可能有误。如果我们发现定价错误，我们将取消您的订单，并对订单金额全额退款；<br>
      6.优惠券具有一定时效性，请注意时间，及时兑换，过期无效;<br>
      7.兑换过程中，如果有疑问请及时咨询客服。<br>
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/fn.scss";
.container {
  display: flex;
  flex-direction: column;
  background: #f6f6f8;
  > .top {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: rpx(36) rpx(20);
    width: rpx(711);
    height: rpx(262);
    background: #ffffff;
    box-shadow: rpx(0) rpx(8) rpx(15) rpx(0) rgba(70, 70, 70, 0.09);
    border-radius: rpx(10);
    > image {
      width: rpx(135);
      height: rpx(182);
    }
  }
  > .item1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: rpx(142);
    margin: 0 rpx(20);
    border-bottom: rpx(1) solid #e3e3e3;
    >view{
      margin-left: rpx(-130);
    }
    > text {
      &:nth-child(1) {
        font-size: rpx(28);
        font-weight: bold;
        color: #333333;
      }
    }
    > .integral {
      font-size: rpx(36);
      font-weight: bold;
      color: #b98a52;
    }
    > .number {
      width: rpx(45);
      height: rpx(45);
      line-height: rpx(45);
      text-align: center;
      border: rpx(1) solid #999999;

      font-size: rpx(26);
      font-weight: 500;
      color: #999999;
    }
    > .coupon {
      font-size: rpx(26);
      font-weight: 500;
      color: #999999;
    }
    .address {
      font-size: rpx(28);
      font-weight: 500;
      color: #999999;
    }
    .name {
      font-size: rpx(28);
      font-weight: 500;
      color: #333333;
    }
  }
  > .button {
    font-size: rpx(32);
    font-weight: bold;
    color: #4d321b;
    margin: rpx(92) rpx(20);
    width: rpx(711);
    height: rpx(100);
    line-height: rpx(100);
    text-align: center;
    background: linear-gradient(75deg, #fbe8c8 0%, #e5be7b 100%);
    border-radius: rpx(10);
  }
  > .tips_title {
    margin-left: rpx(29);
    font-size: rpx(26);
    font-weight: bold;
    color: #333333;
  }
  > .tips_detail {
    margin: rpx(27) rpx(25) rpx(97);
    font-size: rpx(26);
    font-weight: 500;
    color: #999999;
  }
}
</style>