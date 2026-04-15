import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import {
  Drawer,
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../'

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

  it('renders DrawerHeader with base classes', () => {
    const wrapper = mount(DrawerHeader)

    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('flex-col')
    expect(wrapper.classes()).toContain('gap-1.5')
    expect(wrapper.classes()).toContain('p-4')
  })

  it('renders DrawerFooter with data-slot', () => {
    const wrapper = mount(DrawerFooter)

    expect(wrapper.attributes('data-slot')).toBe('drawer-footer')
  })

  it('renders DrawerFooter with base classes', () => {
    const wrapper = mount(DrawerFooter)

    expect(wrapper.classes()).toContain('mt-auto')
    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('flex-col')
    expect(wrapper.classes()).toContain('gap-2')
    expect(wrapper.classes()).toContain('p-4')
  })

  it('applies custom class to DrawerHeader', () => {
    const wrapper = mount(DrawerHeader, {
      props: { class: 'custom-header' },
    })

    expect(wrapper.classes()).toContain('custom-header')
  })

  it('applies custom class to DrawerFooter', () => {
    const wrapper = mount(DrawerFooter, {
      props: { class: 'custom-footer' },
    })

    expect(wrapper.classes()).toContain('custom-footer')
  })

  it('renders DrawerHeader with slot content', () => {
    const wrapper = mount(DrawerHeader, {
      slots: { default: 'Header Content' },
    })

    expect(wrapper.text()).toContain('Header Content')
  })

  it('renders DrawerFooter with slot content', () => {
    const wrapper = mount(DrawerFooter, {
      slots: { default: 'Footer Content' },
    })

    expect(wrapper.text()).toContain('Footer Content')
  })

  it('renders DrawerTrigger with data-slot', () => {
    const wrapper = mount({
      template: `
        <Drawer>
          <DrawerTrigger>Open Drawer</DrawerTrigger>
        </Drawer>
      `,
      components: { Drawer, DrawerTrigger },
    })

    expect(wrapper.findComponent(DrawerTrigger).attributes('data-slot')).toBe('drawer-trigger')
  })

  it('renders DrawerTrigger as button element', () => {
    const wrapper = mount({
      template: `
        <Drawer>
          <DrawerTrigger>Open Drawer</DrawerTrigger>
        </Drawer>
      `,
      components: { Drawer, DrawerTrigger },
    })

    expect(wrapper.findComponent(DrawerTrigger).element.tagName).toBe('BUTTON')
  })

  it('renders DrawerTrigger with slot content', () => {
    const wrapper = mount({
      template: `
        <Drawer>
          <DrawerTrigger>Open Drawer</DrawerTrigger>
        </Drawer>
      `,
      components: { Drawer, DrawerTrigger },
    })

    expect(wrapper.findComponent(DrawerTrigger).text()).toContain('Open Drawer')
  })
})
