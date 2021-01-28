import request from '@/utils/request'

const login = async () => {
  const loginRes = await uni.login({ provider: 'weixin' })
  const code = loginRes[1].code
  uni.setStorageSync('code', code)
  return code
}

const checkLogin = async ({ status = true, tips = true }) => {
  const info = await uni.checkSession()
  if (info[1]) return true
  tips && showTips(status)
  return false
}

const checkToken = async ({ status = true, tips = true }) => {
  const { token } = uni.getStorageSync('logininfo')
  if (!token) return true
  const { data } = await request.post({
    url: 'user/userinfo',
    header: { token }
  })
  if (data.code === 1) return true
  tips && showTips(status, '请重新登录后操作')
  return false
}

const showTips = async (status = true, tips) => {
  const res = await uni.showModal({
    showCancel: status,
    title: '提示',
    content: tips || '您未登录账号，请登录进行操作'
  })
  if (res[1].cancel) return
  uni.switchTab({
    url: '/pages/mine/index'
  })
}

export { login, checkLogin, checkToken }
