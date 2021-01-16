const { host } = '@/config/host'

const login = async () => {
  const loginRes = await uni.login({ provider: 'weixin' })
  const code = loginRes[1].code
  uni.setStorageSync('code', code)
  return code
}

const checkLogin = async () => {
  const info = await uni.checkSession()
  if (info[1]) return true
  const res = await uni.showModal({
    title: '提示',
    content: '您未登录账号，请登录进行操作'
  })
  if (res[1].cancel) return
  uni.switchTab({
    url: '/pages/mine/index'
  })
}

export { login, checkLogin }
