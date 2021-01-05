<template>
  <view class="container">
    <view class="bbb"></view>
    <view>
      <view class="text">{{ flag }}</view>
      <input
        type="text"
        placeholder="请输入充值号码"
        placeholder-class="aaa"
        v-model="aaa"
      />
      <view class="main">
        <view class="main_t">
          <view
            class="gold"
            @click="gold"
            :class="topflag === false ? 'zindex' : ''"
          >
            <image class="yellow" src="../../static/yellow.png" mode="" />
            <view class="float">
              <image class="goldimg" src="../../static/gold.png" mode="" />
              <text>黄金会员</text>
            </view>
          </view>
          <view
            class="diamonds"
            @click="diamonds"
            :class="topflag === true ? 'zindex' : ''"
          >
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
          <view>
            <view
              :class="itemflag === 0 ? 'main_item1' : 'main_item2'"
              @click="item1(0)"
            >
              <view class="main_item_l">
                <text class="monthcard">月卡</text>
                <text class="month">1个月</text>
              </view>
              <view>
                <text class="yuan">￥</text>
                <text class="money">19.8</text>
              </view>
              <text>原价：25.8</text>
            </view>
            <view
              :class="itemflag === 1 ? 'main_item1' : 'main_item2'"
              @click="item2(1)"
            >
              <view class="main_item_l">
                <text class="monthcard">季卡</text>
                <text class="month">3个月</text>
              </view>
              <view>
                <text class="yuan">￥</text>
                <text class="money">58.8</text>
              </view>
              <text class="yj">原价：88</text>
            </view>
            <view
              :class="itemflag === 2 ? 'main_item1' : 'main_item2'"
              @click="item3(2)"
            >
              <view class="main_item_l">
                <text class="monthcard">半年卡</text>
                <text class="month">1个月</text>
              </view>
              <view>
                <text class="yuan1">￥</text>
                <text class="money">108</text>
              </view>
              <text>原价：148</text>
            </view>
            <view
              :class="itemflag === 3 ? 'main_item1' : 'main_item2'"
              @click="item4(3)"
            >
              <view class="main_item_l">
                <text class="monthcard">年卡</text>
                <text class="month">12个月</text>
              </view>
              <view>
                <text class="yuan2">￥</text>
                <text class="money">198</text>
              </view>
              <text>原价：256</text>
            </view>
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
  </view>
</template>

<script>
export default {
  data() {
    return {
      aaa: "",
      flag: "",
      topflag: false,
      itemflag: 0,
    };
  },
  watch: {
    aaa(val) {
      if (this.aaa !== "") {
        this.flag = "请输入充值号码";
      } else {
        this.flag = "";
      }
    },
  },
  methods: {
    gold() {
      this.topflag = false;
    },
    diamonds() {
      this.topflag = true;
    },
    item1(e) {
      this.itemflag = e;
    },
    item2(e) {
      this.itemflag = e;
    },
    item3(e) {
      this.itemflag = e;
    },
    item4(e) {
      this.itemflag = e;
    },
  },
};
</script>

<style lang='scss'>
@import "~@/assets/styles/fn.scss";

// 所有rpx单位写法换成 rpx(数字)
// 例如： width: rpx(100);
.container {
  position: relative;
  background: #ffffff;
  > .bbb {
    width: rpx(1500);
    height: rpx(498 * 2);
    transform: translateX(rpx(-390)) translateY(rpx(-650));
    background: linear-gradient(148deg, #2d2e30, #2d2e30);
    border-radius: 50%;
  }
  > view {
    position: absolute;
    top: 0;
    margin: 0 rpx(20);

    > .text {
      height: rpx(32);
      margin-top: rpx(20);
      font-size: rpx(24);
      font-weight: 500;
      color: #999999;
    }
    > input {
      width: rpx(710);
      border-bottom: rpx(1) solid #615f5b;
      font-weight: bold;
      font-size: rpx(50);
      color: #fef1dc;
      margin: 0 auto;
      padding: rpx(33) 0;
      .aaa {
        width: rpx(208);
        height: rpx(28);
        font-size: rpx(30);
        font-weight: 500;
        color: #999999;
        line-height: 42px;
      }
    }
    > .main {
      > .main_t {
        position: relative;
        display: flex;
        margin-top: rpx(32);
        > .zindex {
          z-index: 999;
        }
        > .gold {
          position: relative;
          > .yellow {
            width: rpx(373);
            height: rpx(75);
            display: block;
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
              margin-top: rpx(-8);
              margin-right: rpx(14);
              vertical-align: middle;
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
              margin-bottom: rpx(-3);
              margin-right: rpx(14);
            }
          }
        }
      }
      > .main_box {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: rpx(711);
        height: rpx(718);
        background: white;
        box-shadow: 0px 5px 15px 0px rgba(45, 47, 64, 0.05);
        > view {
          margin-top: rpx(28);
          > .main_item1 {
            display: flex;
            align-items: center;
            width: rpx(665);
            height: rpx(152);
            border: 2px solid #ba894f;
            background: linear-gradient(135deg, #fef5e7 0%, #ffcf85 100%);
            box-shadow: 0px rpx(5) rpx(15) 0px rgba(45, 47, 64, 0.05);
            border-radius: rpx(10);
            margin: 0 auto;
            margin-bottom: rpx(18);
            > text {
              margin-left: rpx(26);
              font-size: rpx(28);
              font-weight: 400;
              text-decoration: line-through;
              color: #ba8c55;
            }
            > view {
              display: flex;
              align-items: center;
              width: rpx(140);
              .yuan {
                font-size: rpx(30);
                font-weight: bold;
                color: #572f1f;
              }
              .money {
                font-size: rpx(50);
                font-weight: 400;
                color: #572f1f;
              }
            }

            > .main_item_l {
              width: rpx(224);
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              margin-left: rpx(26);
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
          > .main_item2 {
            display: flex;
            align-items: center;
            width: rpx(663);
            height: rpx(150);
            border: rpx(1) solid #e3e3e3;
            background: #ffffff;
            box-shadow: 0px rpx(5) rpx(15) 0px rgba(45, 47, 64, 0.05);
            border-radius: rpx(10);
            margin: 0 auto;
            margin-bottom: rpx(18);
            > .yj {
              font-size: rpx(28);
              font-weight: 400;
              text-decoration: line-through;
              color: #d0c8c3;
            }
            > text {
              margin-left: rpx(26);
              font-size: rpx(28);
              font-weight: 400;
              text-decoration: line-through;
              color: #d0c8c3;
            }
            > view {
              display: flex;
              align-items: center;
              width: rpx(140);
              .yuan {
                font-size: rpx(30);
                font-weight: bold;

                color: #b98a52;
              }
              .yuan1 {
                font-size: rpx(30);
                font-weight: bold;
                color: #b98a52;
              }
              .yuan2 {
                font-size: rpx(30);
                font-weight: bold;
                color: #b98a52;
              }
              .money {
                font-size: rpx(50);
                font-weight: 400;
                color: #b98a52;
              }
            }
            > .main_item_l {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              margin-left: rpx(26);
              width: rpx(224);
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
}
</style>
