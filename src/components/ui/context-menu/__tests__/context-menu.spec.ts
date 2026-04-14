import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { ContextMenu, ContextMenuTrigger } from '@/components/ui/context-menu'

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
})
