<script setup lang="ts">
import { reactive } from 'vue'
import type { Todo } from '@/composables/use-todo'
import useTodo from '@/composables/use-todo'

const { deleteTodo } = useTodo()

const fetchedTodos = await fetch('https://jsonplaceholder.typicode.com/users/1/todos')
const jsonTodos: Todo[] = await fetchedTodos.json()

const todos = reactive(jsonTodos)
</script>

<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <span>
        {{ todo.title }}
      </span>
      <button @click="deleteTodo(todo.id)">❌</button>
    </li>
  </ul>
</template>
