import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import {
  ContextMenu,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'

describe('context-menu', () => {
  it('renders ContextMenu as div element', () => {
    const wrapper = mount(ContextMenu)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders ContextMenuTrigger', () => {
    const wrapper = mount({
      template: `
        <ContextMenu>
          <ContextMenuTrigger>Right click</ContextMenuTrigger>
        </ContextMenu>
      `,
      components: { ContextMenu, ContextMenuTrigger },
    })

    expect(wrapper.findComponent(ContextMenuTrigger).exists()).toBe(true)
  })

  it('renders ContextMenuSeparator with data-slot', () => {
    const wrapper = mount(ContextMenuSeparator)

    expect(wrapper.attributes('data-slot')).toBe('context-menu-separator')
  })

  it('renders ContextMenuSeparator with base classes', () => {
    const wrapper = mount(ContextMenuSeparator)

    expect(wrapper.classes()).toContain('bg-border')
    expect(wrapper.classes()).toContain('-mx-1')
  })

  it('applies custom class to ContextMenuSeparator', () => {
    const wrapper = mount(ContextMenuSeparator, {
      props: { class: 'custom-separator' },
    })

    expect(wrapper.classes()).toContain('custom-separator')
  })

  it('renders ContextMenuShortcut with data-slot', () => {
    const wrapper = mount(ContextMenuShortcut)

    expect(wrapper.attributes('data-slot')).toBe('context-menu-shortcut')
  })

  it('renders ContextMenuShortcut as span element', () => {
    const wrapper = mount(ContextMenuShortcut)

    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('renders ContextMenuShortcut with base classes', () => {
    const wrapper = mount(ContextMenuShortcut)

    expect(wrapper.classes()).toContain('text-muted-foreground')
    expect(wrapper.classes()).toContain('ml-auto')
    expect(wrapper.classes()).toContain('text-xs')
    expect(wrapper.classes()).toContain('tracking-widest')
  })

  it('renders ContextMenuShortcut with slot content', () => {
    const wrapper = mount(ContextMenuShortcut, {
      slots: { default: '⌘K' },
    })

    expect(wrapper.text()).toContain('⌘K')
  })

  it('applies custom class to ContextMenuShortcut', () => {
    const wrapper = mount(ContextMenuShortcut, {
      props: { class: 'custom-shortcut' },
    })

    expect(wrapper.classes()).toContain('custom-shortcut')
  })
})
