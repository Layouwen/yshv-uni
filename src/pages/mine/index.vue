<template>
  <view class="mine-page">
    <view class="user-wrapper">
      <button
        class="avatar"
        v-if="!userinfo"
        open-type="getUserInfo"
        @getuserinfo="getUserInfo"
      />
      <image
        class="avatar"
        v-if="userinfo"
        mode="aspectFill"
        :src="logininfo ? logininfo.avatar : userinfo.avatarUrl"
      />
      <view class="content">
        <view class="name">{{
          logininfo
            ? logininfo.username
            : userinfo
            ? userinfo.nickName
            : "未登录"
        }}</view>
        <view v-if="logininfo" class="user-id">ID:{{ logininfo.id }}</view>
      </view>
    </view>
    <view class="main">
      <block v-for="item in items" :key="item.id">
        <button
          class="item-list item-btn"
          :open-type="item.type ? item.type : ''"
          hover-class="btn-hover"
          @click="onLinkPage(item.link, item.type)"
        >
          <image class="item-icon" :src="titlePng(item.icon)" />
          <view class="title">{{ item.title }}</view>
          <u-icon
            class="item-right"
            name="arrow-right"
            size="26rpx"
            color="#999"
          />
        </button>
      </block>
    </view>
    <!--    <button class="sign-out" @click="onSignOut">退出登录</button>-->
  </view>
</template>

<script>
import { login, checkToken } from '@/utils/login'
import request from '../../utils/request'

export default {
  data () {
    return {
      userinfo: '',
      logininfo: '',
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
    // login api
    async xcxlogin ({ code, nickname, avatar, gender }) {
      return await request.post({
        url: 'login/xcxlogin',
        data: { code, nickname, avatar, gender }
      })
    },
    // setStorage
    setUserInfo (user) {
      try {
        uni.setStorageSync('userInfo', user)
      } catch (err) {
        console.error('设置userInfo失败：', err)
      }
    },
    async getUserInfo (userData) {
      const { detail } = userData
      if (detail.errMsg === 'getUserInfo:ok') {
        const userinfo = JSON.parse(detail.rawData)
        const { nickName, avatarUrl, gender } = userinfo
        const code = await login()
        const { data } = await this.xcxlogin({
          code,
          nickname: nickName,
          avatar: avatarUrl,
          gender
        })
        if (data.code === 1) {
          uni.setStorageSync('logininfo', data.data)
        }
        this.userinfo = userinfo
        this.logininfo = data.data
        this.setUserInfo(detail.rawData)
      }
    },
    // 路由跳转
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
    }
  },
  onLoad () {
    uni.getSetting({
      success: () => {
        uni.getUserInfo({
          success: async userRes => {
            const userinfo = JSON.parse(userRes.rawData)
            const { nickName, avatarUrl, gender } = userinfo
            const code = await login()
            this.setUserInfo(userRes.rawData)
            const { data } = await this.xcxlogin({
              code,
              nickname: nickName,
              avatar: avatarUrl,
              gender
            })
            if (data.code === 1) {
              uni.setStorageSync('logininfo', data.data)
            }
            this.userinfo = userinfo
          }
        })
      }
    })
  },
  async onShow () {
    if (await checkToken({ tips: false })) {
      try {
        const value = uni.getStorageSync('logininfo')
        if (value) {
          this.logininfo = value
        }
      } catch (e) {
        console.error(e, '获取logininfo失败')
      }
    } else {
      console.log(1)
      uni.showToast({
        title: '重新登录成功',
        success: () => this.xcxlogin()
      })
    }
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
  overflow: auto;
  background: #f6f6f8;
  > .user-wrapper {
    display: flex;
    align-items: center;
    width: rpx(750);
    height: rpx(176);
    background: linear-gradient(148deg, #2d2e30, #2d2e30);
    > .avatar {
      width: rpx(101);
      height: rpx(101);
      margin: 0 rpx(34) 0 rpx(24);
      border-radius: 50%;
      background: #fff url("../../static/images/default-avatar.png") no-repeat
        center center;
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
        color: #fff;
      }
      > .user-id {
        font-size: rpx(25);
        font-weight: 500;
        color: #6e7082;
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
        color: #1d202a;
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
