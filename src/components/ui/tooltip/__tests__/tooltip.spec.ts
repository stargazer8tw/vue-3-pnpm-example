import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Tooltip, TooltipProvider } from '@/components/ui/tooltip'

describe('tooltip', () => {
  it('renders TooltipProvider', () => {
    const wrapper = mount(TooltipProvider)

    expect(wrapper.exists()).toBe(true)
  })

  it('renders Tooltip as div element', () => {
    const wrapper = mount({
      template: `
        <TooltipProvider>
          <Tooltip>Content</Tooltip>
        </TooltipProvider>
      `,
      components: { Tooltip, TooltipProvider },
    })

    expect(wrapper.findComponent(Tooltip).exists()).toBe(true)
  })
})
