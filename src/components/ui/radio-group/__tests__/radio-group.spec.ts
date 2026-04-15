import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { RadioGroup, RadioGroupItem } from '../'

describe('radio-group', () => {
  it('renders RadioGroup with data-slot', () => {
    const wrapper = mount(RadioGroup)

    expect(wrapper.attributes('data-slot')).toBe('radio-group')
  })

  it('renders RadioGroup with base classes', () => {
    const wrapper = mount(RadioGroup)

    expect(wrapper.classes()).toContain('grid')
    expect(wrapper.classes()).toContain('gap-3')
  })

  it('renders RadioGroup as div element', () => {
    const wrapper = mount(RadioGroup)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('applies custom class to RadioGroup', () => {
    const wrapper = mount(RadioGroup, {
      props: { class: 'custom-radio-group' },
    })

    expect(wrapper.classes()).toContain('custom-radio-group')
  })

  it('renders RadioGroupItem within RadioGroup', () => {
    const wrapper = mount({
      template: `
        <RadioGroup>
          <RadioGroupItem value="1">Option 1</RadioGroupItem>
          <RadioGroupItem value="2">Option 2</RadioGroupItem>
        </RadioGroup>
      `,
      components: { RadioGroup, RadioGroupItem },
    })

    expect(wrapper.findComponent(RadioGroup).exists()).toBe(true)
    expect(wrapper.findComponent(RadioGroupItem).exists()).toBe(true)
  })

  it('renders RadioGroupItem with role="radio"', () => {
    const wrapper = mount({
      template: `
        <RadioGroup>
          <RadioGroupItem value="1">Option 1</RadioGroupItem>
        </RadioGroup>
      `,
      components: { RadioGroup, RadioGroupItem },
    })

    expect(wrapper.findComponent(RadioGroupItem).attributes('role')).toBe('radio')
  })

  it('renders RadioGroupItem with data-slot', () => {
    const wrapper = mount({
      template: `
        <RadioGroup>
          <RadioGroupItem value="1">Option 1</RadioGroupItem>
        </RadioGroup>
      `,
      components: { RadioGroup, RadioGroupItem },
    })

    expect(wrapper.findComponent(RadioGroupItem).attributes('data-slot')).toBe('radio-group-item')
  })
})
