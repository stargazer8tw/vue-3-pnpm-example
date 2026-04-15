import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Separator } from '../'

describe('separator', () => {
  it('renders Separator with data-slot', () => {
    const wrapper = mount(Separator)

    expect(wrapper.attributes('data-slot')).toBe('separator')
  })

  it('renders Separator with default horizontal orientation', () => {
    const wrapper = mount(Separator)

    expect(wrapper.attributes('data-orientation')).toBe('horizontal')
    expect(wrapper.classes()).toContain('bg-border')
    expect(wrapper.classes()).toContain('data-[orientation=horizontal]:h-px')
    expect(wrapper.classes()).toContain('data-[orientation=horizontal]:w-full')
  })

  it('renders Separator with vertical orientation', () => {
    const wrapper = mount(Separator, {
      props: { orientation: 'vertical' },
    })

    expect(wrapper.attributes('data-orientation')).toBe('vertical')
    expect(wrapper.classes()).toContain('data-[orientation=vertical]:h-full')
    expect(wrapper.classes()).toContain('data-[orientation=vertical]:w-px')
  })

  it('renders Separator with decorative prop set', () => {
    const wrapper = mount(Separator, {
      props: { decorative: true },
    })

    expect(wrapper.props('decorative')).toBe(true)
  })

  it('renders Separator with decorative false', () => {
    const wrapper = mount(Separator, {
      props: { decorative: false },
    })

    expect(wrapper.props('decorative')).toBe(false)
  })

  it('applies custom class to Separator', () => {
    const wrapper = mount(Separator, {
      props: { class: 'custom-separator' },
    })

    expect(wrapper.classes()).toContain('custom-separator')
  })

  it('renders Separator container', () => {
    const wrapper = mount(Separator)

    expect(wrapper.find('[data-slot="separator"]').exists()).toBe(true)
  })
})
