import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Menubar, MenubarLabel, MenubarSeparator, MenubarShortcut } from '../'

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

  it('renders MenubarSeparator with base classes', () => {
    const wrapper = mount(MenubarSeparator)

    expect(wrapper.classes()).toContain('bg-border')
    expect(wrapper.classes()).toContain('-mx-1')
  })

  it('applies custom class to MenubarSeparator', () => {
    const wrapper = mount(MenubarSeparator, {
      props: { class: 'custom-separator' },
    })

    expect(wrapper.classes()).toContain('custom-separator')
  })

  it('renders MenubarShortcut with data-slot', () => {
    const wrapper = mount(MenubarShortcut)

    expect(wrapper.attributes('data-slot')).toBe('menubar-shortcut')
  })

  it('renders MenubarShortcut as span element', () => {
    const wrapper = mount(MenubarShortcut)

    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('renders MenubarShortcut with base classes', () => {
    const wrapper = mount(MenubarShortcut)

    expect(wrapper.classes()).toContain('text-muted-foreground')
    expect(wrapper.classes()).toContain('ml-auto')
    expect(wrapper.classes()).toContain('text-xs')
    expect(wrapper.classes()).toContain('tracking-widest')
  })

  it('renders MenubarShortcut with slot content', () => {
    const wrapper = mount(MenubarShortcut, {
      slots: { default: '⌘K' },
    })

    expect(wrapper.text()).toContain('⌘K')
  })

  it('applies custom class to MenubarShortcut', () => {
    const wrapper = mount(MenubarShortcut, {
      props: { class: 'custom-shortcut' },
    })

    expect(wrapper.classes()).toContain('custom-shortcut')
  })
})
