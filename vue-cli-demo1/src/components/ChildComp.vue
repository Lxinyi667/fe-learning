<script setup>
    defineProps({
        msg:String,
        list:Array,
    })
    // 通过defineEmits 注册了一个自定义事件changeMsg
    const emits = defineEmits(['changeMsg','changeList'])
    // 点击按钮的时候，触发emit 调用我们注册的事件 changeMsg;同时传递参数‘hello world’
    const onChangeMsg = () =>{
        emits('changeMsg','hello World')
    }

    const onChangeList = () =>{
        emits('changeList',[3,2,1])
    }
</script>
<template>
    <div>
        <p>msg:{{ msg }}</p>
        <!-- 子组件绑定了一个click事件，执行onChangeMsg方法 -->
        <button @click="onChangeMsg">改变msg</button>
        <!-- <button @click="onChangeMsg1">不改变</button> -->
        <p>list:{{ list }}</p>
        <button @click="onChangeList">改变list</button>
    </div>
</template>



<style scoped>

</style>