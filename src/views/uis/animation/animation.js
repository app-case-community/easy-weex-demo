const animation = weex.requireModule('animation');

// 修改为 Promise 对象的，方便使用并行，串行动画
export const transition = (el, opts) => {
  if (!el) {
    return Promise.resolve();
  }
  return new Promise(function (resolve) {
    animation.transition(el, {
      duration: 400, //ms
      timingFunction: 'ease',
      delay: 0, //ms
      ...opts
    }, resolve);
  })
}

const transitionNow = (el, styles) => {
  const duration = 0.0001;
  return new Promise(function (resolve, reject) {
    animation.transition(el, {
      // weex bug, can't use 0
      duration,
      styles
    });
    setTimeout(function () {
      resolve();
    }, duration)
  })
}

// 隐藏list
export const fadeOut = async (el, obj) => {
  await transitionNow(el, {
    opacity: 1
  });

  return transition(el, {
    styles: {
      opacity: 0
    },
    ...obj
  })
}

// 显示list
export const fadeIn = async (el, obj) => {
  await transitionNow(el, {
    opacity: 0
  });

  return transition(el, {
    styles: {
      opacity: 1
    },
    ...obj
  })
}

// 缩小
export const zoomOut = async (el, obj) => {
  await transitionNow(el, {
    opacity: 1,
    transform: 'scale(1)'
  });

  return transition(el, {
    styles: {
      opacity: 0,
      transform: 'scale(0)'
    },
    ...obj
  })
}

export const zoomOutDown = async (el, obj) => {

  await transition(el, {
    styles: {
      opacity: 1,
      transform: 'scale(0.475) translateY(-60px)'
    },
    timingFunction: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'
  })

  await transition(el, {
    styles: {
      opacity: 0,
      transform: 'scale(.1) translateY(2000px)',
      transformOrigin: 'center bottom'
    },
    timingFunction: 'cubic-bezier(0.175, 0.885, 0.320, 1)'
  })

}

// 放大
export const zoomIn = async (el, obj) => {
  await transitionNow(el, {
    opacity: 0,
    transform: 'scale(0)'
  });

  return transition(el, {
    styles: {
      opacity: 1,
      transform: 'scale(1)'
    },
    ...obj
  })
}

export const zoomInDown = async (el, obj) => {
  await transitionNow(el, {
    opacity: 0,
    transform: 'scale(0.1) translateY(-1000px)'
  });

  await transition(el, {
    styles: {
      opacity: 1,
      transform: 'scale(0.475) translateY(60px)'
    },
    timingFunction: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'
  })

  await transition(el, {
    styles: {
      transform: 'scale(1) translateY(0px)'
    },
    timingFunction: 'cubic-bezier(0.175, 0.885, 0.320, 1)'
  })

}

export const zoomInLeft = async (el, obj) => {
  await transitionNow(el, {
    opacity: 0,
    transform: 'scale(0.1) translateX(-1000px)'
  });

  await transition(el, {
    styles: {
      opacity: 1,
      transform: 'scale(0.475) translateX(10px)'
    },
    timingFunction: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'
  })

  await transition(el, {
    styles: {
      transform: 'scale(1) translateX(0px)'
    },
    timingFunction: 'cubic-bezier(0.175, 0.885, 0.320, 1)'
  })

}

export const zoomInRight = async (el, obj) => {
  await transitionNow(el, {
    opacity: 0,
    transform: 'scale(0.1) translateX(1000px)'
  });

  await transition(el, {
    styles: {
      opacity: 1,
      transform: 'scale(0.475) translateX(-10px)'
    },
    timingFunction: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'
  })

  await transition(el, {
    styles: {
      transform: 'scale(1) translateX(0px)'
    },
    timingFunction: 'cubic-bezier(0.175, 0.885, 0.320, 1)'
  })

}

export const zoomInUp = async (el, obj) => {
  await transitionNow(el, {
    opacity: 0,
    transform: 'scale(0.1) translateY(1000px)'
  });

  await transition(el, {
    styles: {
      opacity: 1,
      transform: 'scale(0.475) translateX(-10px)'
    },
    timingFunction: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)'
  })

  await transition(el, {
    styles: {
      transform: 'scale(1) translateX(0px)'
    },
    timingFunction: 'cubic-bezier(0.175, 0.885, 0.320, 1)'
  })

}

export const flash = async (el, obj) => {
  await transition(el, {
    styles: {
      opacity: 0
    },
    duration: 100
  });

  await transition(el, {
    styles: {
      opacity: 1
    },
    duration: 100
  });

  await transition(el, {
    styles: {
      opacity: 0
    },
    duration: 100
  });

  await transition(el, {
    styles: {
      opacity: 1
    },
    duration: 100
  });
}

export const pulse = async (el, obj) => {
  await transitionNow(el, {
    transform: 'scale(1)'
  });

  await transition(el, {
    styles: {
      transform: 'scale(1.05)'
    }
  });

  return transition(el, {
    styles: {
      transform: 'scale(1)'
    }
  });
}

export const shake = async (el, obj) => {
  await transitionNow(el, {
    transform: 'translateX(0)'
  });

  for (let i = 0; i < 10; i++) {
    await transition(el, {
      styles: {
        transform: `translateX(${ i % 2 ? 10 : -10}px)`
      },
      duration: 100
    })
  }
}