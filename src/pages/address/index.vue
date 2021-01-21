<template>
  <view class="address-page">
    <view class="item" v-for="item in items" :key="item.id">
      <view class="top">
        <view class="info">
          <text class="name">{{ item.name }}</text>
          <text class="phone">{{ item.mobile }}</text>
        </view>
        <text class="address">{{ item.province + item.city + item.area }}</text>
      </view>
      <view class="bottom">
        <view class="select" @click="addressDefault(item.id)">
          <image :src='`/static/images/select${item.default === 1 ? "-active" : ""}.png`' />
          <text :class='item.default === 1 ? "active" : ""'>默认地址</text>
        </view>
        <view class="edit" @click="onLinkEditAddress(item.id)">
          <image src="/static/images/edit.png" />
          <text>编辑</text>
        </view>
        <view class="delete" @click="addressdel(item.id)">
          <image src="/static/images/del.png" />
          <text>删除</text>
        </view>
      </view>
    </view>
    <button v-if="items.length < 2" class="btn" @click="onLinkEditAddress">新增地址</button>
  </view>
</template>

<script>
import request from '@/utils/request'

export default {
  data () {
    return {
      items: []
    }
  },
  methods: {
    async addressdel (id) {
      const [, { confirm }] = await uni.showModal({
        title: '删除操作',
        content: '是否确定删除该地址',
        confirmText: '删除',
        confirmColor: 'red'
      })
      if (!confirm) return
      const { data } = await request.post({
        header: { token: uni.getStorageSync('logininfo').token },
        url: 'user/addressdel',
        data: { id }
      })
      if (data.code === 1) {
        uni.showToast({
          title: '删除成功',
          mask: true,
          success: () => this.init()
        })
      }
    },
    async init () {
      const { data } = await request.get({
        header: {
          token: uni.getStorageSync('logininfo').token
        },
        url: 'user/addresslist'
      })
      if (data.code === 1) this.items = data.data
    },
    async addressDefault (id) {
      const { data } = await request.get({
        header: { token: uni.getStorageSync('logininfo').token },
        url: 'user/addressdefault',
        data: { id }
      })
      if (data.code === 1) {
        uni.showToast({
          title: '设置成功',
          mask: true,
          duration: 800,
          success: () => this.init()
        })
      }
    },
    onLinkEditAddress (id) {
      uni.navigateTo({
        url: '/pages/editaddress/index' + (id ? `?id=${id}` : '')
      })
    }
  },
  onShow () {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/fn.scss";

.address-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  background: #f6f6f8;
  > .item {
    display: flex;
    flex-direction: column;
    height: rpx(225);
    padding: rpx(36) rpx(20) 0;
    background: #FFF;
    border-radius: rpx(10);
    &:not(:first-child) {
      margin-top: rpx(25);
    }
    > .top {
      padding-bottom: rpx(32);
      font-size: rpx(28);
      font-weight: 500;
      border-bottom: rpx(1) solid #e3e3e3;
      > .info {
        color: #333;
        > .name {
          margin-right: rpx(37);
        }
      }
      > .address {
        color: #999;
      }
    }
    > .bottom {
      flex-grow: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: #999;
      > .select, > .edit, > .delete {
        display: flex;
        align-items: center;
        > image {
          width: rpx(32);
          height: rpx(32);
        }
      }
      > .select {
        margin-right: auto;
        > image {
          margin-right: rpx(10);
        }
        > text.active {
          color: #B98A52;
        }
      }
      > .edit {
        position: relative;
        padding-right: rpx(32);
        &::before {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 0;
          content: "";
          height: rpx(23);
          width: rpx(1);
          background: #999;
        }
      }
      > .delete {
        padding-left: rpx(32);
      }
    }
  }
  .btn {
    flex-shrink: 1;
    width: rpx(540);
    height: rpx(100);
    line-height: rpx(100);
    margin: auto auto rpx(139);
    font-size: rpx(30);
    font-weight: 500;
    color: #B98A52;
    background: transparent;
    border: rpx(1) solid #C18D54;
    border-radius: rpx(10);
    &::after {
      display: none;
    }
  }
}
</style>
