import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Field } from '@/components/ui/field'

describe('field', () => {
  it('renders Field with data-slot', () => {
    const wrapper = mount(Field)

    expect(wrapper.attributes('data-slot')).toBe('field')
  })

  it('renders Field with role="group"', () => {
    const wrapper = mount(Field)

    expect(wrapper.attributes('role')).toBe('group')
  })

  it('renders Field with base classes', () => {
    const wrapper = mount(Field)

    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('w-full')
    expect(wrapper.classes()).toContain('gap-3')
  })

  it('renders Field as div element', () => {
    const wrapper = mount(Field)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders Field with horizontal orientation', () => {
    const wrapper = mount(Field, {
      props: { orientation: 'horizontal' },
    })

    expect(wrapper.attributes('data-orientation')).toBe('horizontal')
  })

  it('applies custom class to Field', () => {
    const wrapper = mount(Field, {
      props: { class: 'custom-field' },
    })

    expect(wrapper.classes()).toContain('custom-field')
  })
})
