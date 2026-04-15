import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from '@/components/ui/button-group'

describe('button-group', () => {
  it('renders ButtonGroup as div element', () => {
    const wrapper = mount(ButtonGroup)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders ButtonGroupSeparator with data-slot', () => {
    const wrapper = mount(ButtonGroupSeparator)

    expect(wrapper.attributes('data-slot')).toBe('button-group-separator')
  })

  it('renders ButtonGroupText as div element', () => {
    const wrapper = mount(ButtonGroupText)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders ButtonGroupText with role group', () => {
    const wrapper = mount(ButtonGroupText)

    expect(wrapper.attributes('role')).toBe('group')
  })

  it('renders ButtonGroupText with data-slot', () => {
    const wrapper = mount(ButtonGroupText)

    expect(wrapper.attributes('data-slot')).toBe('button-group')
  })

  it('renders ButtonGroupText with base classes', () => {
    const wrapper = mount(ButtonGroupText)

    expect(wrapper.classes()).toContain('bg-muted')
    expect(wrapper.classes()).toContain('flex')
  })
})
