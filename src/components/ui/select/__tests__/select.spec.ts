import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Select } from '@/components/ui/select'

describe('select', () => {
  it('renders Select as div element', () => {
    const wrapper = mount(Select)

    expect(wrapper.element.tagName).toBe('DIV')
  })
})
