import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../'

describe('hover-card', () => {
  it('renders HoverCard as div element', () => {
    const wrapper = mount(HoverCard)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders HoverCardContent with data-slot', () => {
    const wrapper = mount({
      template: `
        <HoverCard>
          <HoverCardContent>Content</HoverCardContent>
        </HoverCard>
      `,
      components: { HoverCard, HoverCardContent },
    })

    expect(wrapper.findComponent(HoverCardContent).exists()).toBe(true)
  })

  it('renders HoverCardTrigger with data-slot', () => {
    const wrapper = mount({
      template: `
        <HoverCard>
          <HoverCardTrigger>Trigger</HoverCardTrigger>
        </HoverCard>
      `,
      components: { HoverCard, HoverCardTrigger },
    })

    expect(wrapper.findComponent(HoverCardTrigger).exists()).toBe(true)
  })

  it('renders full hover-card structure', () => {
    const wrapper = mount({
      template: `
        <HoverCard>
          <HoverCardTrigger>Hover me</HoverCardTrigger>
          <HoverCardContent>Content here</HoverCardContent>
        </HoverCard>
      `,
      components: { HoverCard, HoverCardTrigger, HoverCardContent },
    })

    expect(wrapper.findComponent(HoverCard).exists()).toBe(true)
    expect(wrapper.findComponent(HoverCardTrigger).exists()).toBe(true)
    expect(wrapper.findComponent(HoverCardContent).exists()).toBe(true)
  })
})
