import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import {
  DropdownMenu,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '../'

describe('dropdown-menu', () => {
  it('renders DropdownMenu as div element', () => {
    const wrapper = mount(DropdownMenu)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders DropdownMenuTrigger as button', () => {
    const wrapper = mount({
      template: `
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        </DropdownMenu>
      `,
      components: { DropdownMenu, DropdownMenuTrigger },
    })

    expect(wrapper.findComponent(DropdownMenuTrigger).exists()).toBe(true)
    expect(wrapper.findComponent(DropdownMenuTrigger).element.tagName).toBe('BUTTON')
  })

  it('renders DropdownMenuTrigger with data-slot', () => {
    const wrapper = mount({
      template: `
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        </DropdownMenu>
      `,
      components: { DropdownMenu, DropdownMenuTrigger },
    })

    expect(wrapper.findComponent(DropdownMenuTrigger).attributes('data-slot')).toBe(
      'dropdown-menu-trigger'
    )
  })

  it('renders DropdownMenuSeparator with data-slot', () => {
    const wrapper = mount(DropdownMenuSeparator)

    expect(wrapper.attributes('data-slot')).toBe('dropdown-menu-separator')
  })

  it('renders DropdownMenuSeparator with base classes', () => {
    const wrapper = mount(DropdownMenuSeparator)

    expect(wrapper.classes()).toContain('bg-border')
    expect(wrapper.classes()).toContain('-mx-1')
  })

  it('applies custom class to DropdownMenuSeparator', () => {
    const wrapper = mount(DropdownMenuSeparator, {
      props: { class: 'custom-separator' },
    })

    expect(wrapper.classes()).toContain('custom-separator')
  })

  it('renders DropdownMenuShortcut with data-slot', () => {
    const wrapper = mount(DropdownMenuShortcut)

    expect(wrapper.attributes('data-slot')).toBe('dropdown-menu-shortcut')
  })

  it('renders DropdownMenuShortcut as span element', () => {
    const wrapper = mount(DropdownMenuShortcut)

    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('renders DropdownMenuShortcut with base classes', () => {
    const wrapper = mount(DropdownMenuShortcut)

    expect(wrapper.classes()).toContain('text-muted-foreground')
    expect(wrapper.classes()).toContain('ml-auto')
    expect(wrapper.classes()).toContain('text-xs')
    expect(wrapper.classes()).toContain('tracking-widest')
  })

  it('renders DropdownMenuShortcut with slot content', () => {
    const wrapper = mount(DropdownMenuShortcut, {
      slots: { default: '⌘K' },
    })

    expect(wrapper.text()).toContain('⌘K')
  })

  it('applies custom class to DropdownMenuShortcut', () => {
    const wrapper = mount(DropdownMenuShortcut, {
      props: { class: 'custom-shortcut' },
    })

    expect(wrapper.classes()).toContain('custom-shortcut')
  })
})
