<template>
  <view class="index-page">
    <view class="user-wrapper" />
    <view class="top">
      <u-swiper
        class="swiper"
        interval="3000"
        img-mode="scaleToFill"
        :list="adList"
      ></u-swiper>
    </view>
    <view class="padding" style="padding: 28rpx 0 22rpx 0">
      <view class="tab-wrapper">
        <block v-for="(tab, index) in payList" :key="tab.id">
          <view
            class="tab"
            :class="tabActive === index ? 'active' : ''"
            @click="onChangeTab(index)"
            >{{ tab.name }}</view
          >
        </block>
      </view>
    </view>
    <view class="item-wrapper">
      <view
        class="item"
        v-for="(content, index) in payList[tabActive].SonList"
        :key="index"
        @click="onLinkPage(content.id, content.name)"
      >
        <image class="item-icon" :src="content.image" />
        <text class="item-title">{{ content.name }}</text>
        <button class="item-btn">{{ content.description }}</button>
      </view>
    </view>
  </view>
</template>

<script>
import request from "../../utils/request";
export default {
  data() {
    return {
      adList: "",
      payList: "",
      tabActive: 0,
    };
  },
  onLoad() {},
  methods: {
    async getIndex() {
      return await request.get({
        url: "index/index",
      });
    },
    onLinkPage(id, name) {
      uni.navigateTo({
        url: `/pages/memberrecharge/index?id=${id}&name=${name}`,
      });
    },
    onChangeTab(index) {
      this.tabActive = index;
    },
  },
  async onLoad() {
    const indexData = await this.getIndex();
    const {
      data: {
        data: { AdList: adList, PayProductCategoryList: payList },
      },
    } = indexData;
    this.adList = adList;
    this.payList = payList;
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/fn.scss";

.index-page {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-bottom: rpx(200);
  overflow: auto;
  background: #f6f6f8;
  > .user-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -0;
    width: rpx(750);
    height: rpx(176);
    background: linear-gradient(148deg, #2d2e30, #2d2e30);
  }
  > .top {
    position: relative;
    z-index: 0;
    width: rpx(710);
    height: rpx(318);
    background: #443e57;
    box-shadow: 0 rpx(5) rpx(15) 0 rgba(45, 47, 64, 0.05);
    border-radius: rpx(10);
    > .swiper {
      height: 100%;
    }
  }
  > .padding > .tab-wrapper {
    display: flex;
    width: rpx(710);
    //margin: rpx(28) 0 rpx(22) 0;
    border: rpx(2) solid #e5be7b;
    border-radius: rpx(10);
    > .tab {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 33.3333%;
      padding: rpx(18) 0;
      font-size: rpx(32);
      font-weight: bold;
      color: #725420;
      &:nth-child(2) {
        border-left: #e5be7b rpx(2) solid;
        border-right: #e5be7b rpx(2) solid;
      }
      &.active {
        background: linear-gradient(-42deg, #f0d7a6, #e5be7b);
      }
    }
  }
  > .item-wrapper {
    > .item {
      overflow: auto;
      display: flex;
      align-items: center;
      width: rpx(710);
      height: rpx(150);
      padding: 0 rpx(22) 0 rpx(35);
      background: #fff;
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
        background: #fff;
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
        color: #4d321b;
        background: linear-gradient(75deg, #fbe8c8 0%, #e5be7b 100%);
        border-radius: rpx(10);
        &::after {
          display: none;
        }
      }
    }
  }
}
</style>

<style lang="scss">
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
