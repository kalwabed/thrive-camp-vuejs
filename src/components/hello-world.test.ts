import { render } from '@testing-library/vue'
import { test, expect, assert, describe } from 'vitest'
import HelloWorld from './hello-world.vue'

describe('test hello world component', () => {
  test('it should defined', () => {
    expect(HelloWorld, 'Hello world').toBeDefined()
  })

  test('it should render <h1>', () => {
    const { getByTestId } = render(HelloWorld, { props: { msg: 'Welcome' } })

    const message = getByTestId('message')
    expect(message).toBeDefined()
  })

  test('it should render welcome message', () => {
    const { getByTestId } = render(HelloWorld, { props: { msg: 'Welcome' } })

    const message = getByTestId('message')

    assert(message.textContent === 'Welcome')
  })

  test('it should not render welcome message', () => {
    const { getByTestId } = render(HelloWorld, { props: { msg: '' } })

    const message = getByTestId('message')

    assert(message.textContent === '')
  })

  test('it should be able to click a button', () => {
    const { getByTestId } = render(HelloWorld, { props: { msg: 'Welcome' } })

    const button = getByTestId('btn-msg')
    const message = getByTestId('message')

    assert(button.textContent === 'Click me')
    button.click()
  })
})
