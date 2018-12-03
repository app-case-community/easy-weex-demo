<template>
  <f2-chart
    :data="chartData"
    style="width:750px;height:600px;"
  />
</template>
<script>
import F2Chart from "@components/common/f2-chart.vue"
export default {
  components: {
    F2Chart
  },
  data() {
    return {
      chartData: [
        {
          genre: "Sports",
          sold: 275
        },
        {
          genre: "Strategy",
          sold: 115
        },
        {
          genre: "Action",
          sold: 120
        },
        {
          genre: "Shooter",
          sold: 350
        },
        {
          genre: "Other",
          sold: 150
        }
      ]
    }
  }
}
</script>

