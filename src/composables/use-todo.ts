import { onMounted, onUnmounted, onUpdated, reactive, ref, watch, watchEffect } from 'vue'

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export default function useTodo() {
  const todos = reactive<Todo[]>([])
  const isDeleted = ref<boolean>(false)
  // state lain...

  onMounted(async () => {
    const fetchedTodos = await fetch('https://jsonplaceholder.typicode.com/users/2/todos')
    const jsonTodos = await fetchedTodos.json()

    todos.push(...jsonTodos)
  })

  // watch()

  // useEffect(
  //   () => {
  // mounted

  // return () => {
  // unmounted
  //   }
  // },
  // [
  // dependencies
  // ]
  // )

  // watch(
  //   () => todos,
  //   () => {
  //     console.table('watchme')
  //   },
  //   {
  //     deep: true
  //   }
  // )

  const addTodo = (todo: Todo) => {
    todos.push(todo)
  }

  const updateTodo = (updatedTodo: Todo) => {
    if (updatedTodo) {
      const todo = todos.find((todo) => todo.id === updatedTodo.id)
      if (todo) {
        todo.title = updatedTodo.title
        todo.completed = updatedTodo.completed
      }
    }
  }

  const deleteTodo = (id: number) => {
    console.log('🚀 ~ file: use-todo.ts:61 ~ deleteTodo ~ id:', id)
    isDeleted.value = !isDeleted.value
    const index = todos.findIndex((todo) => todo.id === id)
    if (index !== -1) {
      todos.splice(index, 1)
    }
  }

  return {
    addTodo,
    updateTodo,
    deleteTodo,
    todos
  }
}
