import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { ButtonGroup } from '@/components/ui/button-group'

describe('button-group', () => {
  it('renders ButtonGroup as div element', () => {
    const wrapper = mount(ButtonGroup)

    expect(wrapper.element.tagName).toBe('DIV')
  })
})
