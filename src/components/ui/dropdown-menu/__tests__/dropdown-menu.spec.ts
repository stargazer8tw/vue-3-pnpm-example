import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

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
})
