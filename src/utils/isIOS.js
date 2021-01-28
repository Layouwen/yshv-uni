export default () => {
  const systemInfo = uni.getSystemInfoSync()
  return systemInfo.system.includes('iOS')
}
