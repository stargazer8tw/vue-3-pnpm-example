import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Dialog } from '@/components/ui/dialog'

describe('dialog', () => {
  it('renders Dialog as div element', () => {
    const wrapper = mount(Dialog)

    expect(wrapper.element.tagName).toBe('DIV')
  })
})
