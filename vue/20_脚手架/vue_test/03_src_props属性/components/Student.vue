<template>
  <div>
      <h1>{{msg}}</h1>
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <h2>学生年龄：{{myAge}}</h2>
      <button @click="updateAge">点我修改年龄</button>
  </div>
</template>

<script>
export default {
    name: 'Student',
    //简单声明接收
    // props: ['name', 'age', 'sex'],

    //接收的同时对数据进行类型限制
    // props: {
    //     name: String,
    //     age: Number,
    //     sex: String
    // }, 
    
    //接收的同时对数据进行  类型的限制+默认值的指定+必要性的限制
    props: {
        name: {
            type: String,
            required: true
        },
        age: {
            type:Number,
            default: 99
        },
        sex: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            msg: '我是清华大学的学生',
            myAge: this.age//props先于data挂载在vc上
        }
    },
    methods: {
        updateAge() {
            this.myAge++;//props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。
        }
    }
}
</script>

<style>

</style>