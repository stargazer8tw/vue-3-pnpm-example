import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { NavigationMenu } from '@/components/ui/navigation-menu'

describe('navigation-menu', () => {
  it('renders NavigationMenu with data-slot', () => {
    const wrapper = mount(NavigationMenu)

    expect(wrapper.attributes('data-slot')).toBe('navigation-menu')
  })

  it('renders NavigationMenu with base classes', () => {
    const wrapper = mount(NavigationMenu)

    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('items-center')
    expect(wrapper.classes()).toContain('justify-center')
  })

  it('renders NavigationMenu as nav element', () => {
    const wrapper = mount(NavigationMenu)

    expect(wrapper.element.tagName).toBe('NAV')
  })

  it('renders NavigationMenu with default viewport', () => {
    const wrapper = mount(NavigationMenu)

    expect(wrapper.attributes('data-viewport')).toBe('true')
  })

  it('renders NavigationMenu without viewport when disabled', () => {
    const wrapper = mount(NavigationMenu, {
      props: { viewport: false },
    })

    expect(wrapper.attributes('data-viewport')).toBe('false')
  })

  it('applies custom class to NavigationMenu', () => {
    const wrapper = mount(NavigationMenu, {
      props: { class: 'custom-nav' },
    })

    expect(wrapper.classes()).toContain('custom-nav')
  })
})
