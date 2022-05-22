<template>
  <div>
      <h1>学校名称：{{name}}</h1>
      <h1>学校地址：{{address}}</h1>
  </div>
</template>

<script>
export default {
    name: 'Schoole',
    data() {
        return {
            name: '清华',
            address: '北京'
        }
    }
}
</script>

<style>

</style>