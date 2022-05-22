<template>
  <div>
      <h2>学生名称：{{name}}</h2>
      <h2>学生年龄：{{age}}</h2>
  </div>
</template>

<script>
    export default {
        name: 'student',
        data() {
            return {
                name: '小沈阳',
                age: 18
            }
        }
    }
</script>

<style>

</style>