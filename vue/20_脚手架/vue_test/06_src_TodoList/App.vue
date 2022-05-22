<template>
    <div class="todo_content">
        <div class="todo_wrap">
            <TodoHeader :add="add"></TodoHeader>
            <TodoList :todoList="todoList" :getChecked="getChecked" :deleteTodo="deleteTodo"></TodoList>
            <TodoFooter :todoList="todoList" :todosAllChecked="todosAllChecked" :clearChecked="clearChecked"></TodoFooter>
        </div>
    </div>
</template>

<script>
import TodoHeader from './components/todoHeader.vue'
import TodoList from './components/todoList.vue'
import TodoFooter from './components/todoFooter.vue'
    export default {
        name: 'App',
        components: {
            TodoHeader,
            TodoList,
            TodoFooter
        },
        data(){
            return {
                todoList: [
                    {id: '001', title: '抽烟', done: true},
                    {id: '002', title: '喝酒', done: false},
                    {id: '003', title: '烫头', done: true}
                ]
            }
        },
        methods: {
            //添加操作
            add(todoItem) {
                this.todoList.unshift(todoItem);
            },
            //勾选操作
            getChecked(id) {
                this.todoList.forEach(todo => {
                    if(todo.id === id) todo.done = !todo.done;
                });
            },
            //删除操作
            deleteTodo(id) {
                this.todoList = this.todoList.filter(item => item.id !== id);
            },
            //全选操作
            todosAllChecked(checked) {
                this.todoList.forEach(todo => todo.done = checked)
            },
            //清楚所有已完成项
            clearChecked() {
                this.todoList = this.todoList.filter(todo => !todo.done);
            }
        }
    }
</script>

<style lang="less" scoped>
    .todo_content {
        width: 600px;
        margin: 0 auto;
        .todo_wrap {
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
    }
</style>