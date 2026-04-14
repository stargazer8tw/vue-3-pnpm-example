import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Pagination } from '@/components/ui/pagination'

describe('pagination', () => {
  it('renders Pagination with data-slot', () => {
    const wrapper = mount(Pagination)

    expect(wrapper.attributes('data-slot')).toBe('pagination')
  })

  it('renders Pagination with base classes', () => {
    const wrapper = mount(Pagination)

    expect(wrapper.classes()).toContain('mx-auto')
    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('w-full')
    expect(wrapper.classes()).toContain('justify-center')
  })

  it('renders Pagination as nav element', () => {
    const wrapper = mount(Pagination)

    expect(wrapper.element.tagName).toBe('NAV')
  })

  it('applies custom class to Pagination', () => {
    const wrapper = mount(Pagination, {
      props: { class: 'custom-pagination' },
    })

    expect(wrapper.classes()).toContain('custom-pagination')
  })
})
