import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Slider } from '../'

describe('slider', () => {
  it('renders Slider with data-slot', () => {
    const wrapper = mount(Slider)

    expect(wrapper.attributes('data-slot')).toBe('slider')
  })

  it('renders Slider with base classes', () => {
    const wrapper = mount(Slider)

    expect(wrapper.classes()).toContain('relative')
    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('w-full')
  })

  it('renders Slider as span element', () => {
    const wrapper = mount(Slider)

    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('renders Slider with slider-track', () => {
    const wrapper = mount(Slider)

    expect(wrapper.find('[data-slot="slider-track"]').exists()).toBe(true)
  })

  it('renders Slider with slider-range', () => {
    const wrapper = mount(Slider)

    expect(wrapper.find('[data-slot="slider-range"]').exists()).toBe(true)
  })

  it('renders Slider with slider-thumb', () => {
    const wrapper = mount(Slider)

    expect(wrapper.find('[data-slot="slider-thumb"]').exists()).toBe(true)
  })

  it('applies custom class to Slider', () => {
    const wrapper = mount(Slider, {
      props: { class: 'custom-slider' },
    })

    expect(wrapper.classes()).toContain('custom-slider')
  })
})
