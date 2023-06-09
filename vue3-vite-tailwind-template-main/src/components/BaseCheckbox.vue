<script setup>
 const props = defineProps({
        label:{
            type:String,
            default:''
        },
        modelValue:{
            type:Boolean,
            default:false
        },
    })
</script>

<template>
    <input type="checkbox" :checked="modelValue" 
    @change="$emit('update:modelValue',$event.target.checked)"
    class="mr-2" />
    <label v-if="label">{{ label }}</label>
</template>

<style scoped>

</style>