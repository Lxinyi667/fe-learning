<script setup>
// import { toRefs ,ref,computed,watch} from 'vue';
// const user = {
//   author:'Evan You',
//   title:'Vue 作者',
//   age: 36
// }
// let {author ,  age} = toRefs(user);

// const changeValue = () =>{
//   author.value='尤雨溪',
//   age.value++;
//   age1.value++;
//   console.log(user);
// }
// const count = ref(0)
// const changeCount = () =>{
//   count.value++;
// }
// // 计算属性
// const add = computed(() => count.value +2)

// const str = ref('此时此刻')
// const age1 = ref(18)

// let info = reactive({
//   id:1,
//   title:'软件2242',
// })
// // 两秒后改变str的值
// setTimeout(()=>{
//   // str.value = '彼时彼刻'
//   info.id = 2
// },3000);
// // watch([str,age1],(newValue,oldValue) =>{
// //   console.log(newValue + "," + oldValue)
// // })
// watch(()=> info.id,(newValue,oldValue) =>{
//   console.log(newValue + "," + oldValue)
// })
</script>

<template>
  <div>
    <h1>reactive响应式</h1>
    <h2>项目：{{user.project }}</h2>
    <h3>作者：{{ user.author }} 年龄 {{ user.age }}</h3>
    <button @click="change">改变</button>
  </div>
  <div>
    <h1>toRefs 非响应式</h1>
    <h2>项目：{{ project }}</h2>
    <h3>作者：{{ author }} 年龄 {{ age }}</h3>
    <button @click="changeValue">改变</button>
  </div>
  <div>
    <h1>计算属性</h1>
    <button @click="changeCount">{{ add }}</button>
  </div>
</template>



<style  scoped>

</style>