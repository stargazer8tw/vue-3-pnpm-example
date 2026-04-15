import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { InputOTP } from '../'

describe('input-otp', () => {
  it('renders InputOTP without crashing', () => {
    const wrapper = mount(InputOTP, {
      props: { maxlength: 6 },
    })

    expect(wrapper.exists()).toBe(true)
  })
})
