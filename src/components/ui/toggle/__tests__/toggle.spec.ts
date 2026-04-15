import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Toggle } from '../'

describe('toggle', () => {
  it('renders Toggle with data-slot', () => {
    const wrapper = mount(Toggle)

    expect(wrapper.attributes('data-slot')).toBe('toggle')
  })

  it('renders Toggle with base classes', () => {
    const wrapper = mount(Toggle)

    expect(wrapper.classes()).toContain('inline-flex')
    expect(wrapper.classes()).toContain('items-center')
    expect(wrapper.classes()).toContain('justify-center')
    expect(wrapper.classes()).toContain('rounded-md')
  })

  it('renders Toggle as button element', () => {
    const wrapper = mount(Toggle)

    expect(wrapper.element.tagName).toBe('BUTTON')
  })

  it('renders Toggle with default variant', () => {
    const wrapper = mount(Toggle)

    expect(wrapper.classes()).toContain('bg-transparent')
  })

  it('renders Toggle with outline variant', () => {
    const wrapper = mount(Toggle, {
      props: { variant: 'outline' },
    })

    expect(wrapper.classes()).toContain('border')
    expect(wrapper.classes()).toContain('border-input')
  })

  it('renders Toggle with default size', () => {
    const wrapper = mount(Toggle)

    expect(wrapper.classes()).toContain('h-9')
    expect(wrapper.classes()).toContain('px-2')
  })

  it('renders Toggle with sm size', () => {
    const wrapper = mount(Toggle, {
      props: { size: 'sm' },
    })

    expect(wrapper.classes()).toContain('h-8')
    expect(wrapper.classes()).toContain('px-1.5')
  })

  it('renders Toggle with lg size', () => {
    const wrapper = mount(Toggle, {
      props: { size: 'lg' },
    })

    expect(wrapper.classes()).toContain('h-10')
    expect(wrapper.classes()).toContain('px-2.5')
  })

  it('renders Toggle as disabled', () => {
    const wrapper = mount(Toggle, {
      props: { disabled: true },
    })

    expect(wrapper.attributes('disabled')).toBe('')
  })

  it('applies custom class to Toggle', () => {
    const wrapper = mount(Toggle, {
      props: { class: 'custom-toggle' },
    })

    expect(wrapper.classes()).toContain('custom-toggle')
  })
})
