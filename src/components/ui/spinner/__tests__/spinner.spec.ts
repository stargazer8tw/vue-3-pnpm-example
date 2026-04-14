import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Spinner } from '@/components/ui/spinner'

describe('spinner', () => {
  it('renders Spinner with role and aria-label', () => {
    const wrapper = mount(Spinner)

    expect(wrapper.attributes('role')).toBe('status')
    expect(wrapper.attributes('aria-label')).toBe('Loading')
  })

  it('renders Spinner with base classes', () => {
    const wrapper = mount(Spinner)

    expect(wrapper.classes()).toContain('size-4')
    expect(wrapper.classes()).toContain('animate-spin')
  })

  it('renders Spinner as SVG icon', () => {
    const wrapper = mount(Spinner)

    expect(wrapper.element.tagName).toBe('svg')
  })

  it('applies custom class to Spinner', () => {
    const wrapper = mount(Spinner, {
      props: { class: 'custom-spinner' },
    })

    expect(wrapper.classes()).toContain('custom-spinner')
  })
})
