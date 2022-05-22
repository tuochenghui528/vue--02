<template>
  <div class="student_bg">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <button @click="schooleName">把学校名传给APP</button>
  </div>
</template>

<script>
export default {
    name: 'Schoole',
    props:["getSchooleName"],
    data() {
        return {
            name: '清华',
            address: '北京'
        }
    },
    methods: {
        schooleName() {
            this.getSchooleName(this.name);
        }
    },
}
</script>

<style scoped>
    .student_bg {
        background: skyblue;
        padding: 10px;
    }
</style>