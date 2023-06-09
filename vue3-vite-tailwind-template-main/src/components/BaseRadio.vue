<script setup>
    const props = defineProps({
        label:{
            type:String,
            default:''
        },
        modelValue:{
            type:[String,Number],
            default:''
        },
        value:{
            type:[String,Number],
            required:true
        }
    })
</script>

<template>
    <input type="radio" class="mr-2" :checked="modelValue ===value" 
    :value="value" v-bind="$attrs" 
    @change="$emit('update:modelValue',value)"/>
    <label v-if="label">{{ label }}</label>
</template>

<style scoped>

</style>