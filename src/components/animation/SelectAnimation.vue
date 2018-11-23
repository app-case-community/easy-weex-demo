<template>
    <div class="wrap">
        <text class="select-title">select animations:</text>
        <select style="height: 20px" @change="value => $emit('change', value)">
            <option v-for="animation in animations" :value="animation" :key="animation">{{animation}}</option>
        </select>
    </div>
</template>
<style scoped>
.wrap {
  width: 500px;
  align-self: center;
}
.select-title {
  margin-bottom: 40px;
}
</style>

<script>
  export default {
    name: 'select-animation',
    props: {
      animations: Array
    }
  }
</script>
