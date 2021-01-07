<template>
  <view class='address-page'>
    <view class="item" v-for="(item, index) in items" :key="item.name">
      <view class="top">
        <view class="info">
          <text class="name">{{ item.name }}</text>
          <text class="phone">{{ item.phone }}</text>
        </view>
        <text class="address">{{ item.address }}</text>
      </view>
      <view class="bottom">
        <view class="select" @click="onChangeAddress(index)">
          <image :src='`/static/images/select${index === activeItem ? "-active" : ""}.png`' />
          <text :class='index === activeItem ? "active" : ""'>默认地址</text>
        </view>
        <view class='edit' @click="onEdit(item.id)">
          <image src='/static/images/edit.png' />
          <text>编辑</text>
        </view>
        <view class='delete' @click="onDelete(item.id)">
          <image src='/static/images/del.png' />
          <text>删除</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      activeItem: 0,
      items: [
        {
          id: 12,
          name: '李小姐',
          phone: '13467856897',
          address: '广东省广州市天河区车陂路'
        },
        {
          id: 21,
          name: '李小姐',
          phone: '13467856897',
          address: '广东省广州市天河区车陂路'
        },
        {
          id: 32,
          name: '黄先生',
          phone: '13856985624',
          address: '广东省广州市天河区车陂路2巷3号'
        },
        {
          id: 44,
          name: '李小姐',
          phone: '13467856897',
          address: '广东省广州市天河区车陂路'
        }
      ]
    }
  },
  methods: {
    onChangeAddress (index) {
      this.activeItem = index
    },
    onEdit (id) {
      uni.navigateTo({
        url: `/pages/editaddress/index?id=${id}`
      })
    },
    onDelete (id) {
      uni.showModal({
        title: '是否删除',
        success: res => res.confirm && (this.items = this.items.filter(item => item.id !== id))
      })
    }
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
}
</style>
