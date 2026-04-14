import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Sheet, SheetHeader, SheetFooter } from '@/components/ui/sheet'

describe('sheet', () => {
  it('renders Sheet as div element', () => {
    const wrapper = mount(Sheet)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders SheetHeader with data-slot', () => {
    const wrapper = mount(SheetHeader)

    expect(wrapper.attributes('data-slot')).toBe('sheet-header')
  })

  it('renders SheetFooter with data-slot', () => {
    const wrapper = mount(SheetFooter)

    expect(wrapper.attributes('data-slot')).toBe('sheet-footer')
  })
})
