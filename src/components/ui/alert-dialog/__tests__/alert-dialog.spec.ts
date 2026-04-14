import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { AlertDialog } from '@/components/ui/alert-dialog'

describe('alert-dialog', () => {
  it('renders AlertDialog as div element', () => {
    const wrapper = mount(AlertDialog)

    expect(wrapper.element.tagName).toBe('DIV')
  })
})
