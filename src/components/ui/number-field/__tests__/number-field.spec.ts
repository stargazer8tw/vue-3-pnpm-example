import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { NumberField } from '@/components/ui/number-field'

describe('number-field', () => {
  it('renders NumberField as div element', () => {
    const wrapper = mount(NumberField)

    expect(wrapper.element.tagName).toBe('DIV')
  })
})
