<template>
  <view class="container">
    <view class="bbb"></view>
    <view>
      <view class="text">{{ flag }}</view>
      <input
        type="number"
        placeholder="请输入充值号码"
        placeholder-class="aaa"
        v-model="phone"
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
              <text>套餐列表</text>
            </view>
          </view>
          <!-- <view
            class="diamonds"
            @click="diamonds"
            :class="topflag === true ? 'zindex' : ''"
          >
            <image class="black" src="../../static/black.png" mode="" />
            <view class="float">
              <image class="diamondsimg" :src="diaset.image" mode="" />
              <text>{{ diaset.name }}</text>
            </view>
          </view> -->
        </view>
        <view class="main_box">
          <view v-if="topflag === false">
            <view
              :class="itemflag1 === index ? 'main_item1' : 'main_item2'"
              @click="item1(index)"
              v-for="(item, index) in goldset"
              :key="index"
            >
              <!-- <view
                v-if="index === 1"
                class="xianshi"
                style="position: absolute; top: 0"
              >限时7折
              </view
              > -->
              <view class="main_item_l">
                <text class="monthcard"
                  >{{ item.product_detail.item_name }}
                </text>
                <text class="month" v-if="item.type === '1'">1天</text>
                <text class="month" v-if="item.type === '2'">1周</text>
                <text class="month" v-if="item.type === '3'">1个月</text>
                <text class="month" v-if="item.type === '4'">3个月</text>
                <text class="month" v-if="item.type === '5'">6个月</text>
                <text class="month" v-if="item.type === '6'">12个月</text>
              </view>
              <view>
                <text class="yuan">￥</text>
                <text class="money"
                  >{{ parseFloat(item.product_detail.channel_price) }}
                </text>
              </view>
              <text
                >原价：{{ parseFloat(item.product_detail.original_price) }}
              </text>
            </view>
          </view>
          <!-- <view v-else>
            <view
              :class="itemflag2 === index ? 'main_item1' : 'main_item2'"
              @click="item2(index)"
              v-for="(item, index) in diaCardList"
              :key="index"
              style="position: relative"
            >
              <view
                v-if="index === 1"
                class="xianshi"
                style="position: absolute; top: 0"
                >限时7折</view
              >
              <view class="main_item_l">
                <text class="monthcard" v-if="item.type === '1'">天卡</text>
                <text class="monthcard" v-if="item.type === '2'">周卡</text>
                <text class="monthcard" v-if="item.type === '3'">月卡</text>
                <text class="monthcard" v-if="item.type === '4'">季卡</text>
                <text class="monthcard" v-if="item.type === '5'">半年卡</text>
                <text class="monthcard" v-if="item.type === '6'">年卡</text>
                <text class="month" v-if="item.type === '1'">1天</text>
                <text class="month" v-if="item.type === '2'">1周</text>
                <text class="month" v-if="item.type === '3'">1个月</text>
                <text class="month" v-if="item.type === '4'">3个月</text>
                <text class="month" v-if="item.type === '5'">6个月</text>
                <text class="month" v-if="item.type === '6'">12个月</text>
              </view>
              <view>
                <text class="yuan">￥</text>
                <text class="money">{{ parseFloat(item.price) }}</text>
              </view>
              <text>原价：{{ parseFloat(item.originalprice) }}</text>
            </view>
          </view> -->
        </view>
      </view>
      <view class="button2" v-if="buttonflag === true"
        >由于相关规定，IOS功能暂不可用
      </view>
      <view class="button1" @click="pay" v-else>立即开通</view>
      <!-- <u-loading
        mode="flower"
        size="80"
        style="
          position: absolute;
          top: 50vh;
          left: 50vw;
          margin-left: -38rpx;
          margin-top: -38rpx;
        "
        v-if="loading === true"
      ></u-loading> -->
      <view class="tips">
        <view class="tips_title">充值须知</view>
        <view class="tips_detail">
          1.本平台业务为自动充值（一般3秒—1分钟左右）；<br />
          2.购买的会员业务不会自动续费，过期后需要再次购买使用；<br />
          3.充值成功后，请您登录腾讯视频官网查询会员状态和时间；<br />
          4.本商品适用平台：手机、电脑、iPad上使用，电视端需要选择指定套餐；<br />
          5.因虚拟产品特殊性，充值前请核对充值账号，一旦充值成功将无法转移和退款；<br />
          6.我们平台上的产品和定价信息在公布前已经过合适，但是在极少数情形下可能有误。如果我们发现定价错误，我们将取消您的订单，并对订单金额全额退款。<br />
          7.如在充值过程中遇到疑问，可咨询“在线客服”。<br />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { checkLogin, checkToken } from "@/utils/login";
