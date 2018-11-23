import Fly from 'flyio/dist/npm/weex'
export const setViewport = vpObj => {
  if (weex.config.env.platform === 'Web') {
    return
  }
  const meta = weex.requireModule('meta')
  meta.setViewport(vpObj)
}
export const setParams = () => {
  if (weex.config.env.platform !== 'Web') {
    return
  }
  location.search.slice(1).split('&').map(kv => {
    let ks = kv.split('=')
    return {
      k: ks[0],
      v: ks[1]
    }
  }).forEach(kv => {
    weex.config[kv.k] = encodeURIComponent(kv.v)
  })
}

const init = (width = 750) => {
  setParams()
  setViewport({
    width
  })
  Vue.prototype.$http = new Fly()
}

export default init
