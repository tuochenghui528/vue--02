export default {
    install(Vue) {
        //全局过滤器
        Vue.filter('mySlice', function(value) {
            return value.slice(0, 4)
        });
        Vue.directive('fbinds', {
            //指令与元素成功绑定时(一上来)
            bind(element, binding) {
                console.log(this);//window
                element.value = binding.value;
            },
            //指令所在元素被插入页面时
            inserted(element, binding) {
                element.focus();
            },
            //指令所在模板被重新解析时
            update(element, binding) {
                element.value = binding.value;
            }
        });
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            }
        })
        Vue.prototype.hello = () => {alert('你好啊')}
    }
}