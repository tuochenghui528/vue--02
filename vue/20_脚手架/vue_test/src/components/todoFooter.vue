<template>
  <div class="todo_footer" v-if="allTodos > 0">
    <label>
        <input type="checkbox" v-model="allChecked"/>
    </label>
    <span>已完成{{todoDone}} / 全部{{allTodos}}</span>
    <button class="btn btn-danger" @click="clearAllChecked">清除已完成任务</button>
  </div>
</template>

<script>
    export default {
        name: "TodoFooter",
        props: ["todoList"],
        computed: {
            allTodos() {
                return this.todoList.length
            },
            todoDone() {
                return this.todoList.reduce((pre, todo)=> pre + (todo.done ? 1 : 0), 0)
            },
            allChecked: {
                get() {
                    return this.todoDone === this.allTodos;
                },
                set(checked) {
                    // this.todosAllChecked(checked);
                    this.$emit('todosAllChecked', checked);
                }
                
            }
        },
        methods: {
            clearAllChecked() {
                if (confirm('是否确定清楚已完成项')) {
                    // this.clearChecked()
                    this.$emit('clearChecked')
                }
            }
        }
    };
</script>

<style lang="less" scoped>
    .todo_footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
        label {
            display: inline-block;
            margin-right: 20px;
            cursor: pointer;
        }
        button {
            float: right;
            margin-top: 5px;
        }
        .btn-danger {
            color: #fff;
            background-color: #da4f49;
            border: 1px solid #bd362f;
        }
        .btn {
            display: inline-block;
            padding: 4px 12px;
            margin-bottom: 0;
            font-size: 14px;
            line-height: 20px;
            text-align: center;
            vertical-align: middle;
            cursor: pointer;
            box-shadow: inset 0 1px 0 rgb(255 255 255 / 20%), 0 1px 2px rgb(0 0 0 / 5%);
            border-radius: 4px;
        }
    }
</style>