<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { RouterView, useRoute, onBeforeRouteUpdate } from 'vue-router'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

const posts = ref<Post[]>([])
const isLoading = ref(false)

const { params } = useRoute()
const userId = params.userId

watchEffect(async () => {
  isLoading.value = true
  const fetchedPosts = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
  const jsonPosts = await fetchedPosts.json()
  posts.value = jsonPosts
  isLoading.value = false
})
</script>

<template>
  <div class="margin-top">
    <RouterLink to="/">Back</RouterLink>
    <RouterLink :to="`${userId}/profile`" class="margin-left">Profile</RouterLink>
    <h1>{{ userId }}</h1>

    <RouterView />

    <div class="wrapper">
      <div v-if="isLoading" class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-for="post in posts" :key="post.id" class="card" style="width: 20rem">
        <div class="card-body">
          <h4 class="card-title">{{ post.title }}</h4>
          <p class="card-text">
            {{ post.body }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}
</style>
