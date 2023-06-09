<script setup>
import { ref } from 'vue';
import { useTodoListStore } from '@/stores/todoList';

import BaseButton from './BaseButton.vue';
import BaseInput from './BaseInput.vue';
const todo= ref('')
const store = useTodoListStore()

const addItemAndClear = (item) => {
    if (item.length === 0){
        return
    }
    store.addTodo(item)
    todo.value = ''
}

</script>

<template>
    <div>
        <form @submit.prevent="addItemAndClear(todo)">
            <BaseInput label="todo" type="text" v-model="todo"/>
            <div class="my-2">
                <BaseButton type="submit">提交</BaseButton>
            </div>
        </form>
    </div>
</template>

<style scoped>

</style>