export default () => {
  const systeminfo = uni.getSystemInfoSync();
  return systeminfo.system.includes("iOS");
};
