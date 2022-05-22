<template>
  <div class="box_bg">
      <h2>{{msg}}</h2>
      <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
      <schoole :getSchooleName="getSchooleName"></schoole>
      <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据  第一种写法（v-on或@） -->
      <student @zidingyishijian="getStudentName" @demo="m1"></student>
      <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据  第二种写法（ref） -->
      <student ref="students" @demo="m1" @click.native="show"></student>
  </div>
</template>

<script>
import student from './components/Student.vue'
import schoole from './components/Schoole.vue'
export default {
  components: { student, schoole },
  data() {
    return {
      msg: '你好啊！'
    }
  },
  mounted() {
    // 这个对应第二种写法  相当于动态获取到DOM给其身上添加自定义事件
    this.$refs.students.$on('zidingyishijian', this.getStudentName)
  },
  methods: {
    getSchooleName(name) {
      console.log(name)
    },
    getStudentName(name) {
      console.log(name)
    },
    m1() {
      console.log('输出demo')
    },
    show() {
      alert('组件标签绑定原生事件')
    }
  }
    
}
</script>

<style>
  .box_bg {
    background: gray;
    padding: 10px;
  }
</style>