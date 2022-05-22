<template>
    <div>
        <student name="张三" sex="男" :age="18"></student>
    </div>
</template>

<script>
import student from './components/Student.vue'
export default {
    name: 'App',
    components: {student}
}
</script>

<style>

</style>