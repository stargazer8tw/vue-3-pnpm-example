import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemText,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '../'

vi.mock('reka-ui', () => ({
  SelectRoot: {
    name: 'SelectRoot',
    props: ['modelValue', 'defaultValue', 'open', 'defaultOpen', 'disabled', 'name', 'dir'],
    template: '<div data-testid="select-root"><slot /></div>',
  },
  SelectTrigger: {
    name: 'SelectTrigger',
    template: '<button data-testid="select-trigger"><slot /></button>',
  },
  SelectIcon: {
    name: 'SelectIcon',
    props: ['asChild'],
    template: '<span data-testid="select-icon"><slot /></span>',
  },
  SelectValue: {
    name: 'SelectValue',
    props: ['placeholder'],
    template: '<span data-testid="select-value"><slot /></span>',
  },
  SelectPortal: {
    name: 'SelectPortal',
    template: '<div data-testid="select-portal"><slot /></div>',
  },
  SelectContent: {
    name: 'SelectContent',
    props: ['position', 'side', 'sideOffset', 'align', 'alignOffset'],
    template: '<div data-testid="select-content"><slot /></div>',
  },
  SelectViewport: {
    name: 'SelectViewport',
    template: '<div data-testid="select-viewport"><slot /></div>',
  },
  SelectItem: {
    name: 'SelectItem',
    props: ['value', 'disabled', 'textValue'],
    template: '<div data-testid="select-item"><slot /><slot name="indicator-icon" /></div>',
  },
  SelectItemIndicator: {
    name: 'SelectItemIndicator',
    template: '<span data-testid="select-item-indicator"><slot /></span>',
  },
  SelectItemText: {
    name: 'SelectItemText',
    template: '<span data-testid="select-item-text"><slot /></span>',
  },
  SelectGroup: {
    name: 'SelectGroup',
    template: '<div data-testid="select-group"><slot /></div>',
  },
  SelectLabel: {
    name: 'SelectLabel',
    template: '<label data-testid="select-label"><slot /></label>',
  },
  SelectSeparator: {
    name: 'SelectSeparator',
    template: '<hr data-testid="select-separator" />',
  },
  SelectScrollUpButton: {
    name: 'SelectScrollUpButton',
    template: '<button data-testid="select-scroll-up"><slot /></button>',
  },
  SelectScrollDownButton: {
    name: 'SelectScrollDownButton',
    template: '<button data-testid="select-scroll-down"><slot /></button>',
  },
  useForwardPropsEmits: () => ({}),
  useForwardProps: () => ({}),
}))

vi.mock('lucide-vue-next', () => ({
  ChevronDown: {
    name: 'ChevronDown',
    template: '<svg data-testid="chevron-down"></svg>',
  },
  ChevronUp: {
    name: 'ChevronUp',
    template: '<svg data-testid="chevron-up"></svg>',
  },
  Check: {
    name: 'Check',
    template: '<svg data-testid="check"></svg>',
  },
}))

describe('Select', () => {
  it('renders root with slot content', () => {
    const wrapper = mount(Select, {
      slots: { default: '<div>children</div>' },
    })
    expect(wrapper.find('[data-testid="select-root"]').exists()).toBe(true)
    expect(wrapper.html()).toContain('children')
  })

  it('has data-slot attribute', () => {
    const wrapper = mount(Select)
    expect(wrapper.find('[data-slot="select"]').exists()).toBe(true)
  })
})

describe('SelectTrigger', () => {
  it('renders trigger with slot content', () => {
    const wrapper = mount(SelectTrigger, {
      slots: { default: 'Pick one' },
    })
    expect(wrapper.find('[data-testid="select-trigger"]').exists()).toBe(true)
    expect(wrapper.html()).toContain('Pick one')
  })

  it('renders chevron icon', () => {
    const wrapper = mount(SelectTrigger)
    expect(wrapper.find('[data-testid="chevron-down"]').exists()).toBe(true)
  })

  it('has data-slot attribute', () => {
    const wrapper = mount(SelectTrigger)
    expect(wrapper.find('[data-slot="select-trigger"]').exists()).toBe(true)
  })

  it('defaults size to default', () => {
    const wrapper = mount(SelectTrigger)
    expect(wrapper.find('[data-size="default"]').exists()).toBe(true)
  })

  it('accepts sm size', () => {
    const wrapper = mount(SelectTrigger, { props: { size: 'sm' } })
    expect(wrapper.find('[data-size="sm"]').exists()).toBe(true)
  })

  it('merges custom class', () => {
    const wrapper = mount(SelectTrigger, { props: { class: 'my-custom' } })
    expect(wrapper.find('[data-slot="select-trigger"]').classes()).toContain('my-custom')
  })
})

describe('SelectValue', () => {
  it('renders with slot content', () => {
    const wrapper = mount(SelectValue, {
      slots: { default: 'Selected' },
    })
    expect(wrapper.find('[data-testid="select-value"]').exists()).toBe(true)
    expect(wrapper.html()).toContain('Selected')
  })

  it('has data-slot attribute', () => {
    const wrapper = mount(SelectValue)
    expect(wrapper.find('[data-slot="select-value"]').exists()).toBe(true)
  })
})

describe('SelectContent', () => {
  it('renders portal and content with slot', () => {
    const wrapper = mount(SelectContent, {
      slots: { default: '<div>options</div>' },
    })
    expect(wrapper.find('[data-testid="select-portal"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="select-content"]').exists()).toBe(true)
    expect(wrapper.html()).toContain('options')
  })

  it('renders scroll buttons', () => {
    const wrapper = mount(SelectContent)
    expect(wrapper.find('[data-testid="select-scroll-up"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="select-scroll-down"]').exists()).toBe(true)
  })

  it('renders viewport', () => {
    const wrapper = mount(SelectContent)
    expect(wrapper.find('[data-testid="select-viewport"]').exists()).toBe(true)
  })

  it('has data-slot attribute', () => {
    const wrapper = mount(SelectContent)
    expect(wrapper.find('[data-slot="select-content"]').exists()).toBe(true)
  })
})

