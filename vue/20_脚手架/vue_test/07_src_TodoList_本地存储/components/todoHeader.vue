<template>
  <div class="todo_header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="addTodo">
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
    export default {
      name: 'TodoHeader',
      props:['add'],
      data() {
        return {
          title: ''
        }
      },
      methods: {
        addTodo() {
          if (!this.title.trim()) return;
          const todoItem = {id:nanoid(), title: this.title, done: false}
          this.add(todoItem);
          this.title = ''
        }
      }
    }
</script>

<style lang="less" scoped>
  .todo_header {
    input {
      width: 560px;
      height: 28px;
      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 4px 7px;
      &:focus {
        outline: none;
        border-color: rgba(82, 168, 236, 0.8);
        box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(82 168 236 / 60%);
      }
    }
  }
</style>