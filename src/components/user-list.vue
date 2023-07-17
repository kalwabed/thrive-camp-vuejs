<script setup lang="ts">
import { RouterLink } from 'vue-router'

const fetchedUsers = await fetch('https://jsonplaceholder.typicode.com/users')
const users = await fetchedUsers.json()
</script>

<template>
  <ul>
    <li v-for="user in users" :key="user.id">
      <RouterLink :to="String(user?.id)">
        {{ user.name }}
      </RouterLink>
    </li>
  </ul>
</template>
