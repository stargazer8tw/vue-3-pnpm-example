import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Breadcrumb } from '@/components/ui/breadcrumb'

describe('breadcrumb', () => {
  it('renders Breadcrumb with data-slot', () => {
    const wrapper = mount(Breadcrumb)

    expect(wrapper.attributes('data-slot')).toBe('breadcrumb')
  })

  it('renders Breadcrumb with aria-label', () => {
    const wrapper = mount(Breadcrumb)

    expect(wrapper.attributes('aria-label')).toBe('breadcrumb')
  })

  it('renders Breadcrumb as nav element', () => {
    const wrapper = mount(Breadcrumb)

    expect(wrapper.element.tagName).toBe('NAV')
  })

  it('applies custom class to Breadcrumb', () => {
    const wrapper = mount(Breadcrumb, {
      props: { class: 'custom-breadcrumb' },
    })

    expect(wrapper.classes()).toContain('custom-breadcrumb')
  })
})