import isIOS from "../../utils/isIOS";
import request from "../../utils/request";
export default {
  data () {
    return {
      buttonflag: isIOS(),
      phone: "",
      flag: "",
      topflag: false,
      itemflag1: 0,
      itemflag2: 0,
      goldset: [],
      diaset: [],
      goldCardList: [],
      diaCardList: [],
      token: "",
      // loading: false,
    };
  },
  watch: {
    aaa (val) {
      if (this.aaa !== "") {
        this.flag = "请输入充值号码";
      } else {
        this.flag = "";
      }
    },
  },
  methods: {
    gold () {
      this.topflag = false;
    },
    diamonds () {
      this.topflag = true;
    },
    item1 (e) {
      this.itemflag1 = e;
    },
    item2 (e) {
      this.itemflag2 = e;
    },
    async getIndex (data) {
      return await request.get({
        url: "pay_product/details",
        data,
      });
    },
    async postPay (data) {
      return await request.post({
        header: {
          "Content-Type": "application/x-www-form-urlencoded",
          token: this.token,
        },
        url: "pay_product/pay",
        data,
      });
    },
    pay () {
      if (this.phone === "") {
        uni.showToast({
          icon: "none",
          title: "请输入手机号",
        });
        return;
      }
      const item = this.goldset[this.itemflag1];
      this.postPay({
        id: item.id,
        mobile: this.phone,
        category_id: item.category_id,
        thirdpartyid: item.thirdpartyid,
        type: parseInt(item.type),
        payamount: item.product_detail.channel_price,
        productname: item.product_detail.item_name,
      }).then((res) => {
        console.log(res);
        this.loading = true;
        if (res.data.msg == "手机号格式错误") {
          uni.showToast({
            icon: "none",
            title: "手机号格式错误",
          });
          return;
        } else if (res.data.code === 1) {
          this.loading = false;
          const result = uni.requestPayment(res.data.data);
          if (result[1]) {
            uni.showToast({
              title: "支付成功",
            });
          }
        }
      });
    },
  },
  async onLoad (e) {
    uni.setNavigationBarTitle({
      title: e.name + "会员充值",
    });
    const index = await this.getIndex({
      id: e.id,
    });
    this.goldset = index.data.data;
    if (this.goldset != undefined) {
      this.goldset = this.goldset.reverse();
    }
    uni.getStorage({
      key: "logininfo",
      success: async (res) => {
        this.token = res.data.token;
        const data = await this.getIndex(res.data.token);
        this.data = data.data.data;
      },
    });
  },
  onShow () {
    // checkLogin({ status: false });
    // checkToken({ status: false })
  },
};
</script>

<style lang="scss">
@import "~@/assets/styles/fn.scss";

// 所有rpx单位写法换成 rpx(数字)
// 例如： width: rpx(100);
.container {
  position: relative;
  background: #ffffff;
  padding-bottom: rpx(30);
  overflow: hidden;
  &::before {
    content: "";
    display: table;
    clear: both;
  }
  > .bbb {
    position: absolute;
    top: 0;
    width: rpx(1500);
    height: rpx(498 * 2);
    transform: translateX(rpx(-390)) translateY(rpx(-650));
    background: linear-gradient(148deg, #2d2e30, #2d2e30);
    border-radius: 50%;
    z-index: 0;
  }
  > view {
    position: relative;
    padding-top: rpx(20);

    > .text {
      height: rpx(32);
      margin-top: rpx(20);
      margin-left: rpx(21);
      font-size: rpx(24);
      font-weight: 500;
      color: #999999;
    }
    > input {
      width: rpx(710);
      height: rpx(89);
      border-bottom: rpx(1) solid #615f5b;
      font-weight: bold;
      font-size: rpx(50);
      color: #fef1dc;
      margin: 0 auto;
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
        margin: 0 rpx(21);
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
      .main_box {
        &::-webkit-scrollbar {
          display: none;
        }
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        overflow: auto;
        width: rpx(711);
        max-height: rpx(700);
        background: white;
        box-shadow: 0px 5px 15px 0px rgba(45, 47, 64, 0.05);
        > view {
          margin-top: rpx(28);
          > .main_item1 {
            position: relative;
            display: flex;
            align-items: center;
            width: rpx(663);
            height: rpx(150);
            border: rpx(2) solid #ba894f;
            background: linear-gradient(135deg, #fef5e7 0%, #ffcf85 100%);
            box-shadow: 0px rpx(5) rpx(15) 0px rgba(45, 47, 64, 0.05);
            border-radius: rpx(10);
            margin: 0 auto;
            margin-bottom: rpx(18);
            > .xianshi {
              position: absolute;
              top: 0;
              width: rpx(148);
              height: rpx(42);
              font-size: rpx(26);
              display: flex;
              align-items: center;
              justify-content: center;
              background: linear-gradient(135deg, #626667 0%, #3a3e3d 100%);
              border-radius: rpx(10) 0 rpx(10) 0;
              font-weight: 500;
              color: #fbdfbe;
            }
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
              margin-left: rpx(30);
              min-width: rpx(160);
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
              min-width: rpx(224);
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              margin-left: rpx(26);
              > .monthcard {
                font-size: rpx(32);
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
            position: relative;
            display: flex;
            align-items: center;
            width: rpx(663);
            height: rpx(150);
            border: rpx(2) solid #e3e3e3;
            background: #ffffff;
            box-shadow: 0px rpx(5) rpx(15) 0px rgba(45, 47, 64, 0.05);
            border-radius: rpx(10);
            margin: 0 auto;
            margin-bottom: rpx(18);
            > .xianshi {
              position: absolute;
              top: 0;
              width: rpx(148);
              height: rpx(42);
              font-size: rpx(26);
              display: flex;
              align-items: center;
              justify-content: center;
              background: linear-gradient(135deg, #626667 0%, #3a3e3d 100%);
              border-radius: rpx(10) 0 rpx(10) 0;
              font-weight: 500;
              color: #fbdfbe;
            }
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
              margin-left: rpx(30);
              min-width: rpx(160);
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
              min-width: rpx(224);
              > .monthcard {
                font-size: rpx(32);
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
    > .button1 {
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
    > .button2 {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      margin-top: rpx(72);
      margin-bottom: rpx(80);
      width: rpx(711);
      height: rpx(100);
      color: #999999;
      background: #e5e5e5;
      border-radius: rpx(10);
      font-size: rpx(32);
      font-weight: bold;
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
        min-height: rpx(507);
        font-size: rpx(26);
        font-weight: 500;
        color: #999999;
        line-height: rpx(48);
      }
    }
  }
}
</style>
