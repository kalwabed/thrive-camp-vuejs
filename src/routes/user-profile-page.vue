<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
const user = ref()
const isLoading = ref(false)

const { params } = useRoute()
const userId = params.userId

watchEffect(async () => {
  isLoading.value = true
  const fetchedUser = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
  const jsonUser = await fetchedUser.json()
  user.value = jsonUser
  isLoading.value = false
})
</script>

<template>
  <b>
    {{ user?.name }}
  </b>
</template>
