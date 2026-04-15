import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Label } from '../'

describe('label', () => {
  it('renders Label with data-slot', () => {
    const wrapper = mount(Label, {
      slots: { default: 'Label' },
    })

    expect(wrapper.attributes('data-slot')).toBe('label')
  })

  it('renders Label with base styling classes', () => {
    const wrapper = mount(Label, {
      slots: { default: 'Label' },
    })

    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('items-center')
    expect(wrapper.classes()).toContain('text-sm')
    expect(wrapper.classes()).toContain('font-medium')
  })

  it('renders Label as label element', () => {
    const wrapper = mount(Label, {
      slots: { default: 'Label' },
    })

    expect(wrapper.element.tagName).toBe('LABEL')
  })

  it('renders Label with for attribute', () => {
    const wrapper = mount(Label, {
      props: { for: 'input-id' },
      slots: { default: 'Label' },
    })

    expect(wrapper.attributes('for')).toBe('input-id')
  })

  it('renders Label with disabled state styling', () => {
    const wrapper = mount(Label, {
      slots: { default: 'Label' },
    })

    expect(wrapper.classes()).toContain('select-none')
    expect(wrapper.classes()).toContain('group-data-[disabled=true]:pointer-events-none')
    expect(wrapper.classes()).toContain('group-data-[disabled=true]:opacity-50')
  })

  it('applies custom class to Label', () => {
    const wrapper = mount(Label, {
      props: { class: 'custom-label' },
      slots: { default: 'Label' },
    })

    expect(wrapper.classes()).toContain('custom-label')
  })
})
