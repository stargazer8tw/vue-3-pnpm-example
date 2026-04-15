import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Progress } from '../'

describe('progress', () => {
  it('renders Progress with data-slot', () => {
    const wrapper = mount(Progress)

    expect(wrapper.attributes('data-slot')).toBe('progress')
  })

  it('renders Progress root with base classes', () => {
    const wrapper = mount(Progress)

    expect(wrapper.classes()).toContain('bg-primary/20')
    expect(wrapper.classes()).toContain('h-2')
    expect(wrapper.classes()).toContain('w-full')
    expect(wrapper.classes()).toContain('rounded-full')
  })

  it('renders Progress with default value 0', () => {
    const wrapper = mount(Progress, {
      props: { modelValue: 0 },
    })

    expect(wrapper.props('modelValue')).toBe(0)
  })

  it('renders Progress with custom value', () => {
    const wrapper = mount(Progress, {
      props: { modelValue: 50 },
    })

    expect(wrapper.props('modelValue')).toBe(50)
  })

  it('renders ProgressIndicator with data-slot', () => {
    const wrapper = mount(Progress)

    expect(wrapper.find('[data-slot="progress-indicator"]').exists()).toBe(true)
  })

  it('renders ProgressIndicator with indicator classes', () => {
    const wrapper = mount(Progress)

    const indicator = wrapper.find('[data-slot="progress-indicator"]')
    expect(indicator.classes()).toContain('bg-primary')
    expect(indicator.classes()).toContain('h-full')
    expect(indicator.classes()).toContain('flex-1')
  })

  it('applies custom class to Progress', () => {
    const wrapper = mount(Progress, {
      props: { class: 'custom-progress' },
    })

    expect(wrapper.classes()).toContain('custom-progress')
  })

  it('applies style for indicator transform', () => {
    const wrapper = mount(Progress, {
      props: { modelValue: 75 },
    })

    const indicator = wrapper.find('[data-slot="progress-indicator"]')
    expect(indicator.attributes('style')).toContain('transform')
  })
})
