<template>
  <view class="container">
    <view class="top">
      <view class="title">
        <text class="number">{{data.score}}</text>
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
        <view
          class="exchange"
          :class="index === exchangeindex ? 'select' : ''"
          @click="exchange(index)"
          v-for="(item, index) in topoption"
          :key="index"
          >{{ item }}</view
        >
      </view>
      <view class="main_a" v-if="exchangeindex === 0" @click="onLinkPage">
        <view class="main_a_item" v-for="(item, index) in maina" :key="index">
          <image :src="item.src" mode="" />
          <text>{{ item.name }}</text>
          <view class="exchange">{{ item.integral }}兑换</view>
        </view>
      </view>
      <view
        class="main_b"
        v-else-if="exchangeindex === 1"
        v-for="(item, index) in mainb"
        :key="index"
      >
        <view class="top">
          <view class="name">{{ index + 1 }}、{{ item.name }}</view>
          <view class="number">数量：x{{ item.number }}</view>
          <view class="logistics" @click="toggle">{{ toggle1 }}</view>
        </view>
        <view class="main" v-if="flag === true">
          <view class="state">
            <text>已发货</text>
            <text class="select">运输中</text>
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
            <view
              class="detail_item"
              v-for="(item, index) in item.address"
              :key="index"
            >
              <view class="top">
                <view class="left">
                  <text>{{ item.time }}</text>
                  <text>{{ item.date }}</text>
                </view>
                <view class="right">{{ item.address }}</view>
              </view>
              <view class="line"></view>
            </view>
          </view>
        </view>
      </view>
      <view class="main_c" v-else>
        <view class="main_c_item" v-for="(item, index) in mainc" :key="index">
          <view class="itemleft">{{ index + 1 }}、{{ item.name }}</view>
          <view class="itemright">
            <text>+{{ item.integral }}积分</text>
            <text @click="display(index)">{{ item.button }}</text>
          </view>
        </view>
      </view>
    </view>
    <view class="background" v-if="flag1 === true" @click="display"> </view>
    <view class="follow" v-if="flag1 === true">
      <image
        class="delect"
        src="../../static/remove.png"
        mode=""
        @click="display"
      />
      <image
        class="ewm"
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201710%2F15%2F20171015094202_BHwPK.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612618719&t=9cc627ffbf77bb164f7ce54bb839c689"
        mode=""
      />
      <view class="text">长按关注公众号</view>
    </view>
  </view>
</template>

<script>
import request from "../../utils/request";
export default {
  data() {
    return {
      flag: false,
      flag1: false,
      topoption: ["积分兑换", "物品状态", "积分记录"],
      exchangeindex: 1,
      toggle1: "查看物流",
      maina: [
        {
          src:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.womai.com%2Fupload%2F601%2F603%2F608%2F362420%2F362422%2F362431%2F641766%2F641766_1_pic1080_7002.jpg&refer=http%3A%2F%2Fpic2.womai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612599671&t=1e061b6e6f3acb74a43a5515fe4faf4f",
          name: "古驰包包",
          integral: 2500,
        },
        {
          src:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.womai.com%2Fupload%2F601%2F603%2F608%2F362420%2F362422%2F362431%2F641766%2F641766_1_pic1080_7002.jpg&refer=http%3A%2F%2Fpic2.womai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612599671&t=1e061b6e6f3acb74a43a5515fe4faf4f",
          name: "古驰包包",
          integral: 2500,
        },
        {
          src:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.womai.com%2Fupload%2F601%2F603%2F608%2F362420%2F362422%2F362431%2F641766%2F641766_1_pic1080_7002.jpg&refer=http%3A%2F%2Fpic2.womai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612599671&t=1e061b6e6f3acb74a43a5515fe4faf4f",
          name: "古驰包包",
          integral: 2500,
        },
        {
          src:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.womai.com%2Fupload%2F601%2F603%2F608%2F362420%2F362422%2F362431%2F641766%2F641766_1_pic1080_7002.jpg&refer=http%3A%2F%2Fpic2.womai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612599671&t=1e061b6e6f3acb74a43a5515fe4faf4f",
          name: "古驰包包",
          integral: 2500,
        },
        {
          src:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.womai.com%2Fupload%2F601%2F603%2F608%2F362420%2F362422%2F362431%2F641766%2F641766_1_pic1080_7002.jpg&refer=http%3A%2F%2Fpic2.womai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612599671&t=1e061b6e6f3acb74a43a5515fe4faf4f",
          name: "古驰包包",
          integral: 2500,
        },
        {
          src:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.womai.com%2Fupload%2F601%2F603%2F608%2F362420%2F362422%2F362431%2F641766%2F641766_1_pic1080_7002.jpg&refer=http%3A%2F%2Fpic2.womai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612599671&t=1e061b6e6f3acb74a43a5515fe4faf4f",
          name: "古驰包包",
          integral: 2500,
        },
      ],
      mainb: [
        {
          name: "香奈儿香水",
          number: 1,
          address: [
            {
              date: "2020-12-22",
              time: "23:27",
              address: "快件已从义乌市场部出发",
            },
            {
              date: "2020-12-22",
              time: "23:27",
              address: "义乌市场部d的黄晓凡 已揽件",
            },
            {
              date: "2020-12-22",
              time: "23:27",
              address: "卖家发货",
            },
          ],
        },
      ],
      mainc: [
        {
          name: "关注公众号",
          integral: 200,
          button: "关注",
        },
        {
          name: "充值一年腾讯视频会员",
          integral: 200,
          button: "查看",
        },
        {
          name: "阅读文章",
          integral: 100,
          button: "查看",
        },
        {
          name: "购买儿童文具",
          integral: 300,
          button: "查看",
        },
      ],
      token: null,
      data:null,
    };
  },
  methods: {
    toggle() {
      this.flag = !this.flag;
      if (this.flag === false) {
        this.toggle1 = "查看物流";
      } else {
        this.toggle1 = "收起物流";
      }
    },
    exchange(e) {
      this.exchangeindex = e;
    },
    display(index) {
      if (index === 0 || this.flag1 === true) {
        this.flag1 = !this.flag1;
      }
    },
    onLinkPage() {
      uni.navigateTo({
        url: "/pages/exchangedetails/index",
      });
    },
    async getIndex(data) {
      console.log(data);
      return await request.get({
        url: "user/userinfo",
        data:{
          token: data
        },
      });
    },
  },
  async onShow() {
    // const data = await this.getIndex(this.token);
  },
  onLoad() {
    uni.getStorage({
      key: "logininfo",
      success: (res) => {
        this.token = res.data.token;
        console.log('token',res.data.token);
        const data = this.getIndex(res.data.token);
        this.data = data.data.data
      },
    });
  },
};
</script>

