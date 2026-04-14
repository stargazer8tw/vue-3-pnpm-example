import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Item } from '@/components/ui/item'

describe('item', () => {
  it('renders Item with data-slot', () => {
    const wrapper = mount(Item)

    expect(wrapper.attributes('data-slot')).toBe('item')
  })

  it('renders Item as div element by default', () => {
    const wrapper = mount(Item)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('applies custom class to Item', () => {
    const wrapper = mount(Item, {
      props: { class: 'custom-item' },
    })

    expect(wrapper.classes()).toContain('custom-item')
  })
})
