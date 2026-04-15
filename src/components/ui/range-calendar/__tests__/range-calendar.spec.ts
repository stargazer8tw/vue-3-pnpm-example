import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { RangeCalendar } from '../'

describe('range-calendar', () => {
  it('renders RangeCalendar without crashing', () => {
    const wrapper = mount(RangeCalendar)

    expect(wrapper.exists()).toBe(true)
  })
})
