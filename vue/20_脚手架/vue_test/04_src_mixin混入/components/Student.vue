<template>
  <div>
      <h2>学生名称：{{name}}</h2>
      <h2>学生年龄：{{age}}</h2>
      <button @click="showName()">点击我弹学生名称</button>
  </div>
</template>

<script>
import {mixin1, mixin2} from '../mixin'
export default {
    name: 'Student',
    data() {
        return {
            name: '张三',
            age: 18
        }
    },
    mixins: [mixin1, mixin2]
}
</script>

<style>

</style>