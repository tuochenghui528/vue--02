<template>
  <div class="student_bg">
      <h2>学生名称：{{name}}</h2>
      <h2>学生年龄：{{age}}</h2>
      <button @click="studentName">把学生名传给APP</button>
      <button @click="unbind">点我解绑zidingyishijian</button>
      <button @click="unbindAll">点我解绑所有的自定义事件</button>
  </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            name: '张三',
            age: 18
        }
    },
    methods: {
        studentName() {
            this.$emit('zidingyishijian', this.name);
            this.$emit('demo');
        },
        unbind() {
            this.$off('zidingyishijian');//解绑单个
        },
        unbindAll() {
            this.$off(['zidingyishijian', 'demo']);//解绑多个
            // this.$off()  //解绑所有的自定义事件
        }
    },
}
</script>

<style scoped>
    .student_bg {
        background: pink;
        padding: 10px;
        margin-top: 10px;
    }
</style>