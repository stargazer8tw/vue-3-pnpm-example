import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Skeleton } from '@/components/ui/skeleton'

describe('skeleton', () => {
  it('renders Skeleton with data-slot', () => {
    const wrapper = mount(Skeleton)

    expect(wrapper.attributes('data-slot')).toBe('skeleton')
  })

  it('renders Skeleton with base classes', () => {
    const wrapper = mount(Skeleton)

    expect(wrapper.classes()).toContain('animate-pulse')
    expect(wrapper.classes()).toContain('rounded-md')
    expect(wrapper.classes()).toContain('bg-primary/10')
  })

  it('renders Skeleton as div element', () => {
    const wrapper = mount(Skeleton)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('applies custom class to Skeleton', () => {
    const wrapper = mount(Skeleton, {
      props: { class: 'custom-skeleton' },
    })

    expect(wrapper.classes()).toContain('custom-skeleton')
  })
})
