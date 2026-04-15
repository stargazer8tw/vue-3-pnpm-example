import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Collapsible, CollapsibleTrigger } from '../'

describe('collapsible', () => {
  it('renders Collapsible as div element', () => {
    const wrapper = mount(Collapsible)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders CollapsibleTrigger with data-slot', () => {
    const wrapper = mount({
      template: `
        <Collapsible>
          <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        </Collapsible>
      `,
      components: { Collapsible, CollapsibleTrigger },
    })

    expect(wrapper.findComponent(CollapsibleTrigger).attributes('data-slot')).toBe(
      'collapsible-trigger'
    )
  })

  it('renders CollapsibleTrigger as button element', () => {
    const wrapper = mount({
      template: `
        <Collapsible>
          <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        </Collapsible>
      `,
      components: { Collapsible, CollapsibleTrigger },
    })

    expect(wrapper.findComponent(CollapsibleTrigger).element.tagName).toBe('BUTTON')
  })

  it('renders CollapsibleTrigger with slot content', () => {
    const wrapper = mount({
      template: `
        <Collapsible>
          <CollapsibleTrigger>Click to expand</CollapsibleTrigger>
        </Collapsible>
      `,
      components: { Collapsible, CollapsibleTrigger },
    })

    expect(wrapper.findComponent(CollapsibleTrigger).text()).toContain('Click to expand')
  })

  it('applies custom class to CollapsibleTrigger', () => {
    const wrapper = mount({
      template: `
        <Collapsible>
          <CollapsibleTrigger class="custom-trigger">Toggle</CollapsibleTrigger>
        </Collapsible>
      `,
      components: { Collapsible, CollapsibleTrigger },
    })

    expect(wrapper.findComponent(CollapsibleTrigger).classes()).toContain('custom-trigger')
  })
})
