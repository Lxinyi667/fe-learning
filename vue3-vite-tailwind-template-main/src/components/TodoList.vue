<script setup>
    import { useTodoListStore } from '@/stores/todoList'
    import { storeToRefs } from 'pinia'
    const store = useTodoListStore();
    const { todoList } = storeToRefs(store)
    const { toggleComplexed,deleteTodo } = store
</script>

<template>
    <div v-for="todo in todoList" :key="todo.id" class="list">
        <div class="item">
            <span :class="{ completed: todo.completed}">{{ todo.item }}</span>
            <span @click.stop="toggleComplexed(todo.id)">✔️</span>
            <span @click="deleteTodo(todo.id)">❌</span>
        </div>
    </div>
</template>

<style scoped>
    .completed{
        text-decoration: line-through;
    }
</style>


