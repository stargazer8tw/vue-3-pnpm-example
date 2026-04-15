import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { PinInput, PinInputGroup } from '../'

describe('pin-input', () => {
  it('renders PinInput as div element', () => {
    const wrapper = mount(PinInput)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders PinInputGroup with data-slot', () => {
    const wrapper = mount({
      template: `
        <PinInput>
          <PinInputGroup>Input</PinInputGroup>
        </PinInput>
      `,
      components: { PinInput, PinInputGroup },
    })

    expect(wrapper.findComponent(PinInputGroup).attributes('data-slot')).toBe('pin-input-group')
  })

  it('renders PinInputGroup with base classes', () => {
    const wrapper = mount({
      template: `
        <PinInput>
          <PinInputGroup>Input</PinInputGroup>
        </PinInput>
      `,
      components: { PinInput, PinInputGroup },
    })

    expect(wrapper.findComponent(PinInputGroup).classes()).toContain('flex')
    expect(wrapper.findComponent(PinInputGroup).classes()).toContain('items-center')
  })

  it('applies custom class to PinInputGroup', () => {
    const wrapper = mount({
      template: `
        <PinInput>
          <PinInputGroup class="custom-group">Input</PinInputGroup>
        </PinInput>
      `,
      components: { PinInput, PinInputGroup },
    })

    expect(wrapper.findComponent(PinInputGroup).classes()).toContain('custom-group')
  })
})
