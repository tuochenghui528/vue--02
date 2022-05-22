<template>
  <div>
      <h1 ref="title">你好啊</h1>
      <button @click="showDom">点我查看dom</button>
      <schoole ref="schooleDom"></schoole>
  </div>
</template>

<script>
import schoole from './components/Schoole';
export default {
    name: 'App',
    components: {
        schoole
    },
    methods: {
        showDom() {
            console.log(this.$refs.title) //真实DOM元素
            console.log(this.$refs.schooleDom) //VueComponent，schoole整个组件的实例对象
        }
    }
}
</script>

<style>

</style>