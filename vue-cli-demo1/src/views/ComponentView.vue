<template>
  <div>
    <h2>父子组件</h2>
    <p>父组件传参，子组件接受值，子组件派发事件</p>
    <ChildComp :msg ="msg" :list="list" @ChangeMsg="changeMsg" @ChangeList="changeList" >
    </ChildComp>
  </div>
 <!-- <h2>----VUE USE----</h2>
  <div v-if="isSupported">
    <note>
      Clipboard Permission: read <b>{{ permissionRead }}</b> | write
      <b>{{ permissionWrite }}</b>
    </note>
    <p>
      Current copied: <code>{{ text || 'none' }}</code>
    </p>
    <input v-model="input" type="text">
    <button @click="copy(input)">
      Copy
    </button>
  </div>
  <p v-else>
    Your browser does not support Clipboard API
  </p> -->


  <!-- <UseDark v-slot="{ isDark, toggleDark }">
  <button @click="toggleDark()">
    Is Dark: {{ isDark }}
  </button>
</UseDark> -->
<!-- <div ref="el" class="flex flex-col gap-2 p-4 w-300px h-300px m-auto overflow-y-scroll bg-gray-500/5 rounded">
    <div v-for="item in data" :key="item" class="h-30 bg-gray-500/5 rounded p-3">
      {{ item }}
    </div>
  </div> -->
</template>


<script setup>
  import { ref,reactive } from 'vue';
  import ChildComp from '../components/ChildComp.vue';
  
// vue-use
// import { useClipboard, usePermission } from '@vueuse/core';
// import { useInfiniteScroll } from '@vueuse/core'
// const el = ref<HTMLElement | null>(null)
// const data = ref([1, 2, 3, 4, 5, 6])
// useInfiniteScroll(
//   el,
//   () => {
//     const length = data.value.length + 1
//     data.value.push(...Array.from({ length: 5 }, (_, i) => length + i))
//   },
//   { distance: 10 },
// )
// const input = ref('')
// const { text, isSupported, copy } = useClipboard()
// const permissionRead = usePermission('clipboard-read')
// const permissionWrite = usePermission('clipboard-write')


// 


  const msg = ref('你好啊')
  const list = reactive([1,2,3])
  const changeMsg =(str) =>{
    msg.value = str
    
  }
 const changeList = (arr)=>{
  list.splice(0,list.length , ...arr)
 }
</script>




<style  scoped>
*{
  margin: 10px auto;
  padding:0;
  width: 80%;
}
</style>