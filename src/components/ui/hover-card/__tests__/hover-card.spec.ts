import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { HoverCard } from '@/components/ui/hover-card'

describe('hover-card', () => {
  it('renders HoverCard as div element', () => {
    const wrapper = mount(HoverCard)

    expect(wrapper.element.tagName).toBe('DIV')
  })
})
