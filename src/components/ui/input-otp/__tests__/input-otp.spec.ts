import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '../'

vi.mock('vue-input-otp', () => ({
  OTPInput: {
    name: 'OTPInput',
    props: ['maxlength', 'containerClass'],
    template: '<div data-testid="otp-input" :class="containerClass"><slot :slots="slots" /></div>',
    setup() {
      const slots = Array.from({ length: 6 }, (_, i) => ({
        char: i < 3 ? String(i + 1) : '',
        isActive: i === 3,
        hasFakeCaret: i === 3,
      }))
      return { slots }
    },
  },
  useVueOTPContext: () => ({
    value: {
      slots: Array.from({ length: 6 }, (_, i) => ({
        char: i < 3 ? String(i + 1) : '',
        isActive: i === 3,
        hasFakeCaret: i === 3,
      })),
    },
  }),
}))

vi.mock('reka-ui', () => ({
  useForwardPropsEmits: () => ({}),
  useForwardProps: () => ({}),
}))

vi.mock('lucide-vue-next', () => ({
  MinusIcon: {
    name: 'MinusIcon',
    template: '<svg data-testid="minus-icon"></svg>',
  },
}))

describe('InputOTP', () => {
  it('renders with data-slot', () => {
    const wrapper = mount(InputOTP, {
      props: { maxlength: 6 },
    })
    expect(wrapper.find('[data-slot="input-otp"]').exists()).toBe(true)
  })

  it('renders OTPInput container', () => {
    const wrapper = mount(InputOTP, {
      props: { maxlength: 6 },
      slots: { default: '<div>slots</div>' },
    })
    expect(wrapper.find('[data-testid="otp-input"]').exists()).toBe(true)
    expect(wrapper.html()).toContain('slots')
  })

  it('merges custom class into container', () => {
    const wrapper = mount(InputOTP, {
      props: { maxlength: 6, class: 'my-otp' },
    })
    expect(wrapper.find('[data-testid="otp-input"]').classes()).toContain('my-otp')
  })
})

describe('InputOTPGroup', () => {
  it('renders with data-slot', () => {
    const wrapper = mount(InputOTPGroup)
    expect(wrapper.find('[data-slot="input-otp-group"]').exists()).toBe(true)
  })

  it('renders slot content', () => {
    const wrapper = mount(InputOTPGroup, {
      slots: { default: '<span>child</span>' },
    })
    expect(wrapper.html()).toContain('child')
  })

  it('merges custom class', () => {
    const wrapper = mount(InputOTPGroup, {
      props: { class: 'custom-group' },
    })
    expect(wrapper.find('[data-slot="input-otp-group"]').classes()).toContain('custom-group')
  })
})

describe('InputOTPSeparator', () => {
  it('renders with data-slot and role', () => {
    const wrapper = mount(InputOTPSeparator)
    expect(wrapper.find('[data-slot="input-otp-separator"]').exists()).toBe(true)
    expect(wrapper.find('[role="separator"]').exists()).toBe(true)
  })

  it('renders default MinusIcon', () => {
    const wrapper = mount(InputOTPSeparator)
    expect(wrapper.find('[data-testid="minus-icon"]').exists()).toBe(true)
  })

  it('allows custom slot content', () => {
    const wrapper = mount(InputOTPSeparator, {
      slots: { default: '<span data-testid="custom-sep">-</span>' },
    })
    expect(wrapper.find('[data-testid="custom-sep"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="minus-icon"]').exists()).toBe(false)
  })
})

describe('InputOTPSlot', () => {
  it('renders with data-slot', () => {
    const wrapper = mount(InputOTPSlot, {
      props: { index: 0 },
    })
    expect(wrapper.find('[data-slot="input-otp-slot"]').exists()).toBe(true)
  })

  it('displays char from context slot', () => {
    const wrapper = mount(InputOTPSlot, {
      props: { index: 0 },
    })
    expect(wrapper.text()).toContain('1')
  })

  it('shows fake caret when slot has hasFakeCaret', () => {
    const wrapper = mount(InputOTPSlot, {
      props: { index: 3 },
    })
    expect(wrapper.find('.animate-caret-blink').exists()).toBe(true)
  })

  it('does not show fake caret for inactive slot', () => {
    const wrapper = mount(InputOTPSlot, {
      props: { index: 0 },
    })
    expect(wrapper.find('.animate-caret-blink').exists()).toBe(false)
  })

  it('sets data-active attribute', () => {
    const wrapper = mount(InputOTPSlot, {
      props: { index: 3 },
    })
    expect(wrapper.find('[data-slot="input-otp-slot"]').attributes('data-active')).toBe('true')
  })

  it('merges custom class', () => {
    const wrapper = mount(InputOTPSlot, {
      props: { index: 0, class: 'extra' },
    })
    expect(wrapper.find('[data-slot="input-otp-slot"]').classes()).toContain('extra')
  })
})
