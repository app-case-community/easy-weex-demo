if (WXEnvironment.platform === 'Web') {
  // web 传参
  location.search.slice(1).split('&').map(kv => {
    var ks = kv.split('=')
    return {k:ks[0], v: ks[1]}
  }).forEach(kv => {
    weex.config[kv.k] = encodeURIComponent(kv.v)
  })
} else {
  // 设置viewport
  const meta = weex.requireModule('meta')
  meta.setViewport({
    width: 750
  })
}
