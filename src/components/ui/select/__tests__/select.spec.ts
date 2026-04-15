import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Select, SelectTrigger, SelectValue } from '@/components/ui/select'

describe('select', () => {
  it('renders Select as div element', () => {
    const wrapper = mount(Select)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders SelectTrigger with data-slot', () => {
    const wrapper = mount({
      template: `
        <Select>
          <SelectTrigger>Select option</SelectTrigger>
        </Select>
      `,
      components: { Select, SelectTrigger },
    })

    expect(wrapper.findComponent(SelectTrigger).exists()).toBe(true)
    expect(wrapper.findComponent(SelectTrigger).attributes('data-slot')).toBe('select-trigger')
  })

  it('renders SelectTrigger with data-size attribute', () => {
    const wrapper = mount({
      template: `
        <Select>
          <SelectTrigger>Select option</SelectTrigger>
        </Select>
      `,
      components: { Select, SelectTrigger },
    })

    expect(wrapper.findComponent(SelectTrigger).attributes('data-size')).toBe('default')
  })

  it('renders SelectTrigger with small size', () => {
    const wrapper = mount({
      template: `
        <Select>
          <SelectTrigger size="sm">Select option</SelectTrigger>
        </Select>
      `,
      components: { Select, SelectTrigger },
    })

    expect(wrapper.findComponent(SelectTrigger).attributes('data-size')).toBe('sm')
  })

  it('applies custom class to SelectTrigger', () => {
    const wrapper = mount({
      template: `
        <Select>
          <SelectTrigger class="custom-trigger">Select</SelectTrigger>
        </Select>
      `,
      components: { Select, SelectTrigger },
    })

    expect(wrapper.findComponent(SelectTrigger).classes()).toContain('custom-trigger')
  })

  it('renders SelectValue with data-slot', () => {
    const wrapper = mount({
      template: `
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
        </Select>
      `,
      components: { Select, SelectTrigger, SelectValue },
    })

    expect(wrapper.findComponent(SelectValue).exists()).toBe(true)
    expect(wrapper.findComponent(SelectValue).attributes('data-slot')).toBe('select-value')
  })

  it('renders SelectTrigger as button element', () => {
    const wrapper = mount({
      template: `
        <Select>
          <SelectTrigger>Select</SelectTrigger>
        </Select>
      `,
      components: { Select, SelectTrigger },
    })

    expect(wrapper.findComponent(SelectTrigger).element.tagName).toBe('BUTTON')
  })

  it('renders SelectTrigger with base styling', () => {
    const wrapper = mount({
      template: `
        <Select>
          <SelectTrigger>Select option</SelectTrigger>
        </Select>
      `,
      components: { Select, SelectTrigger },
    })

    const trigger = wrapper.findComponent(SelectTrigger)
    expect(trigger.classes()).toContain('border-input')
    expect(trigger.classes()).toContain('flex')
    expect(trigger.classes()).toContain('items-center')
  })
})
