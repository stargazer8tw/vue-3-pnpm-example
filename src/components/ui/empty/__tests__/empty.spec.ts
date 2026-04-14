import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Empty } from '@/components/ui/empty'

describe('empty', () => {
  it('renders Empty with data-slot', () => {
    const wrapper = mount(Empty)

    expect(wrapper.attributes('data-slot')).toBe('empty')
  })

  it('renders Empty with base classes', () => {
    const wrapper = mount(Empty)

    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('flex-col')
    expect(wrapper.classes()).toContain('items-center')
    expect(wrapper.classes()).toContain('justify-center')
    expect(wrapper.classes()).toContain('rounded-lg')
    expect(wrapper.classes()).toContain('text-center')
  })

  it('renders Empty as div element', () => {
    const wrapper = mount(Empty)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders Empty with border-dashed class', () => {
    const wrapper = mount(Empty)

    expect(wrapper.classes()).toContain('border-dashed')
  })

  it('applies custom class to Empty', () => {
    const wrapper = mount(Empty, {
      props: { class: 'custom-empty' },
    })

    expect(wrapper.classes()).toContain('custom-empty')
  })
})
