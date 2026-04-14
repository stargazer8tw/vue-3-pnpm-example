import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Popover } from '@/components/ui/popover'

describe('popover', () => {
  it('renders Popover as div element', () => {
    const wrapper = mount(Popover)

    expect(wrapper.element.tagName).toBe('DIV')
  })
})
