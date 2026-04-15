import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Input } from '../'

describe('input', () => {
  it('renders Input with data-slot', () => {
    const wrapper = mount(Input)

    expect(wrapper.attributes('data-slot')).toBe('input')
  })

  it('renders Input with base styling classes', () => {
    const wrapper = mount(Input)

    expect(wrapper.classes()).toContain('file:text-foreground')
    expect(wrapper.classes()).toContain('placeholder:text-muted-foreground')
    expect(wrapper.classes()).toContain('border-input')
    expect(wrapper.classes()).toContain('h-9')
    expect(wrapper.classes()).toContain('rounded-md')
  })

  it('renders Input element', () => {
    const wrapper = mount(Input)

    expect(wrapper.element.tagName).toBe('INPUT')
  })

  it('renders Input with custom type', () => {
    const wrapper = mount(Input, {
      props: { type: 'email' },
    })

    expect(wrapper.attributes('type')).toBe('email')
  })

  it('renders Input with password type', () => {
    const wrapper = mount(Input, {
      props: { type: 'password' },
    })

    expect(wrapper.attributes('type')).toBe('password')
  })

  it('renders Input with number type', () => {
    const wrapper = mount(Input, {
      props: { type: 'number' },
    })

    expect(wrapper.attributes('type')).toBe('number')
  })

  it('renders Input with placeholder', () => {
    const wrapper = mount(Input, {
      props: { placeholder: 'Enter text' },
    })

    expect(wrapper.attributes('placeholder')).toBe('Enter text')
  })

  it('renders Input with disabled state', () => {
    const wrapper = mount(Input, {
      props: { disabled: true },
    })

    expect(wrapper.attributes('disabled')).toBe('')
    expect(wrapper.classes()).toContain('disabled:pointer-events-none')
    expect(wrapper.classes()).toContain('disabled:opacity-50')
  })

  it('applies custom class to Input', () => {
    const wrapper = mount(Input, {
      props: { class: 'custom-input' },
    })

    expect(wrapper.classes()).toContain('custom-input')
  })

  it('renders as input element', () => {
    const wrapper = mount(Input)

    expect(wrapper.element.tagName).toBe('INPUT')
  })

  it('binds v-model', async () => {
    const wrapper = mount(Input, {
      props: { modelValue: 'initial' },
    })

    expect(wrapper.element.value).toBe('initial')
  })
})
