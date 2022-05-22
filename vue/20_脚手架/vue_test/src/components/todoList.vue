<template>
  <div class="todo_list">
      <ul>
        <TodoItem v-for="todo in todoList" :key="todo.id" :todoItem="todo" :getChecked="getChecked" :deleteTodo="deleteTodo"></TodoItem>
      </ul>
  </div>
</template>

<script>
import TodoItem from './todoItem.vue'
    export default {
        name: 'TodoList',
        props:['todoList', 'getChecked', 'deleteTodo'],
        components: {
            TodoItem
        },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="less" scoped>
    .todo_list {
        ul {
            margin-left: 0px;
            border: 1px solid #ddd;
            border-radius: 2px;
            padding: 0px;
        }
    }
</style>