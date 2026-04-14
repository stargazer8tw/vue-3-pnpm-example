import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { PinInput } from '@/components/ui/pin-input'

describe('pin-input', () => {
  it('renders PinInput as div element', () => {
    const wrapper = mount(PinInput)

    expect(wrapper.element.tagName).toBe('DIV')
  })
})
