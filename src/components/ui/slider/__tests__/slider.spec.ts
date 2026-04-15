import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { Slider } from '../'

vi.mock('reka-ui', () => ({
  SliderRoot: {
    name: 'SliderRoot',
    props: ['modelValue', 'defaultValue', 'min', 'max', 'step', 'disabled', 'orientation'],
    template: '<span data-testid="slider-root"><slot :modelValue="modelValue ?? [50]" /></span>',
  },
  SliderTrack: {
    name: 'SliderTrack',
    template: '<span data-testid="slider-track"><slot /></span>',
  },
  SliderRange: {
    name: 'SliderRange',
    template: '<span data-testid="slider-range" />',
  },
  SliderThumb: {
    name: 'SliderThumb',
    template: '<span data-testid="slider-thumb" />',
  },
  useForwardPropsEmits: () => ({}),
}))

describe('slider', () => {
  it('renders Slider with data-slot', () => {
    const wrapper = mount(Slider)
    expect(wrapper.find('[data-slot="slider"]').exists()).toBe(true)
  })

  it('renders Slider with base classes', () => {
    const wrapper = mount(Slider)
    const root = wrapper.find('[data-slot="slider"]')
    expect(root.classes()).toContain('relative')
    expect(root.classes()).toContain('flex')
    expect(root.classes()).toContain('w-full')
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
    expect(wrapper.find('[data-slot="slider"]').classes()).toContain('custom-slider')
  })
})