describe('SelectItem', () => {
  it('renders item with slot content', () => {
    const wrapper = mount(SelectItem, {
      props: { value: 'apple' },
      slots: { default: 'Apple' },
    })
    expect(wrapper.find('[data-testid="select-item"]').exists()).toBe(true)
    expect(wrapper.html()).toContain('Apple')
  })

  it('renders check indicator by default', () => {
    const wrapper = mount(SelectItem, { props: { value: 'a' } })
    expect(wrapper.find('[data-testid="check"]').exists()).toBe(true)
  })

  it('allows custom indicator icon', () => {
    const wrapper = mount(SelectItem, {
      props: { value: 'a' },
      slots: { 'indicator-icon': '<span data-testid="custom-indicator">✓</span>' },
    })
    expect(wrapper.find('[data-testid="custom-indicator"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="check"]').exists()).toBe(false)
  })

  it('wraps content in SelectItemText', () => {
    const wrapper = mount(SelectItem, {
      props: { value: 'a' },
      slots: { default: 'Banana' },
    })
    expect(wrapper.find('[data-testid="select-item-text"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="select-item-text"]').text()).toBe('Banana')
  })

  it('has data-slot attribute', () => {
    const wrapper = mount(SelectItem, { props: { value: 'a' } })
    expect(wrapper.find('[data-slot="select-item"]').exists()).toBe(true)
  })

  it('merges custom class', () => {
    const wrapper = mount(SelectItem, { props: { value: 'a', class: 'extra' } })
    expect(wrapper.find('[data-slot="select-item"]').classes()).toContain('extra')
  })
})

describe('SelectItemText', () => {
  it('renders with slot content', () => {
    const wrapper = mount(SelectItemText, {
      slots: { default: 'Text' },
    })
    expect(wrapper.find('[data-testid="select-item-text"]').exists()).toBe(true)
    expect(wrapper.html()).toContain('Text')
  })

  it('has data-slot attribute', () => {
    const wrapper = mount(SelectItemText)
    expect(wrapper.find('[data-slot="select-item-text"]').exists()).toBe(true)
  })
})

describe('SelectGroup', () => {
  it('renders with slot content', () => {
    const wrapper = mount(SelectGroup, {
      slots: { default: '<div>group items</div>' },
    })
    expect(wrapper.find('[data-testid="select-group"]').exists()).toBe(true)
    expect(wrapper.html()).toContain('group items')
  })

  it('has data-slot attribute', () => {
    const wrapper = mount(SelectGroup)
    expect(wrapper.find('[data-slot="select-group"]').exists()).toBe(true)
  })
})

describe('SelectLabel', () => {
  it('renders with slot content', () => {
    const wrapper = mount(SelectLabel, {
      slots: { default: 'Fruits' },
    })
    expect(wrapper.find('[data-testid="select-label"]').exists()).toBe(true)
    expect(wrapper.html()).toContain('Fruits')
  })

  it('has data-slot attribute', () => {
    const wrapper = mount(SelectLabel)
    expect(wrapper.find('[data-slot="select-label"]').exists()).toBe(true)
  })

  it('merges custom class', () => {
    const wrapper = mount(SelectLabel, { props: { class: 'bold' } })
    expect(wrapper.find('[data-slot="select-label"]').classes()).toContain('bold')
  })
})

describe('SelectSeparator', () => {
  it('renders separator', () => {
    const wrapper = mount(SelectSeparator)
    expect(wrapper.find('[data-testid="select-separator"]').exists()).toBe(true)
  })

  it('has data-slot attribute', () => {
    const wrapper = mount(SelectSeparator)
    expect(wrapper.find('[data-slot="select-separator"]').exists()).toBe(true)
  })

  it('merges custom class', () => {
    const wrapper = mount(SelectSeparator, { props: { class: 'thick' } })
    expect(wrapper.find('[data-slot="select-separator"]').classes()).toContain('thick')
  })
})

describe('SelectScrollUpButton', () => {
  it('renders with default chevron-up icon', () => {
    const wrapper = mount(SelectScrollUpButton)
    expect(wrapper.find('[data-testid="select-scroll-up"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="chevron-up"]').exists()).toBe(true)
  })

  it('allows custom slot content', () => {
    const wrapper = mount(SelectScrollUpButton, {
      slots: { default: '<span data-testid="custom-up">↑</span>' },
    })
    expect(wrapper.find('[data-testid="custom-up"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="chevron-up"]').exists()).toBe(false)
  })

  it('has data-slot attribute', () => {
    const wrapper = mount(SelectScrollUpButton)
    expect(wrapper.find('[data-slot="select-scroll-up-button"]').exists()).toBe(true)
  })
})

describe('SelectScrollDownButton', () => {
  it('renders with default chevron-down icon', () => {
    const wrapper = mount(SelectScrollDownButton)
    expect(wrapper.find('[data-testid="select-scroll-down"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="chevron-down"]').exists()).toBe(true)
  })

  it('allows custom slot content', () => {
    const wrapper = mount(SelectScrollDownButton, {
      slots: { default: '<span data-testid="custom-down">↓</span>' },
    })
    expect(wrapper.find('[data-testid="custom-down"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="chevron-down"]').exists()).toBe(false)
  })

  it('has data-slot attribute', () => {
    const wrapper = mount(SelectScrollDownButton)
    expect(wrapper.find('[data-slot="select-scroll-down-button"]').exists()).toBe(true)
  })
})
