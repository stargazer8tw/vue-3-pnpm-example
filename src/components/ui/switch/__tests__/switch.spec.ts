import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Switch } from '../'

describe('switch', () => {
  it('renders Switch with data-slot', () => {
    const wrapper = mount(Switch)

    expect(wrapper.attributes('data-slot')).toBe('switch')
  })

  it('renders Switch with base styling classes', () => {
    const wrapper = mount(Switch)

    expect(wrapper.classes()).toContain('peer')
    expect(wrapper.classes()).toContain('inline-flex')
    expect(wrapper.classes()).toContain('h-[1.15rem]')
    expect(wrapper.classes()).toContain('w-8')
    expect(wrapper.classes()).toContain('rounded-full')
  })

  it('renders Switch with unchecked state by default', () => {
    const wrapper = mount(Switch)

    expect(wrapper.classes()).toContain('data-[state=unchecked]:bg-input')
  })

  it('renders Switch with checked state', () => {
    const wrapper = mount(Switch, {
      props: { checked: true },
    })

    expect(wrapper.classes()).toContain('data-[state=checked]:bg-primary')
  })

  it('renders Switch with disabled state', () => {
    const wrapper = mount(Switch, {
      props: { disabled: true },
    })

    expect(wrapper.classes()).toContain('disabled:cursor-not-allowed')
    expect(wrapper.classes()).toContain('disabled:opacity-50')
  })

  it('renders SwitchThumb with data-slot', () => {
    const wrapper = mount(Switch)

    expect(wrapper.find('[data-slot="switch-thumb"]').exists()).toBe(true)
  })

  it('renders SwitchThumb with thumb styling', () => {
    const wrapper = mount(Switch)

    const thumb = wrapper.find('[data-slot="switch-thumb"]')
    expect(thumb.classes()).toContain('bg-background')
    expect(thumb.classes()).toContain('size-4')
    expect(thumb.classes()).toContain('rounded-full')
  })

  it('applies custom class to Switch', () => {
    const wrapper = mount(Switch, {
      props: { class: 'custom-switch' },
    })

    expect(wrapper.classes()).toContain('custom-switch')
  })

  it('renders as button element', () => {
    const wrapper = mount(Switch)

    expect(wrapper.element.tagName).toBe('BUTTON')
  })
})
