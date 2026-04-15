import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Popover, PopoverTrigger } from '../'

describe('popover', () => {
  it('renders Popover as div element', () => {
    const wrapper = mount(Popover)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders PopoverTrigger with data-slot', () => {
    const wrapper = mount({
      template: `
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
        </Popover>
      `,
      components: { Popover, PopoverTrigger },
    })

    expect(wrapper.findComponent(PopoverTrigger).attributes('data-slot')).toBe('popover-trigger')
  })

  it('renders PopoverTrigger as button element', () => {
    const wrapper = mount({
      template: `
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
        </Popover>
      `,
      components: { Popover, PopoverTrigger },
    })

    expect(wrapper.findComponent(PopoverTrigger).element.tagName).toBe('BUTTON')
  })

  it('renders PopoverTrigger with slot content', () => {
    const wrapper = mount({
      template: `
        <Popover>
          <PopoverTrigger>Open Popover</PopoverTrigger>
        </Popover>
      `,
      components: { Popover, PopoverTrigger },
    })

    expect(wrapper.findComponent(PopoverTrigger).text()).toContain('Open Popover')
  })

  it('applies custom class to PopoverTrigger', () => {
    const wrapper = mount({
      template: `
        <Popover>
          <PopoverTrigger class="custom-trigger">Open</PopoverTrigger>
        </Popover>
      `,
      components: { Popover, PopoverTrigger },
    })

    expect(wrapper.findComponent(PopoverTrigger).classes()).toContain('custom-trigger')
  })
})
