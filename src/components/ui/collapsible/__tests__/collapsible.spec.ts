import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Collapsible } from '@/components/ui/collapsible'

describe('collapsible', () => {
  it('renders Collapsible as div element', () => {
    const wrapper = mount(Collapsible)

    expect(wrapper.element.tagName).toBe('DIV')
  })
})
