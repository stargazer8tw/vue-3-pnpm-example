import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from '../'

describe('sidebar', () => {
  it('renders SidebarMenuItem with data-slot', () => {
    const wrapper = mount(SidebarMenuItem)

    expect(wrapper.attributes('data-slot')).toBe('sidebar-menu-item')
  })

  it('renders SidebarMenuItem as li element', () => {
    const wrapper = mount(SidebarMenuItem)

    expect(wrapper.element.tagName).toBe('LI')
  })

  it('applies custom class to SidebarMenuItem', () => {
    const wrapper = mount(SidebarMenuItem, {
      props: { class: 'custom-item' },
    })

    expect(wrapper.classes()).toContain('custom-item')
  })

  it('renders SidebarSeparator with data-slot', () => {
    const wrapper = mount(SidebarSeparator)

    expect(wrapper.attributes('data-slot')).toBe('sidebar-separator')
  })

  it('renders SidebarSeparator with base classes', () => {
    const wrapper = mount(SidebarSeparator)

    expect(wrapper.classes()).toContain('bg-sidebar-border')
    expect(wrapper.classes()).toContain('mx-2')
  })

  it('applies custom class to SidebarSeparator', () => {
    const wrapper = mount(SidebarSeparator, {
      props: { class: 'custom-separator' },
    })

    expect(wrapper.classes()).toContain('custom-separator')
  })

  it('renders SidebarMenu with data-slot', () => {
    const wrapper = mount(SidebarMenu)

    expect(wrapper.attributes('data-slot')).toBe('sidebar-menu')
  })

  it('renders SidebarMenu as ul element', () => {
    const wrapper = mount(SidebarMenu)

    expect(wrapper.element.tagName).toBe('UL')
  })

  it('renders SidebarMenu with base classes', () => {
    const wrapper = mount(SidebarMenu)

    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('flex-col')
  })

  it('applies custom class to SidebarMenu', () => {
    const wrapper = mount(SidebarMenu, {
      props: { class: 'custom-menu' },
    })

    expect(wrapper.classes()).toContain('custom-menu')
  })

  it('renders SidebarGroup with data-slot', () => {
    const wrapper = mount(SidebarGroup)

    expect(wrapper.attributes('data-slot')).toBe('sidebar-group')
  })

  it('applies custom class to SidebarGroup', () => {
    const wrapper = mount(SidebarGroup, {
      props: { class: 'custom-group' },
    })

    expect(wrapper.classes()).toContain('custom-group')
  })

  it('renders SidebarGroupContent with data-slot', () => {
    const wrapper = mount(SidebarGroupContent)

    expect(wrapper.attributes('data-slot')).toBe('sidebar-group-content')
  })

  it('applies custom class to SidebarGroupContent', () => {
    const wrapper = mount(SidebarGroupContent, {
      props: { class: 'custom-content' },
    })

    expect(wrapper.classes()).toContain('custom-content')
  })

  it('renders SidebarGroupLabel with data-slot', () => {
    const wrapper = mount(SidebarGroupLabel)

    expect(wrapper.attributes('data-slot')).toBe('sidebar-group-label')
  })

  it('renders SidebarGroupLabel as div element by default', () => {
    const wrapper = mount(SidebarGroupLabel)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders SidebarGroupAction with data-slot', () => {
    const wrapper = mount(SidebarGroupAction)

    expect(wrapper.attributes('data-slot')).toBe('sidebar-group-action')
  })

  it('renders SidebarContent with data-slot', () => {
    const wrapper = mount(SidebarContent)

    expect(wrapper.attributes('data-slot')).toBe('sidebar-content')
  })

  it('renders SidebarContent with base classes', () => {
    const wrapper = mount(SidebarContent)

    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('flex-col')
  })

  it('applies custom class to SidebarContent', () => {
    const wrapper = mount(SidebarContent, {
      props: { class: 'custom-content' },
    })

    expect(wrapper.classes()).toContain('custom-content')
  })

  it('renders SidebarFooter with data-slot', () => {
    const wrapper = mount(SidebarFooter)

    expect(wrapper.attributes('data-slot')).toBe('sidebar-footer')
  })

  it('applies custom class to SidebarFooter', () => {
    const wrapper = mount(SidebarFooter, {
      props: { class: 'custom-footer' },
    })

    expect(wrapper.classes()).toContain('custom-footer')
  })

  it('renders SidebarHeader with data-slot', () => {
    const wrapper = mount(SidebarHeader)

    expect(wrapper.attributes('data-slot')).toBe('sidebar-header')
  })

  it('applies custom class to SidebarHeader', () => {
    const wrapper = mount(SidebarHeader, {
      props: { class: 'custom-header' },
    })

    expect(wrapper.classes()).toContain('custom-header')
  })

  it('renders SidebarInset with data-slot', () => {
    const wrapper = mount(SidebarInset)

    expect(wrapper.attributes('data-slot')).toBe('sidebar-inset')
  })

  it('renders SidebarInset as main element', () => {
    const wrapper = mount(SidebarInset)

    expect(wrapper.element.tagName).toBe('MAIN')
  })

  it('applies custom class to SidebarInset', () => {
    const wrapper = mount(SidebarInset, {
      props: { class: 'custom-inset' },
    })

    expect(wrapper.classes()).toContain('custom-inset')
  })

  it('renders SidebarMenuSkeleton with data-slot', () => {
    const wrapper = mount(SidebarMenuSkeleton)

    expect(wrapper.attributes('data-slot')).toBe('sidebar-menu-skeleton')
  })

  it('applies custom class to SidebarMenuSkeleton', () => {
    const wrapper = mount(SidebarMenuSkeleton, {
      props: { class: 'custom-skeleton' },
    })

    expect(wrapper.classes()).toContain('custom-skeleton')
  })

  it('renders SidebarMenuSub with data-slot', () => {
    const wrapper = mount(SidebarMenuSub)

    expect(wrapper.attributes('data-slot')).toBe('sidebar-menu-sub')
  })

  it('applies custom class to SidebarMenuSub', () => {
    const wrapper = mount(SidebarMenuSub, {
      props: { class: 'custom-sub' },
    })

    expect(wrapper.classes()).toContain('custom-sub')
  })

  it('renders SidebarMenuSubItem with data-slot', () => {
    const wrapper = mount(SidebarMenuSubItem)

    expect(wrapper.attributes('data-slot')).toBe('sidebar-menu-sub-item')
  })

  it('applies custom class to SidebarMenuSubItem', () => {
    const wrapper = mount(SidebarMenuSubItem, {
      props: { class: 'custom-sub-item' },
    })

    expect(wrapper.classes()).toContain('custom-sub-item')
  })

  it('renders SidebarMenuSubButton with data-slot', () => {
    const wrapper = mount(SidebarMenuSubButton)

    expect(wrapper.attributes('data-slot')).toBe('sidebar-menu-sub-button')
  })

  it('applies custom class to SidebarMenuSubButton', () => {
    const wrapper = mount(SidebarMenuSubButton, {
      props: { class: 'custom-sub-button' },
    })

    expect(wrapper.classes()).toContain('custom-sub-button')
  })
})
