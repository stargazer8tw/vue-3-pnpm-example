import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { TagsInput } from '../'

describe('tags-input', () => {
  it('renders TagsInput with base classes', () => {
    const wrapper = mount(TagsInput)

    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('flex-wrap')
    expect(wrapper.classes()).toContain('gap-2')
    expect(wrapper.classes()).toContain('rounded-md')
  })

  it('renders TagsInput as div element', () => {
    const wrapper = mount(TagsInput)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('applies custom class to TagsInput', () => {
    const wrapper = mount(TagsInput, {
      props: { class: 'custom-tags-input' },
    })

    expect(wrapper.classes()).toContain('custom-tags-input')
  })
})
