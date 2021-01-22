<template>
  <view class="container">
    <view class="top">
      <image :src="detail.image" mode="" />
    </view>
    <view class="item1">
      <text>{{ detail.title }}</text>
      <text class="integral">{{ detail.score }}积分</text>
    </view>
    <view class="item1">
      <text>数量</text>
      <picker @change="bindPickerChange" :range="arr">
        <view class="number">x{{ arr[index] }}</view>
      </picker>
    </view>
    <!-- <view class="item1">
      <text>优惠券</text>
      <text class="coupon">不可用</text>
    </view> -->
    <view class="item1" @click="nav">
      <text>地址</text>
      <view>
        <text class="name"
          >{{ detail.DefaultAddress.name }}
          {{ detail.DefaultAddress.mobile }}</text
        >
        <view class="address"
          >{{ detail.DefaultAddress.province }}{{ detail.DefaultAddress.city
          }}{{ detail.DefaultAddress.area
          }}{{ detail.DefaultAddress.address }}</view
        >
      </view>
      <text class="address">></text>
    </view>
    <view class="button">立即兑换</view>
    <view class="tips_title">兑换须知</view>
    <view class="tips_detail">
      1.实物商品图片仅供参考，请以实际到货实物为准；<br />
      2.虚拟商品图片可以直接使用即可；<br />
      3.本平台向您保证所售商品均为正品行货；<br />
      4.因厂家会在没有任何通知的情况下更改产品包装、产地或附件，本平台不能确保客户收到的商品与平台图片、附件等说明完全一致，只能确保为原厂正货！并保证与市场同类产品一致，若没急事更新，请大家谅解；<br />
      5.我们平台上的产品和定价信息在公布前已经过合适，但是，在极少数情形下可能有误。如果我们发现定价错误，我们将取消您的订单，并对订单金额全额退款；<br />
      6.优惠券具有一定时效性，请注意时间，及时兑换，过期无效;<br />
      7.兑换过程中，如果有疑问请及时咨询客服。<br />
    </view>
    <view class="background" catchtouchmove v-if="flag === true"> </view>
    <view class="follow" v-if="flag === true">
      <image
        class="delect"
        src="../../static/success.png"
        mode=""
        @click="display"
      />
      <view class="success">兑换成功</view>
      <view class="nav">自动跳转“我的积分”</view>
      <view>....</view>
    </view>
  </view>
</template>

<script>
import request from "../../utils/request";
export default {
  data() {
    return {
      flag: false,
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      index: 0,
      value: 1,
      detail: {},
      id:null
    };
  },
  methods: {
    nav() {
      uni.navigateTo({
        url: "../address/index",
      });
    },
    bindPickerChange(e) {
      console.log(e);
      this.index = e.detail.value;
      this.value = parseInt(e.detail.value) + 1;
      console.log(this.value);
    },
    async getdetail(token, e) {
      return await request.get({
        header: {
          token: token,
        },
        url: "score_product/detail",
        data: {
          id: e,
        },
      });
    },
  },
  onLoad(e) {
    console.log(e);
    this.id = e.id
    uni.getStorage({
      key: "logininfo",
      success: (res) => {
        console.log(res);
        console.log(res.data);
        this.getdetail(res.data.token, this.id).then((res) => {
          this.detail = res.data.data;
          console.log(this.detail);
        });
      },
    });
  },
  onShow() {
    uni.getStorage({
      key: "logininfo",
      success: (res) => {
        console.log(res);
        console.log(res.data);
        this.getdetail(res.data.token, this.id).then((res) => {
          this.detail = res.data.data;
          console.log(this.detail);
        });
      },
    });
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/fn.scss";
.container {
  display: flex;
  flex-direction: column;
  position: relative;
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
      width: rpx(182);
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
    > view {
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
    .number {
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
  > .background {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #000000;
    opacity: 0.5;
  }
  > .follow {
    position: absolute;
    top: rpx(171);
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: rpx(70) rpx(80);
    width: rpx(589);
    height: rpx(554);
    background: #ffffff;
    > image {
      width: rpx(210);
      height: rpx(216);
    }
    > .success {
      margin-top: rpx(35);
      margin-bottom: rpx(68);
      font-size: rpx(32);
      font-weight: 500;
      color: #333333;
      line-height: rpx(42);
    }
    > .nav {
      font-size: rpx(26);
      font-weight: 500;
      color: #e9c589;
      line-height: rpx(42);
    }
  }
}
</style>
