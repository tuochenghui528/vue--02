<template>
    <li>
      <label>
          <input type="checkbox" :checked="todoItem.done" @change="handle(todoItem.id)"/>
          <!-- 如下代码也能实现勾选，但是不推介，因为违反了原则，修改了props  只不过修改的todoItem是对象引用类型的属性 所以vue没监测到 -->
        <!-- <input type="checkbox" :checked="todoItem.done" v-model="todoItem.done"/> -->
        <span>{{ todoItem.title }}</span>
      </label>
      <button class="btn-danger btn" @click="deleteTodoItem(todoItem.id)">删除</button>
    </li>
</template>

<script>
export default {
    name: 'TodoItem',
    props: ['todoItem', 'getChecked', 'deleteTodo'],
    data() {
        return {
            
        }
    },
    methods:{
        handle(id) {
            this.getChecked(id);
        },
        deleteTodoItem(id) {
            if (confirm('是否确定删除')) {
                this.deleteTodo(id);
            }
        }
    }
};
</script>

<style lang="less" scoped>
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
        &:last-child {
        border-bottom: none;
        }
        &:hover {
            background: #ddd;
            button {
                display: block;
            }
        }
        button {
            float: right;
            display: none;
            margin-top: 3px;
        }
        .btn-danger {
            color: #fff;
            background-color: #da4f49;
            border: 1px solid #bd362f;
        }
        .btn {
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