import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { NumberField, NumberFieldContent } from '../'

describe('number-field', () => {
  it('renders NumberField as div element', () => {
    const wrapper = mount(NumberField)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders NumberFieldContent with base classes', () => {
    const wrapper = mount(NumberFieldContent)

    expect(wrapper.classes()).toContain('relative')
  })

  it('applies custom class to NumberFieldContent', () => {
    const wrapper = mount(NumberFieldContent, {
      props: { class: 'custom-content' },
    })

    expect(wrapper.classes()).toContain('custom-content')
  })
})
