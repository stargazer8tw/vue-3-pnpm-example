import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { NativeSelect } from '../'

describe('native-select', () => {
  it('renders NativeSelect as div element', () => {
    const wrapper = mount(NativeSelect)

    expect(wrapper.element.tagName).toBe('DIV')
  })
})
