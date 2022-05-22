<template>
  <div>
      <schoole></schoole>
      <student></student>
  </div>
</template>

<script>
import schoole from './schoole.vue';
import student from './student.vue';
export default {
    name: 'App',
    components: {
        schoole,
        student
    }
}
</script>

<style>

</style>