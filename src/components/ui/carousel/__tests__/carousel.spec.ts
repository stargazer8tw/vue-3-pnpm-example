import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Carousel } from '@/components/ui/carousel'

describe('carousel', () => {
  it('renders Carousel with data-slot', () => {
    const wrapper = mount(Carousel)

    expect(wrapper.attributes('data-slot')).toBe('carousel')
  })

  it('renders Carousel with base classes', () => {
    const wrapper = mount(Carousel)

    expect(wrapper.classes()).toContain('relative')
  })

  it('renders Carousel as div element', () => {
    const wrapper = mount(Carousel)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders Carousel with role="region"', () => {
    const wrapper = mount(Carousel)

    expect(wrapper.attributes('role')).toBe('region')
  })

  it('renders Carousel with aria-roledescription', () => {
    const wrapper = mount(Carousel)

    expect(wrapper.attributes('aria-roledescription')).toBe('carousel')
  })

  it('renders Carousel with default horizontal orientation', () => {
    const wrapper = mount(Carousel)

    expect(wrapper.attributes('tabindex')).toBe('0')
  })

  it('applies custom class to Carousel', () => {
    const wrapper = mount(Carousel, {
      props: { class: 'custom-carousel' },
    })

    expect(wrapper.classes()).toContain('custom-carousel')
  })

  it('renders Carousel with vertical orientation', () => {
    const wrapper = mount(Carousel, {
      props: { orientation: 'vertical' },
    })

    expect(wrapper.exists()).toBe(true)
  })
})