<style lang="scss" >
@import "~@/assets/styles/fn.scss";
.container {
  position: relative;
  > .top {
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
      margin-bottom: rpx(25);
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
      > .exchange {
        width: rpx(236);
        height: rpx(76);
        font-size: rpx(28);
        color: #725420;
        line-height: rpx(76);
        font-weight: 400;
        text-align: center;

        &:nth-child(1) {
          border: rpx(2) solid #e5be7b;
          border-radius: rpx(10) 0 0 rpx(10);
        }
        &:nth-child(2) {
          border-top: rpx(2) solid #e5be7b;
          border-bottom: rpx(2) solid #e5be7b;
        }
        &:nth-child(3) {
          border: rpx(2) solid #e5be7b;
          border-radius: 0 rpx(10) rpx(10) 0;
        }
      }
      > .select {
        font-weight: bold;
        background: linear-gradient(42deg, #f0d7a6, #e5be7b);
      }
    }
    > .main_a {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 0 rpx(24);
      margin-top: rpx(33);
      > .main_a_item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-bottom: rpx(52);
        > text {
          margin: rpx(25) 0;
          font-size: rpx(26);
          font-weight: 500;
          color: #333333;
        }
        > image {
          width: rpx(217);
          height: rpx(217);
        }
        > .exchange {
          padding: rpx(21) rpx(28);
          border-radius: rpx(10);
          background: linear-gradient(75deg, #fbe8c8 0%, #e5be7b 100%);
          font-size: rpx(26);
          font-weight: 500;
          color: #4d321b;
        }
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
          align-items: center;
          margin: 0 rpx(68);
          font-size: rpx(26);
          font-weight: 500;
          color: #999999;
          > .select {
            position: relative;
            width: rpx(126);
            height: rpx(54);
            margin-left: rpx(-15);
            line-height: rpx(54);
            text-align: center;
            font-size: rpx(26);
            font-weight: 500;
            color: #725420;
            background: linear-gradient(42deg, #f0d7a6, #e5be7b);
            border-radius: rpx(22) rpx(23) rpx(20) rpx(20);
            &::after {
              position: absolute;
              bottom: rpx(-10);
              right: rpx(53);
              content: "";
              border-right: rpx(10) solid transparent;
              border-left: rpx(10) solid transparent;
              border-top: rpx(10) solid #e5be7b;
            }
          }
        }
        > .stateimg {
          display: flex;
          align-items: center;
          margin: rpx(24) rpx(93) rpx(19);
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
                flex: 1;
                font-size: rpx(32);
                font-weight: bold;
                color: #999999;
              }
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
          > .detail_item:not(:last-child) {
            > .line {
              margin: rpx(33) 0;
              width: rpx(2);
              height: rpx(55);
              margin-left: rpx(119);
              background: #999999;
            }
          }
        }
      }
    }
    > .main_c {
      margin: rpx(45) rpx(20);
      > .main_c_item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: rpx(1) solid #e3e3e3;
        border-radius: rpx(10);
        padding: rpx(42) rpx(25);
        margin-bottom: rpx(26);
        > .itemleft {
          font-size: rpx(28);
          font-weight: 500;
          color: #333333;
        }
        > .itemright {
          display: flex;
          align-items: center;
          > text {
            &:nth-child(1) {
              margin-right: rpx(56);
              font-size: rpx(26);
              font-weight: 500;
              color: #b98a52;
            }
            &:nth-child(2) {
              display: inline-block;
              width: rpx(103);
              height: rpx(60);
              text-align: center;
              line-height: rpx(60);
              font-size: rpx(26);
              font-weight: 500;
              color: #b98a52;
              border: rpx(1) solid #b98a52;
              border-radius: rpx(10);
            }
          }
        }
      }
    }
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
    text-align: center;
    margin: rpx(70) rpx(80);
    width: rpx(589);
    height: rpx(614);
    background: #ffffff;
    > .delect {
      width: rpx(30);
      height: rpx(30);
      position: absolute;
      top: rpx(20);
      left: rpx(20);
    }
    > .ewm {
      width: rpx(336);
      height: rpx(332);
      margin-top: rpx(113);
    }
    > .text {
      font-size: rpx(28);
      font-weight: 500;
      color: #999999;
      line-height: 42px;
    }
  }
}
</style>
