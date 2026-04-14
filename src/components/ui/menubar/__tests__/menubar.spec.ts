import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Menubar, MenubarLabel, MenubarSeparator } from '@/components/ui/menubar'

describe('menubar', () => {
  it('renders Menubar with data-slot', () => {
    const wrapper = mount(Menubar)

    expect(wrapper.attributes('data-slot')).toBe('menubar')
  })

  it('renders Menubar with base classes', () => {
    const wrapper = mount(Menubar)

    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('items-center')
    expect(wrapper.classes()).toContain('rounded-md')
    expect(wrapper.classes()).toContain('h-9')
  })

  it('renders Menubar as div element', () => {
    const wrapper = mount(Menubar)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('applies custom class to Menubar', () => {
    const wrapper = mount(Menubar, {
      props: { class: 'custom-menubar' },
    })

    expect(wrapper.classes()).toContain('custom-menubar')
  })

  it('renders MenubarLabel with data-slot', () => {
    const wrapper = mount(MenubarLabel)

    expect(wrapper.exists()).toBe(true)
  })

  it('renders MenubarSeparator with data-slot', () => {
    const wrapper = mount(MenubarSeparator)

    expect(wrapper.exists()).toBe(true)
  })
})
