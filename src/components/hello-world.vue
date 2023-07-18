<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  msg: string
}>()

const welcomeMessage = ref(props.msg)

const greet = 'greetings'

function showProps() {
  welcomeMessage.value = 'oit'
}
</script>

<template>
  <div :class="greet">
    <h1 data-testid="message" class="green">{{ welcomeMessage }}</h1>
    <button data-testid="btn-msg" @click="showProps">Click me</button>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
