import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { ChartContainer } from '@/components/ui/chart'

describe('chart', () => {
  it('renders ChartContainer with data-slot', () => {
    const wrapper = mount(ChartContainer, {
      props: { config: {} },
    })

    expect(wrapper.attributes('data-slot')).toBe('chart')
  })

  it('renders ChartContainer with base classes', () => {
    const wrapper = mount(ChartContainer, {
      props: { config: {} },
    })

    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('flex-col')
    expect(wrapper.classes()).toContain('aspect-video')
    expect(wrapper.classes()).toContain('h-full')
    expect(wrapper.classes()).toContain('w-full')
  })

  it('renders ChartContainer as div element', () => {
    const wrapper = mount(ChartContainer, {
      props: { config: {} },
    })

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('applies custom class to ChartContainer', () => {
    const wrapper = mount(ChartContainer, {
      props: { config: {}, class: 'custom-chart' },
    })

    expect(wrapper.classes()).toContain('custom-chart')
  })
})
