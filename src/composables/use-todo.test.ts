import { describe, expect, test } from 'vitest'
import useTodo from './use-todo'

describe('test useTodo', () => {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodo()

  test('should return all todos', () => {
    expect(todos).toBeDefined()
    expect(todos.length).toBe(0)
  })

  test('should add a todo', () => {
    const todo = {
      id: 1,
      title: 'Test',
      completed: false
    }

    addTodo(todo)
    expect(todos.length).toBe(1)
    expect(todos[0]).toEqual(todo)
  })

  test('should update a todo', () => {
    expect(todos.length).toBe(1)

    const updatedTodo = {
      id: 1,
      title: 'Test',
      completed: true
    }
    updateTodo(updatedTodo)
    expect(todos.length).toBe(1)
    expect(todos[0]).toEqual(updatedTodo)
  })

  test('should not update a todo', () => {
    expect(todos.length).toBe(1)

    const updatedTodo = {
      id: 4,
      title: 'Test',
      completed: true
    }

    expect(todos).not.toContainEqual(updatedTodo)
  })

  test('should remove a todo', () => {
    expect(todos.length).toBe(1)
    const todoId = 1

    expect(todos[0].id).toBe(todoId)

    deleteTodo(todoId)
    expect(todos.length).toBe(0)
  })
})
