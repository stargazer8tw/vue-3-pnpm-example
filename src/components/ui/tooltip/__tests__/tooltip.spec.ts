import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Tooltip, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

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

  it('renders TooltipTrigger with data-slot', () => {
    const wrapper = mount({
      template: `
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>Hover</TooltipTrigger>
          </Tooltip>
        </TooltipProvider>
      `,
      components: { Tooltip, TooltipProvider, TooltipTrigger },
    })

    expect(wrapper.findComponent(TooltipTrigger).attributes('data-slot')).toBe('tooltip-trigger')
  })

  it('renders TooltipTrigger with slot content', () => {
    const wrapper = mount({
      template: `
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>Hover me</TooltipTrigger>
          </Tooltip>
        </TooltipProvider>
      `,
      components: { Tooltip, TooltipProvider, TooltipTrigger },
    })

    expect(wrapper.findComponent(TooltipTrigger).text()).toContain('Hover me')
  })

  it('applies custom class to TooltipTrigger', () => {
    const wrapper = mount({
      template: `
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger class="custom-trigger">Hover</TooltipTrigger>
          </Tooltip>
        </TooltipProvider>
      `,
      components: { Tooltip, TooltipProvider, TooltipTrigger },
    })

    expect(wrapper.findComponent(TooltipTrigger).classes()).toContain('custom-trigger')
  })
})
