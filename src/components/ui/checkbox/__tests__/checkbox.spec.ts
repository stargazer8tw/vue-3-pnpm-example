import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Checkbox } from '../'

describe('checkbox', () => {
  it('renders Checkbox with data-slot', () => {
    const wrapper = mount(Checkbox)

    expect(wrapper.attributes('data-slot')).toBe('checkbox')
  })

  it('renders Checkbox with base styling classes', () => {
    const wrapper = mount(Checkbox)

    expect(wrapper.classes()).toContain('peer')
    expect(wrapper.classes()).toContain('border-input')
    expect(wrapper.classes()).toContain('size-4')
    expect(wrapper.classes()).toContain('rounded-[4px]')
  })

  it('renders Checkbox as button element', () => {
    const wrapper = mount(Checkbox)

    expect(wrapper.element.tagName).toBe('BUTTON')
  })

  it('renders Checkbox unchecked state by default', () => {
    const wrapper = mount(Checkbox)

    expect(wrapper.attributes('data-state')).toBe('unchecked')
  })

  it('renders Checkbox with disabled state', () => {
    const wrapper = mount(Checkbox, {
      props: { disabled: true },
    })

    expect(wrapper.classes()).toContain('disabled:cursor-not-allowed')
    expect(wrapper.classes()).toContain('disabled:opacity-50')
  })

  it('applies custom class to Checkbox', () => {
    const wrapper = mount(Checkbox, {
      props: { class: 'custom-checkbox' },
    })

    expect(wrapper.classes()).toContain('custom-checkbox')
  })

  it('renders Checkbox with checked styling class when checked', () => {
    const wrapper = mount(Checkbox, {
      props: { checked: true },
    })

    expect(wrapper.classes()).toContain('data-[state=checked]:bg-primary')
  })

  it('renders label class styling', () => {
    const wrapper = mount(Checkbox)

    expect(wrapper.classes()).toContain('border')
    expect(wrapper.classes()).toContain('shadow-xs')
  })
})
