<script setup lang="ts">
import { reactive, ref } from 'vue'

const msg = ref('Thrive vuejs')
const todos = reactive([])

function handleSubmit() {
  // setData([...todos, msg.value])
  todos.push(msg.value)
  console.log(todos)
}
</script>

<template>
  <h1>Hello world!</h1>
  <form @reset="msg = ''" @submit.prevent="handleSubmit">
    <input v-model="msg" />
    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
  </form>

  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      <span v-show="index < 3">
        {{ todo }}
      </span>
    </li>
  </ul>
</template>
