import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Command } from '@/components/ui/command'

describe('command', () => {
  it('renders Command with data-slot', () => {
    const wrapper = mount(Command)

    expect(wrapper.attributes('data-slot')).toBe('command')
  })

  it('renders Command with base classes', () => {
    const wrapper = mount(Command)

    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('flex-col')
    expect(wrapper.classes()).toContain('rounded-md')
  })

  it('renders Command as div element', () => {
    const wrapper = mount(Command)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('applies custom class to Command', () => {
    const wrapper = mount(Command, {
      props: { class: 'custom-command' },
    })

    expect(wrapper.classes()).toContain('custom-command')
  })

  it('renders Command with default modelValue', () => {
    const wrapper = mount(Command)

    expect(wrapper.props('modelValue')).toBe('')
  })
})
