<script setup lang="ts">
import { ref, Suspense } from 'vue'
import useTodo from '@/composables/use-todo'
import TodoList from './components/todo-list.vue'

const title = ref('')

const { addTodo } = useTodo()

function handleSubmit() {
  addTodo({
    id: Date.now(),
    title: title.value,
    completed: false
  })
}
</script>

<template>
  <h1>Hello world!</h1>
  <form @reset="title = ''" @submit.prevent="handleSubmit">
    <input v-model="title" />
    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
  </form>

  <Suspense>
    <TodoList />
    <template #fallback> loading </template>
  </Suspense>
</template>

<style scoped>
button {
  margin-left: 10px;
}
</style>
