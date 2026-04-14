import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Sheet } from '@/components/ui/sheet'

describe('sheet', () => {
  it('renders Sheet as div element', () => {
    const wrapper = mount(Sheet)

    expect(wrapper.element.tagName).toBe('DIV')
  })
})
