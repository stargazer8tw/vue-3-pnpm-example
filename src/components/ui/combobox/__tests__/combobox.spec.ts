import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Combobox } from '@/components/ui/combobox'

describe('combobox', () => {
  it('renders Combobox as div element', () => {
    const wrapper = mount(Combobox)

    expect(wrapper.element.tagName).toBe('DIV')
  })
})
