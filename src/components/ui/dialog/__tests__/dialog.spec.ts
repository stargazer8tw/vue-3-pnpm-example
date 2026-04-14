import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Dialog, DialogHeader, DialogFooter } from '@/components/ui/dialog'

describe('dialog', () => {
  it('renders Dialog as div element', () => {
    const wrapper = mount(Dialog)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders DialogHeader with data-slot', () => {
    const wrapper = mount(DialogHeader)

    expect(wrapper.attributes('data-slot')).toBe('dialog-header')
  })

  it('renders DialogHeader as div element', () => {
    const wrapper = mount(DialogHeader)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders DialogHeader with base classes', () => {
    const wrapper = mount(DialogHeader)

    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('flex-col')
  })

  it('renders DialogFooter with data-slot', () => {
    const wrapper = mount(DialogFooter)

    expect(wrapper.attributes('data-slot')).toBe('dialog-footer')
  })
})
