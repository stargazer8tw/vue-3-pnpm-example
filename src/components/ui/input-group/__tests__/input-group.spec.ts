import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { InputGroup } from '@/components/ui/input-group'

describe('input-group', () => {
  it('renders InputGroup with data-slot', () => {
    const wrapper = mount(InputGroup)

    expect(wrapper.attributes('data-slot')).toBe('input-group')
  })

  it('renders InputGroup with role="group"', () => {
    const wrapper = mount(InputGroup)

    expect(wrapper.attributes('role')).toBe('group')
  })

  it('renders InputGroup with base classes', () => {
    const wrapper = mount(InputGroup)

    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('items-center')
    expect(wrapper.classes()).toContain('rounded-md')
    expect(wrapper.classes()).toContain('h-9')
  })

  it('renders InputGroup as div element', () => {
    const wrapper = mount(InputGroup)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('applies custom class to InputGroup', () => {
    const wrapper = mount(InputGroup, {
      props: { class: 'custom-input-group' },
    })

    expect(wrapper.classes()).toContain('custom-input-group')
  })
})
