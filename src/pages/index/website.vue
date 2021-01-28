<template>
  <web-view :src="url"></web-view>
</template>

<script lang="js">
export default {
  data () {
    return {
      url: ''
    }
  },
  onLoad (option) {
    this.url = option.url
  }
}
</script>

<style lang="scss" scoped>

</style>
