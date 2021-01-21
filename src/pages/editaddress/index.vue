<template>
  <form @submit="onSubmit">
    <view class='editaddress-page'>
      <label class="input-item">
        <view class="title">联系人</view>
        <input type="text" name="name" placeholder-class="placeholder" placeholder="你的姓名" />
      </label>
      <label class="input-item">
        <view class="title">手机号</view>
        <input type="number" name="mobile" placeholder-class="placeholder" placeholder="快递员联系您的电话" />
      </label>
      <label class="input-item" @click.prevent='onShowPicker'>
        <view class="title">收货地址</view>
        <view class=input-address>
          <image class="icon" :src="require('@/assets/images/yshy_address.png')" />
          {{ defaultAddress | formatAddress }}
        </view>
        <u-icon name='arrow-right' color="#9a9a9a" />
      </label>
      <label class="input-item">
        <view class="title">门牌号</view>
        <input type="number" name="address" placeholder-class="placeholder" placeholder="详细地址" />
      </label>
      <view class="full" />
      <button class="btn" form-type="submit">保存地址</button>
    </view>
    <u-picker
        v-model="show"
        mode="region"
        :params="params"
        z-index="10"
        :default-region="defaultAddress"
        :safe-area-inset-bottom="true"
        @confirm="onSetRegion"
        @cancel="test"
    />
  </form>
</template>

<script>
import request from '@/utils/request'

export default {
  data () {
    return {
      params: {
        province: true,
        city: true,
        area: true
      },
      show: false,
      defaultAddress: ['广东省', '广州市', '荔湾区']
    }
  },
  computed: {
    token () {
      return uni.getStorageSync('logininfo').token
    }
  },
  filters: {
    formatAddress: (value) => {
      let str = ''
      value.forEach(value => str += value)
      return str
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
    onSetRegion (option) {
      const { area, city, province } = option
      this.defaultAddress = [province.label, city.label, area.label]
    },
    async onSubmit (formData) {
      let { detail: { value } } = formData
      const hash = {
        name: '联系人',
        mobile: '手机号',
        address: '门牌号'
      }
      let state = true
      for (const name in value) {
        if (value.hasOwnProperty(name) && value[name] === '') {
          uni.showToast({
            title: hash[name] + '不能为空哦~',
            icon: 'none'
          })
          state = false
          break
        }
      }
      if (!state) return
      value = {
        ...value,
        action: 'add',
        province: this.defaultAddress[0],
        city: this.defaultAddress[1],
        area: this.defaultAddress[2]
      }
      const { data } = await request.post({
        header: {
          token: this.token
        },
        url: 'user/addressmodify',
        data: value
      })
      console.log(data)
      if (data.code === 0) {
        uni.showToast({ icon: 'none', title: data.msg })
        return
      }
      uni.showToast({
        title: '添加成功',
        mask: true,
        success: () => setTimeout(() => uni.navigateBack({ delta: 1 }), 800)
      })
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
  padding: 0 rpx(20) rpx(139);
  ::v-deep .placeholder {
    color: #9a9a9a;
  }
  .input-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: rpx(114);
    border-bottom: rpx(1) solid #E3E3E3;
    > .input-address {
      display: flex;
      flex-grow: 1;
      justify-content: flex-end;
      align-items: center;
      color: #9a9a9a;
      > .icon {
        width: rpx(32);
        height: rpx(32);
        margin-right: rpx(9);
      }
    }
    > .title {
      font-size: rpx(32);
      font-weight: 500;
      color: #333;
    }
    > input {
      width: 70%;
      color: #9a9a9a;
      text-align: right;
    }
  }
  .full {
    flex-grow: 1;
  }
  .btn {
    flex-shrink: 1;
    width: rpx(540);
    height: rpx(100);
    line-height: rpx(100);
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
