import Renderer from './renderer'
import F2 from '@antv/f2'

function strLen (str) {
  let len = 0
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128) {
      len++
    } else {
      len += 2
    }
  }

  return len
}

// override some methods

// 由于支付宝小程序不支持 measureText 方法，故用此方法 mock
F2.Util.measureText = function (text, font) {
  let fontSize = 12
  if (font) {
    fontSize = parseInt(font.split(' ')[3], 10)
  }
  fontSize /= 2
  return {
    width: strLen(text) * fontSize
  }
}

F2.Util.addEventListener = function (source, type, listener) {
  if (typeof source.addListener === 'function') {
    source.addListener(type, listener)
  }
}

F2.Util.removeEventListener = function (source, type, listener) {
  if (typeof source.removeListener === 'function') {
    source.removeListener(type, listener)
  }
}

F2.Util.createEvent = function (event, chart) {
  const pixelRatio = chart.get('pixelRatio') || 1
  const type = event.type
  let x = 0
  let y = 0
  const touches = event.changedTouches
  if (touches && touches.length > 0) {
    x = touches[0].pageX
    y = touches[0].pageY
  }

  return {
    type,
    chart,
    x: x * pixelRatio,
    y: y * pixelRatio
  }
}

const color1 = '#E8E8E8' // 坐标轴线、坐标轴网格线的颜色
const color2 = '#333333' // 字体颜色
// 坐标轴的默认样式配置
const defaultAxis = {
  label: {
    fill: color2,
    fontSize: 24
  }, // 坐标轴文本的样式
  line: {
    stroke: color1,
    lineWidth: 1,
    top: true
  }, // 坐标轴线的样式
  grid: {
    stroke: color1,
    lineWidth: 1,
    lineDash: [2]
  }, // 坐标轴网格线的样式
  tickLine: null, // 坐标轴刻度线，默认不展示
  labelOffset: 7.5 // 坐标轴文本距离坐标轴线的距离
}

const DEFAULT_CFG = {
  itemMarginBottom: 12,
  itemGap: 10,
  showTitle: false,
  titleStyle: {
    fontSize: 26,
    fill: color2,
    textAlign: 'start',
    textBaseline: 'top'
  },
  nameStyle: {
    fill: color2,
    fontSize: 24,
    textAlign: 'start',
    textBaseline: 'middle'
  },
  valueStyle: {
    fill: color2,
    fontSize: 24,
    textAlign: 'start',
    textBaseline: 'middle'
  },
  unCheckStyle: {
    fill: '#bfbfbf'
  },
  itemWidth: 'auto',
  wordSpace: 6,
  selectedMode: 'multiple' // 'multiple' or 'single'
}

const Theme = {
  fontFamily: '"Helvetica Neue", "San Francisco", Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", sans-serif', // 默认字体
  defaultColor: '#1890FF', // 默认颜色
  pixelRatio: 1, // 默认像素比，具体参数由用户自己设置
  padding: 'auto', // 图表边距，默认自动计算
  appendPadding: 18, // 默认留白，15 像素
  colors: [
    '#1890FF',
    '#2FC25B',
    '#FACC14',
    '#223273',
    '#8543E0',
    '#13C2C2',
    '#3436C7',
    '#F04864'
  ], // 默认色系
  shapes: {
    line: ['line', 'dash'],
    point: ['circle', 'hollowCircle']
  },
  sizes: [4, 10], // 默认的大小范围
  axis: {
    bottom: F2.Util.mix({}, defaultAxis, {
      grid: null
    }), // 底部坐标轴配置
    left: F2.Util.mix({}, defaultAxis, {
      line: null
    }), // 左侧坐标轴配置
    right: F2.Util.mix({}, defaultAxis, {
      line: null
    }), // 右侧坐标轴配置
    circle: F2.Util.mix({}, defaultAxis, {
      line: null
    }), // 极坐标下的圆弧坐标轴配置
    radius: F2.Util.mix({}, defaultAxis, {
      labelOffset: 4
    }) // 极坐标下的半径坐标轴配置
  }, // 各种坐标轴配置
  shape: {
    line: {
      lineWidth: 2, // 线的默认宽度
      lineJoin: 'round',
      lineCap: 'round'
    }, // 线图样式配置
    point: {
      lineWidth: 0,
      size: 3 // 圆的默认半径
    }, // 点图样式配置
    area: {
      fillOpacity: 0.1
    } // 区域图样式配置
  },
  legend: {
    right: F2.Util.mix({}, DEFAULT_CFG),
    left: F2.Util.mix({}, DEFAULT_CFG),
    top: F2.Util.mix({}, DEFAULT_CFG),
    bottom: F2.Util.mix({}, DEFAULT_CFG),
    marker: {
      symbol: 'circle', // marker 的形状
      radius: 10 // 半径大小
    }
  },
  tooltip: {
    triggerOn: ['touchstart', 'touchmove'],
    // triggerOff: 'touchend',
    showTitle: false,
    showCrosshairs: false,
    crosshairsStyle: {
      stroke: 'rgba(0, 0, 0, 0.25)',
      lineWidth: 2
    },
    showTooltipMarker: true,
    background: {
      radius: 1,
      fill: 'rgba(0, 0, 0, 0.65)',
      padding: [3, 5]
    },
    titleStyle: {
      fontSize: 26,
      fill: '#fff',
      textAlign: 'start',
      textBaseline: 'top'
    },
    nameStyle: {
      fontSize: 26,
      fill: 'rgba(255, 255, 255, 0.65)',
      textAlign: 'start',
      textBaseline: 'middle'
    },
    valueStyle: {
      fontSize: 26,
      fill: '#fff',
      textAlign: 'start',
      textBaseline: 'middle'
    },
    showItemMarker: true,
    itemMarkerStyle: {
      radius: 5,
      symbol: 'circle',
      lineWidth: 1,
      stroke: '#fff'
    },
    layout: 'horizontal'
  },
  _defaultAxis: defaultAxis // 用于获取默认的坐标轴配置
}

F2.Global.setTheme(Theme)

F2.Renderer = Renderer
export default F2
