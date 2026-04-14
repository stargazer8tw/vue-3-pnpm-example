import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Calendar } from '@/components/ui/calendar'

describe('calendar', () => {
  it('renders Calendar without crashing', () => {
    const wrapper = mount(Calendar)

    expect(wrapper.exists()).toBe(true)
  })

  it('renders Calendar with layout="month-and-year"', () => {
    const wrapper = mount(Calendar, {
      props: { layout: 'month-and-year' },
    })

    expect(wrapper.exists()).toBe(true)
  })

  it('renders Calendar with layout="month-only"', () => {
    const wrapper = mount(Calendar, {
      props: { layout: 'month-only' },
    })

    expect(wrapper.exists()).toBe(true)
  })

  it('renders Calendar with layout="year-only"', () => {
    const wrapper = mount(Calendar, {
      props: { layout: 'year-only' },
    })

    expect(wrapper.exists()).toBe(true)
  })

  it('renders Calendar with viewport=false', () => {
    const wrapper = mount(Calendar, {
      props: { viewport: false },
    })

    expect(wrapper.exists()).toBe(true)
  })
})
