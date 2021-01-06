<template>
  <view class='mine-page'>
    <view class='user-wrapper'>
      <button class="avatar" v-if="!userinfo" open-type="getUserInfo" @getuserinfo="getUserInfo" />
      <image class="avatar"
             v-if="userinfo"
             mode="aspectFill"
             :src="userinfo.avatarUrl" />
      <view class="content">
        <view class="name">{{ userinfo ? userinfo.nickName : '未登录' }}</view>
        <view class='user-id' v-if="userinfo">ID:1245634</view>
      </view>
    </view>
    <view class="main">
      <block v-for="item in items" :key="item.id">
        <button class="item-list item-btn"
                :open-type="item.type?item.type: ''"
                hover-class="btn-hover"
                @click="onLinkPage(item.link, item.type)">
          <image class="item-icon" :src='titlePng(item.icon)' />
          <view class="title">{{ item.title }}</view>
          <u-icon class="item-right" name="arrow-right" size="26rpx" color="#999"></u-icon>
        </button>
      </block>
    </view>
    <!--    <button class="sign-out" @click="onSignOut">退出登录</button>-->
  </view>
</template>

<script>
export default {
  data () {
    return {
      userinfo: '',
      isLogin: false,
      items: [
        {
          id: 0,
          title: '我的服务',
          icon: 'fuwu',
          link: 'myservice'
        },
        {
          id: 1,
          title: '我的优惠券',
          icon: 'voucher',
          link: 'mycoupon'
        },
        {
          id: 2,
          title: '收货人信息',
          icon: 'shouhuoren'
        },
        {
          id: 3,
          title: '在线客服',
          type: 'contact',
          icon: 'kefu'
        }
      ]
    }
  },
  methods: {
    setUserInfo (user, code) {
      try {
        uni.setStorageSync('userInfo', user)
        uni.setStorageSync('code', code)
      } catch (err) {
        console.error('设置userInfo失败：', err)
      }
    },
    async getUserInfo (userData) {
      const { detail } = userData
      if (detail.errMsg === 'getUserInfo:ok') {
        this.userinfo = JSON.parse(detail.rawData)
        const loginRes = await this.login()
        console.log(loginRes.code, this.userinfo)
        this.setUserInfo(detail.rawData, loginRes.code)
      }
    },
    titlePng (title) {
      return `/static/images/${title}.png`
    },
    path (name) {
      return `/pages/${name}/index`
    },
    onLinkPage (name, type) {
      if (!name || type === 'contact') return
      uni.navigateTo({
        url: this.path(name)
      })
    },
    login () {
      return new Promise(
          (resolve, reject) => {
            uni.login({
              provider: 'weixin',
              success: loginRes => {
                resolve(loginRes)
              }
            })
          }
      )
    }
  },
  onLoad () {
    uni.getSetting({
      success: () => {
        uni.getUserInfo({
          success: async userRes => {
            this.userinfo = JSON.parse(userRes.rawData)
            const loginRes = await this.login()
            console.log(loginRes.code, this.userinfo)
            this.setUserInfo(userRes.rawData, loginRes.code)
          }
        })
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/fn.scss";

.mine-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding-bottom: rpx(62);
  background: #f6f6f8;
  > .user-wrapper {
    display: flex;
    align-items: center;
    width: rpx(750);
    height: rpx(176);
    background: linear-gradient(148deg, #2D2E30, #2D2E30);
    > .avatar {
      width: rpx(101);
      height: rpx(101);
      margin: 0 rpx(34) 0 rpx(24);
      border-radius: 50%;
      background: #fff url("../../static/images/default-avatar.png") no-repeat center center;
      background-size: 50%;
    }
    > .content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      > .name {
        margin-bottom: rpx(4);
        font-size: rpx(30);
        font-weight: 500;
        color: #FFF;
      }
      > .user-id {
        font-size: rpx(25);
        font-weight: 500;
        color: #6E7082;
      }
    }
  }
  > .main {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 rpx(20) 0 rpx(22);
    > .item-list {
      display: flex;
      align-items: center;
      padding: rpx(40) 0;
      border-bottom: rpx(1) solid #e3e3e3;
      &.item-btn {
        margin: 0;
        cursor: none;
        line-height: unset;
        &::after {
          display: none;
        }
      }
      > .item-icon {
        width: rpx(28);
        height: rpx(28);
        margin-right: rpx(13);
      }
      > .title {
        font-size: rpx(30);
        font-weight: 500;
        color: #1D202A;
      }
      > .item-right {
        margin-left: auto;
      }
    }
  }
  //> .sign-out {
  //  width: rpx(540);
  //  height: rpx(100);
  //  line-height: rpx(100);
  //  padding: 0;
  //  margin-top: auto;
  //  font-size: rpx(30);
  //  font-weight: 500;
  //  color: #B98A52;
  //  border: rpx(1) solid #C18D54;
  //  border-radius: rpx(10);
  //  &:after {
  //    display: none;
  //  }
  //}
}
</style>
