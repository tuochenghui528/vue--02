<template>
  <div>
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <button @click="showName()">点击我弹学校名称</button>
  </div>
</template>

<script>
import {mixin1, mixin2} from '../mixin'
export default {
    name: 'Schoole',
    data() {
        return {
            name: '清华',
            address: '北京'
        }
    },
    mixins: [mixin1, mixin2]
}
</script>

<style>

</style>