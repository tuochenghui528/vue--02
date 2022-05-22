export const mixin1 = {
    methods: {
        showName() {
            alert(this.name);
        }
    }
}
export const mixin2 = {
    mounted() {
       console.log(123);
       name: '李四'
    }
}