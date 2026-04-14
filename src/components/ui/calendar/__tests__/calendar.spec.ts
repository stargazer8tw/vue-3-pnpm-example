import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Calendar } from '@/components/ui/calendar'

describe('calendar', () => {
  it('renders Calendar without crashing', () => {
    const wrapper = mount(Calendar)

    expect(wrapper.exists()).toBe(true)
  })
})
