import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Stepper } from '@/components/ui/stepper'

describe('stepper', () => {
  it('renders Stepper with base classes', () => {
    const wrapper = mount(Stepper)

    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('gap-2')
  })

  it('renders Stepper as div element', () => {
    const wrapper = mount(Stepper)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('applies custom class to Stepper', () => {
    const wrapper = mount(Stepper, {
      props: { class: 'custom-stepper' },
    })

    expect(wrapper.classes()).toContain('custom-stepper')
  })
})
