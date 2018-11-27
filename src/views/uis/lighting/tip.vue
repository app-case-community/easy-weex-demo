<template>
  <div class="wxc-demo">
    <scroller style="height:1200px">
      <title title="lc-tip"></title>
      <category title="tip"></category>
      <div class="button-list">
        <lc-button text="默认提示" type="normal" class="mt20" @LcButtonClicked="openTip"></lc-button>
        <lc-button text="多行提示" type="normal" class="mt20" @LcButtonClicked="openTip2"></lc-button>
        <lc-button text="带图片提示" type="normal" class="mt20" @LcButtonClicked="openTip3"></lc-button>
      </div>
      <lc-tip @showTip="showTip" :show="show" :type="type" :message="message" :duration="duration" :src="src"></lc-tip>
      <lc-tip @showTip="showTip" :show="show1" :type="type" :message="message" :duration="duration" :src="src" :tip-style="style"></lc-tip>
    </scroller>
  </div>
</template>

<script>

  import { LcButton, LcTip } from 'lighting-ui'
  import Title from '@components/lighting/_mods/title.vue'
  import Category from '@components/lighting/_mods/category.vue'

  export default {
    components: { Title, Category, LcButton, LcTip },
    data: function () {
      return {
        show: false,
        show1: false,
        message: '',
        type: 'text',
        duration: 2000,
        style: {
          color: 'red',
          width: '600px',
          paddingLeft: '50px',
          paddingRight: '50px'
        },
        src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABdCAMAAADwr5rxAAACQFBMVEUAAAD///////////+/v7/MzMzV1dXb29vj4+PMzMzV1dXY2Njb29vd3d3Pz8/S0tLV1dXX19fZ2dnb29vc3NzT09PW1tbb29vT09PV1dXW1tba2trb29vX19fY2NjZ2dnV1dXW1tbY2NjZ2dnV1dXV1dXW1tbX19fY2NjZ2dnZ2dnV1dXX19fX19fZ2dnV1dXX19fY2NjW1tbX19fX19fZ2dnW1tbW1tbX19fY2NjY2NjW1tbW1tbX19fX19fY2NjY2NjY2NjW1tbX19fW1tbW1tbX19fY2NjX19fY2NjX19fY2NjX19fX19fW1tbX19fX19fY2NjX19fX19fX19fW1tbX19fY2NjX19fX19fY2NjW1tbX19fX19fW1tbX19fX19fX19fY2NjW1tbX19fX19fX19fW1tbX19fX19fY2NjX19fX19fY2NjX19fX19fX19fY2NjX19fX19fX19fY2NjW1tbX19fX19fX19fX19fX19fX19fX19fX19fY2NjX19fX19fX19fX19fX19fX19fW1tbX19fX19fX19fW1tbX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fY2NjX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fZ2dnb29vc3Nzd3d3e3t7f39/m5ubo6Ojp6enq6uru7u7v7+/w8PDx8fH09PT19fX6+vr7+/v8/Pz9/f3///+kxAdAAAAAqnRSTlMAAQIDBAUGBwkKDA0ODxAREhMUFRYXGRwdHh8iIyYnKCssLi8wMTIzNDU2Nzk6PD1AQkRGR0lKS01OT1BRUlNUVVZXWl1eX2FmaGxvcnR3eHp7fn+Ag4WIi4yPkJGTlpiZn6Kjpaanqaqrr7G0tbm6u7y+v8HCw8TFxsfIy8zNz9DR0tPU1dbX2Nrc3d7g4ePk5ufo6err7O3u7/Dx8vP09fb3+Pn6+/z9/t/bxwMAAAABYktHRL/T27NVAAADu0lEQVRo3s3aZ1cUMRQG4CsuForYO9gQCzZs2LuAothFrKiIWMAuigWxLCjoWoHFgiDL6tUFBRR10fw1P8wCy5pMcmfiOb5fk/OQM8tJMvcOgEIcccu35hQVlz9zu5+UF1/L3bEmvh9oSd+5mTca8e+UZ68aZNeecbAKhWksSImyTg/dfh8lqctb0MuSPSK7AVVyb72DbA/YU4uqubuKZoelu5GS69MJeOw5JMazJ0LR7pX+DulxzVbCY06ipXh39pbjcU60mtMDZPjMGrQe50hzfF4t2smjODN8/lu0lycTxPjserSbSuHqJ75E+6kYzsdHPUYduR3DPSIKUU9O8PQs1JVNf+OLP2jTPTND8SHPUF8ehG5pR1Fn9vbE53zQqnvjg/Hwu6g3hcGnbRrqzppuvI+LN+HTD58U+fpFMFAW1qWn8MZ9ftbRJMHbGWsRDK3sOqNL+TiT8e2MCfnizie/kDf6kzHGmN/s4XxljDHGmvmjSQGde5A2dTBmvvp2A28VDOca+CD+nUvGS3CsjwYAgA2CYXNehiOmAgDARdGwzy/m5TieAQAYLN4ExLwCjo1RALDMZIKIV8ERkwFgHyrwzRZwzAKAEqTyijjeBIh6j0ReFUdvBCTK5oTyyjjiVFiHNJ6A41rYhSSeguNOOI4UnoTjMbiqMi2wKfgDeJviAXUZ1E7UwOpJK0csgYdI5ZVxrIAqJPLqOFZCg+rU7wb+y6euvwOP4sz2zgfT0aysN0A1EafwlYq/6jcD/i0/ynv+qncIK2/lb8jC3IIrBFy034tyCY5QcCJ/GLaRcBq/BVbQcBK/FMYTcQo/DvrUEXF1vjYcoICKK/P5AJBBxlX5TQAwjY4r8pMAwFFj5QqtwL8IAwA4aOkKLeeNl9ZE0/28lXYJDErgnbXUZFdskx/lPtEWZoS7GXyRH3PG6n9+5I9uDugDX4v4FvlZK8Kru4rnmcjnW+RHuQjH7d2Fdn4p77PCTUGEu6O7X+UPaK8T7A6u/T7XjFf0Dy6hpGrWl/Ssil/Qip8KqVxN9mjE34wNLbtt1Khz+iA52vD9nGpnRJmumlg4r5ga/0oL7hrNLzMn1mrAn44VlciTG23j7oni8n6q1+7/YpJZayLZXmvCNd68rZJYZQMvHS1rCSU8soxfHiZvZ0XmWrM96Wqd1jQrfb4K5TZlQhHV9h4aTOiBLqI9/fxYWv82htIbXk3vbUdmqDUUz8/6/3ry//p7AiNj0vI4f6HubMYUB2iJ8R2H8/FrxJcuJ+E7jj94/8HCIzxeiQAAAABJRU5ErkJggg=='
      }
    },
    methods: {
      openTip () {
        this.type = 'text'
        this.show = true
        this.show1 = false
        this.message = '这是一条提示'
      },
      openTip2 () {
        this.type = 'text'
        this.show = false
        this.show1 = true
        this.message = '这是一条很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的提示'
      },
      openTip3 () {
        this.type = 'img'
        this.show = true
        this.show1 = false
        this.message = '这是一条带图片的提示'
      },
      showTip () {
        this.show = false
        this.show1 = false
      }

    }
  }
</script>

<style scoped>
  .mt20{ margin-top:20px;}
  .wxc-demo {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #fff;
  }
  .button-list {
    padding-left: 30px;
  }
</style>
