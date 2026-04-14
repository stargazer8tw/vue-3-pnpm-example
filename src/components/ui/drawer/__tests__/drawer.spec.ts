import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Drawer, DrawerHeader, DrawerFooter } from '@/components/ui/drawer'

describe('drawer', () => {
  it('renders Drawer as div element', () => {
    const wrapper = mount(Drawer)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders Drawer with default shouldScaleBackground', () => {
    const wrapper = mount(Drawer)

    expect(wrapper.props('shouldScaleBackground')).toBe(true)
  })

  it('renders DrawerHeader with data-slot', () => {
    const wrapper = mount(DrawerHeader)

    expect(wrapper.attributes('data-slot')).toBe('drawer-header')
  })

  it('renders DrawerFooter with data-slot', () => {
    const wrapper = mount(DrawerFooter)

    expect(wrapper.attributes('data-slot')).toBe('drawer-footer')
  })
})
