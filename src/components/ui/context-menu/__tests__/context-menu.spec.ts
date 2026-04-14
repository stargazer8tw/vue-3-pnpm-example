import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { ContextMenu } from '@/components/ui/context-menu'

describe('context-menu', () => {
  it('renders ContextMenu as div element', () => {
    const wrapper = mount(ContextMenu)

    expect(wrapper.element.tagName).toBe('DIV')
  })
})
