<template>
  <div>
      <h2>学校名称：{{name | mySlice}}</h2>
      <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
export default {
    name: 'Schoole',
    data() {
        return {
            name: '中国科技大学',
            address: '北京'
        }
    }
}
</script>

<style>

</style>