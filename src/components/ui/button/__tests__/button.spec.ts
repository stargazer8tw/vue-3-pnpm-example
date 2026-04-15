import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Button, buttonVariants } from '../'

describe('button', () => {
  it('renders with default variant and size', () => {
    const wrapper = mount(Button, {
      props: {},
      slots: { default: 'Click me' },
    })

    expect(wrapper.text()).toBe('Click me')
    expect(wrapper.attributes('data-slot')).toBe('button')
    expect(wrapper.attributes('data-variant')).toBe('default')
    expect(wrapper.attributes('data-size')).toBe('default')
    expect(wrapper.element.tagName).toBe('BUTTON')
  })

  it('renders with custom variant', () => {
    const wrapper = mount(Button, {
      props: { variant: 'destructive' },
      slots: { default: 'Delete' },
    })

    expect(wrapper.attributes('data-variant')).toBe('destructive')
  })

  it('renders with custom size', () => {
    const wrapper = mount(Button, {
      props: { size: 'icon' },
      slots: { default: 'Icon' },
    })

    expect(wrapper.attributes('data-size')).toBe('icon')
  })

  it('renders with different HTML element via as prop', () => {
    const wrapper = mount(Button, {
      props: { as: 'a' },
      slots: { default: 'Link' },
    })

    expect(wrapper.element.tagName).toBe('A')
  })

  it('handles disabled prop', () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
      slots: { default: 'Disabled' },
    })

    expect(wrapper.attributes('disabled')).toBe('')
  })

  it('applies custom class', () => {
    const wrapper = mount(Button, {
      props: { class: 'custom-class' },
      slots: { default: 'Button' },
    })

    expect(wrapper.classes()).toContain('custom-class')
  })

  it('buttonVariants generates correct classes for default', () => {
    const classes = buttonVariants({})
    expect(classes).toContain('inline-flex')
    expect(classes).toContain('items-center')
  })

  it('buttonVariants generates correct classes for variant', () => {
    const classes = buttonVariants({ variant: 'destructive' })
    expect(classes).toContain('bg-destructive')
  })

  it('buttonVariants generates correct classes for size', () => {
    const classes = buttonVariants({ size: 'lg' })
    expect(classes).toContain('h-10')
  })
})
