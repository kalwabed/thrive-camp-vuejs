<script setup lang="ts">
import { Suspense } from 'vue'
import UserList from '@/components/user-list.vue'
</script>

<template>
  <div>
    <h1>Hello world!</h1>

    <Suspense>
      <UserList />
      <template #fallback> loading </template>
    </Suspense>
  </div>
</template>
