import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'

describe('resizable-panel', () => {
  it('renders ResizablePanelGroup with data-slot', () => {
    const wrapper = mount(ResizablePanelGroup)

    expect(wrapper.attributes('data-slot')).toBe('resizable-panel-group')
  })

  it('renders ResizablePanelGroup as div element', () => {
    const wrapper = mount(ResizablePanelGroup)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders ResizablePanel within ResizablePanelGroup', () => {
    const wrapper = mount({
      template: `
        <ResizablePanelGroup>
          <ResizablePanel>Content</ResizablePanel>
        </ResizablePanelGroup>
      `,
      components: { ResizablePanel, ResizablePanelGroup },
    })

    expect(wrapper.findComponent(ResizablePanelGroup).exists()).toBe(true)
    expect(wrapper.findComponent(ResizablePanel).exists()).toBe(true)
  })
})
