<template>
  <view>
    <!--    <form class='editaddress-page' @submit="onSubmit">-->
    <!--      <label class="input-item">-->
    <!--        <view class="title">联系人</view>-->
    <!--        <input type="text" name="username" placeholder="你的姓名" />-->
    <!--      </label>-->
    <!--      <label class="input-item">-->
    <!--        <view class="title">手机号</view>-->
    <!--        <input type="number" name="phone" placeholder="快递员联系您的电话" />-->
    <!--      </label>-->
    <!--      <label class="input-item">-->
    <!--        <view class="title" @click.prevent='onShowPicker'>收货地址</view>-->
    <!--        <input type="number" placeholder="快递员联系您的电话" />-->
    <!--      </label>-->
    <!--      <label class="input-item">-->
    <!--        <view class="title">门牌号</view>-->
    <!--        <input type="number" name="address" placeholder="快递员联系您的电话" />-->
    <!--      </label>-->
    <!--    </form>-->
    <u-picker
      v-model="show"
      mode="region"
      :params="params"
      z-index="10"
      :safe-area-inset-bottom="true"
      :confirm="onSetRegion"
      :cancel="test"
    />
  </view>
</template>

<script>
export default {
  data () {
    return {
      params: {
        province: true,
        city: true,
        area: true
      },
      show: true
    }
  },
  onLoad (data) {
    const { id } = data
  },
  methods: {
    test (e) {
      console.log(e)
    },
    onShowPicker () {
      this.show = true
    },
    onSetRegion (e) {
      console.log('fuck')
    },
    onSubmit (e) {

    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/fn.scss";

.editaddress-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 rpx(20);
  overflow: auto;
  .input-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: rpx(114);
    border-bottom: rpx(1) solid #E3E3E3;
    > .title {
      font-size: rpx(32);
      font-weight: 500;
      color: #333;
    }
    > input {
      text-align: right;
    }
  }
}
</style>
