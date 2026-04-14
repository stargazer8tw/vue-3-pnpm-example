import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { RadioGroup } from '@/components/ui/radio-group'

describe('radio-group', () => {
  it('renders RadioGroup with data-slot', () => {
    const wrapper = mount(RadioGroup)

    expect(wrapper.attributes('data-slot')).toBe('radio-group')
  })

  it('renders RadioGroup with base classes', () => {
    const wrapper = mount(RadioGroup)

    expect(wrapper.classes()).toContain('grid')
    expect(wrapper.classes()).toContain('gap-3')
  })

  it('renders RadioGroup as div element', () => {
    const wrapper = mount(RadioGroup)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('applies custom class to RadioGroup', () => {
    const wrapper = mount(RadioGroup, {
      props: { class: 'custom-radio-group' },
    })

    expect(wrapper.classes()).toContain('custom-radio-group')
  })
})
