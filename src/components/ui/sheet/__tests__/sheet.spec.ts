import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import {
  Sheet,
  SheetClose,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../'

describe('sheet', () => {
  it('renders Sheet as div element', () => {
    const wrapper = mount(Sheet)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders SheetHeader with data-slot', () => {
    const wrapper = mount(SheetHeader)

    expect(wrapper.attributes('data-slot')).toBe('sheet-header')
  })

  it('renders SheetHeader with base classes', () => {
    const wrapper = mount(SheetHeader)

    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('flex-col')
    expect(wrapper.classes()).toContain('gap-1.5')
    expect(wrapper.classes()).toContain('p-4')
  })

  it('renders SheetFooter with data-slot', () => {
    const wrapper = mount(SheetFooter)

    expect(wrapper.attributes('data-slot')).toBe('sheet-footer')
  })

  it('renders SheetFooter with base classes', () => {
    const wrapper = mount(SheetFooter)

    expect(wrapper.classes()).toContain('mt-auto')
    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('flex-col')
    expect(wrapper.classes()).toContain('gap-2')
    expect(wrapper.classes()).toContain('p-4')
  })

  it('renders SheetTrigger with data-slot', () => {
    const wrapper = mount({
      template: `
        <Sheet>
          <SheetTrigger>Open Sheet</SheetTrigger>
        </Sheet>
      `,
      components: { Sheet, SheetTrigger },
    })

    expect(wrapper.findComponent(SheetTrigger).attributes('data-slot')).toBe('sheet-trigger')
  })

  it('renders SheetTrigger as button element', () => {
    const wrapper = mount({
      template: `
        <Sheet>
          <SheetTrigger>Open Sheet</SheetTrigger>
        </Sheet>
      `,
      components: { Sheet, SheetTrigger },
    })

    expect(wrapper.findComponent(SheetTrigger).element.tagName).toBe('BUTTON')
  })

  it('applies custom class to SheetHeader', () => {
    const wrapper = mount(SheetHeader, {
      props: { class: 'custom-header' },
    })

    expect(wrapper.classes()).toContain('custom-header')
  })

  it('applies custom class to SheetFooter', () => {
    const wrapper = mount(SheetFooter, {
      props: { class: 'custom-footer' },
    })

    expect(wrapper.classes()).toContain('custom-footer')
  })

  it('applies custom class to SheetTrigger', () => {
    const wrapper = mount({
      template: `
        <Sheet>
          <SheetTrigger class="custom-trigger">Open Sheet</SheetTrigger>
        </Sheet>
      `,
      components: { Sheet, SheetTrigger },
    })

    expect(wrapper.findComponent(SheetTrigger).classes()).toContain('custom-trigger')
  })

  it('renders SheetHeader with slot content', () => {
    const wrapper = mount(SheetHeader, {
      slots: { default: 'Header Content' },
    })

    expect(wrapper.text()).toContain('Header Content')
  })

  it('renders SheetFooter with slot content', () => {
    const wrapper = mount(SheetFooter, {
      slots: { default: 'Footer Content' },
    })

    expect(wrapper.text()).toContain('Footer Content')
  })

  it('renders SheetTrigger with slot content', () => {
    const wrapper = mount({
      template: `
        <Sheet>
          <SheetTrigger>Open Sheet</SheetTrigger>
        </Sheet>
      `,
      components: { Sheet, SheetTrigger },
    })

    expect(wrapper.findComponent(SheetTrigger).text()).toContain('Open Sheet')
  })
})
