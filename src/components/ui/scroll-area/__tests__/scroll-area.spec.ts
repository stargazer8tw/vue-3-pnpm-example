import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { ScrollArea } from '@/components/ui/scroll-area'

describe('scroll-area', () => {
  it('renders ScrollArea with data-slot', () => {
    const wrapper = mount(ScrollArea)

    expect(wrapper.attributes('data-slot')).toBe('scroll-area')
  })

  it('renders ScrollArea with base classes', () => {
    const wrapper = mount(ScrollArea)

    expect(wrapper.classes()).toContain('relative')
  })

  it('renders ScrollArea as div element', () => {
    const wrapper = mount(ScrollArea)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders ScrollArea with viewport', () => {
    const wrapper = mount(ScrollArea)

    expect(wrapper.find('[data-slot="scroll-area-viewport"]').exists()).toBe(true)
  })

  it('applies custom class to ScrollArea', () => {
    const wrapper = mount(ScrollArea, {
      props: { class: 'custom-scroll' },
    })

    expect(wrapper.classes()).toContain('custom-scroll')
  })
})
