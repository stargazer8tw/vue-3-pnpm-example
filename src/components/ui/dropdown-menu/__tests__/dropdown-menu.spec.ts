import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { DropdownMenu } from '@/components/ui/dropdown-menu'

describe('dropdown-menu', () => {
  it('renders DropdownMenu as div element', () => {
    const wrapper = mount(DropdownMenu)

    expect(wrapper.element.tagName).toBe('DIV')
  })
})
