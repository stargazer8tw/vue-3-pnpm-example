import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import {
  Item,
  ItemTitle,
  ItemDescription,
  ItemContent,
  ItemHeader,
  ItemFooter,
  ItemMedia,
  ItemActions,
  ItemSeparator,
} from '@/components/ui/item'

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

  it('renders ItemTitle with data-slot', () => {
    const wrapper = mount(ItemTitle)

    expect(wrapper.attributes('data-slot')).toBe('item-title')
  })

  it('renders ItemTitle as div element', () => {
    const wrapper = mount(ItemTitle)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders ItemDescription with data-slot', () => {
    const wrapper = mount(ItemDescription)

    expect(wrapper.attributes('data-slot')).toBe('item-description')
  })

  it('renders ItemContent with data-slot', () => {
    const wrapper = mount(ItemContent)

    expect(wrapper.attributes('data-slot')).toBe('item-content')
  })

  it('renders ItemHeader with data-slot', () => {
    const wrapper = mount(ItemHeader)

    expect(wrapper.attributes('data-slot')).toBe('item-header')
  })

  it('renders ItemFooter with data-slot', () => {
    const wrapper = mount(ItemFooter)

    expect(wrapper.attributes('data-slot')).toBe('item-footer')
  })

  it('renders ItemMedia with data-slot', () => {
    const wrapper = mount(ItemMedia)

    expect(wrapper.attributes('data-slot')).toBe('item-media')
  })

  it('renders ItemActions with data-slot', () => {
    const wrapper = mount(ItemActions)

    expect(wrapper.attributes('data-slot')).toBe('item-actions')
  })

  it('renders ItemSeparator with data-slot', () => {
    const wrapper = mount(ItemSeparator)

    expect(wrapper.attributes('data-slot')).toBe('item-separator')
  })
})
