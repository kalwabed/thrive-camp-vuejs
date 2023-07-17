import './assets/main.css'

import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './routes/home-page.vue'
import UserDetailPage from './routes/user-detail-page.vue'
import App from './App.vue'
import UserProfilePage from './routes/user-profile-page.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    {
      path: '/:userId',
      component: UserDetailPage,
      children: [{ path: 'profile', component: UserProfilePage }]
    }
  ]
})

const app = createApp(App)

app.use(router)

app.mount('#app')
