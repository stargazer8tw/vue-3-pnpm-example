import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '../'

vi.mock('reka-ui', () => ({
  ListboxRoot: {
    name: 'ListboxRoot',
    props: ['modelValue'],
    template: '<div data-testid="listbox-root"><slot /></div>',
  },
  ListboxContent: {
    name: 'ListboxContent',
    template: '<div data-testid="listbox-content"><slot /></div>',
  },
  ListboxFilter: {
    name: 'ListboxFilter',
    props: ['modelValue', 'autoFocus', 'placeholder'],
    template: '<input data-testid="listbox-filter" />',
  },
  ListboxGroup: {
    name: 'ListboxGroup',
    props: ['id', 'heading'],
    template: '<div data-testid="listbox-group" role="group"><slot /></div>',
  },
  ListboxGroupLabel: {
    name: 'ListboxGroupLabel',
    template: '<div data-testid="listbox-group-label"><slot /></div>',
  },
  ListboxItem: {
    name: 'ListboxItem',
    props: ['value', 'disabled', 'id'],
    template: '<div data-testid="listbox-item"><slot /></div>',
  },
  Primitive: {
    name: 'Primitive',
    template: '<div data-testid="primitive"><slot /></div>',
  },
  Separator: {
    name: 'Separator',
    template: '<div data-testid="separator"><slot /></div>',
  },
  useForwardPropsEmits: () => ({}),
  useForwardProps: () => ({}),
  useFilter: () => ({ contains: () => true }),
  useId: () => 'test-id',
  createContext: () => {
    let value: unknown
    const provide = (v: unknown) => {
      value = v
    }
    const use = () => value
    return [use, provide]
  },
}))

vi.mock('lucide-vue-next', () => ({
  Search: {
    name: 'Search',
    template: '<svg data-testid="search-icon"></svg>',
  },
}))

describe('command', () => {
  it('renders Command with data-slot', () => {
    const wrapper = mount(Command)
    expect(wrapper.find('[data-slot="command"]').exists()).toBe(true)
  })

  it('renders Command with base classes', () => {
    const wrapper = mount(Command)
    const el = wrapper.find('[data-slot="command"]')
    expect(el.classes()).toContain('flex')
    expect(el.classes()).toContain('flex-col')
    expect(el.classes()).toContain('rounded-md')
  })

  it('renders Command as div element', () => {
    const wrapper = mount(Command)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('applies custom class to Command', () => {
    const wrapper = mount(Command, {
      props: { class: 'custom-command' },
    })
    expect(wrapper.find('[data-slot="command"]').classes()).toContain('custom-command')
  })

  it('renders CommandShortcut with data-slot', () => {
    const wrapper = mount(CommandShortcut)
    expect(wrapper.find('[data-slot="command-shortcut"]').exists()).toBe(true)
  })

  it('renders CommandShortcut as span element', () => {
    const wrapper = mount(CommandShortcut)
    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('renders CommandShortcut with base classes', () => {
    const wrapper = mount(CommandShortcut)
    const el = wrapper.find('[data-slot="command-shortcut"]')
    expect(el.classes()).toContain('text-muted-foreground')
    expect(el.classes()).toContain('ml-auto')
    expect(el.classes()).toContain('text-xs')
    expect(el.classes()).toContain('tracking-widest')
  })

  it('renders CommandShortcut with slot content', () => {
    const wrapper = mount(CommandShortcut, {
      slots: { default: '⌘K' },
    })
    expect(wrapper.text()).toContain('⌘K')
  })

  it('applies custom class to CommandShortcut', () => {
    const wrapper = mount(CommandShortcut, {
      props: { class: 'custom-shortcut' },
    })
    expect(wrapper.find('[data-slot="command-shortcut"]').classes()).toContain('custom-shortcut')
  })

  it('renders CommandSeparator with data-slot', () => {
    const wrapper = mount(CommandSeparator)
    expect(wrapper.find('[data-slot="command-separator"]').exists()).toBe(true)
  })

  it('renders CommandSeparator with base classes', () => {
    const wrapper = mount(CommandSeparator)
    const el = wrapper.find('[data-slot="command-separator"]')
    expect(el.classes()).toContain('bg-border')
    expect(el.classes()).toContain('-mx-1')
  })

  it('applies custom class to CommandSeparator', () => {
    const wrapper = mount(CommandSeparator, {
      props: { class: 'custom-separator' },
    })
    expect(wrapper.find('[data-slot="command-separator"]').classes()).toContain('custom-separator')
  })

  it('renders CommandList with data-slot', () => {
    const wrapper = mount({
      template: `
        <Command>
          <CommandList>List Content</CommandList>
        </Command>
      `,
      components: { Command, CommandList },
    })
    expect(wrapper.find('[data-slot="command-list"]').exists()).toBe(true)
  })

  it('renders CommandList with base classes', () => {
    const wrapper = mount({
      template: `
        <Command>
          <CommandList>List Content</CommandList>
        </Command>
      `,
      components: { Command, CommandList },
    })
    const list = wrapper.find('[data-slot="command-list"]')
    expect(list.classes()).toContain('max-h-[300px]')
    expect(list.classes()).toContain('overflow-y-auto')
  })

  it('applies custom class to CommandList', () => {
    const wrapper = mount({
      template: `
        <Command>
          <CommandList class="custom-list">List Content</CommandList>
        </Command>
      `,
      components: { Command, CommandList },
    })
    expect(wrapper.find('[data-slot="command-list"]').classes()).toContain('custom-list')
  })

  it('renders CommandInput with data-slot', () => {
    const wrapper = mount({
      template: `
        <Command>
          <CommandInput placeholder="Search..." />
        </Command>
      `,
      components: { Command, CommandInput },
    })
    expect(wrapper.find('[data-slot="command-input-wrapper"]').exists()).toBe(true)
  })

  it('renders CommandInput with search icon', () => {
    const wrapper = mount({
      template: `
        <Command>
          <CommandInput placeholder="Search..." />
        </Command>
      `,
      components: { Command, CommandInput },
    })
    expect(wrapper.find('[data-testid="search-icon"]').exists()).toBe(true)
  })

  it('renders CommandGroup with data-slot', () => {
    const wrapper = mount({
      template: `
        <Command>
          <CommandGroup heading="Group">
            <CommandItem value="item-1">Item</CommandItem>
          </CommandGroup>
        </Command>
      `,
      components: { Command, CommandGroup, CommandItem },
    })
    expect(wrapper.find('[data-slot="command-group"]').exists()).toBe(true)
  })

  it('renders CommandGroup with heading', () => {
    const wrapper = mount({
      template: `
        <Command>
          <CommandGroup heading="My Group">
            <CommandItem value="item-1">Item</CommandItem>
          </CommandGroup>
        </Command>
      `,
      components: { Command, CommandGroup, CommandItem },
    })
    expect(wrapper.find('[data-slot="command-group-heading"]').exists()).toBe(true)
    expect(wrapper.text()).toContain('My Group')
  })

  it('applies custom class to CommandGroup', () => {
    const wrapper = mount({
      template: `
        <Command>
          <CommandGroup class="custom-group" heading="Group">
            <CommandItem value="item-1">Item</CommandItem>
          </CommandGroup>
        </Command>
      `,
      components: { Command, CommandGroup, CommandItem },
    })
    expect(wrapper.find('[data-slot="command-group"]').classes()).toContain('custom-group')
  })

  it('renders CommandItem with data-slot', () => {
    const wrapper = mount({
      template: `
        <Command>
          <CommandList>
            <CommandGroup>
              <CommandItem value="item-1">Item 1</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      `,
      components: { Command, CommandList, CommandGroup, CommandItem },
    })
    expect(wrapper.find('[data-slot="command-item"]').exists()).toBe(true)
  })

  it('applies custom class to CommandItem', () => {
    const wrapper = mount({
      template: `
        <Command>
          <CommandList>
            <CommandGroup>
              <CommandItem value="item-1" class="custom-item">Item 1</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      `,
      components: { Command, CommandList, CommandGroup, CommandItem },
    })
    expect(wrapper.find('[data-slot="command-item"]').classes()).toContain('custom-item')
  })

  it('renders full command structure', () => {
    const wrapper = mount({
      template: `
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandGroup heading="Suggestions">
              <CommandItem value="item-1">
                Item 1
                <CommandShortcut>⌘A</CommandShortcut>
              </CommandItem>
              <CommandSeparator />
              <CommandItem value="item-2">Item 2</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      `,
      components: {
        Command,
        CommandGroup,
        CommandInput,
        CommandItem,
        CommandList,
        CommandSeparator,
        CommandShortcut,
      },
    })

    expect(wrapper.find('[data-slot="command"]').exists()).toBe(true)
    expect(wrapper.find('[data-slot="command-input-wrapper"]').exists()).toBe(true)
    expect(wrapper.find('[data-slot="command-list"]').exists()).toBe(true)
    expect(wrapper.find('[data-slot="command-group"]').exists()).toBe(true)
    expect(wrapper.find('[data-slot="command-item"]').exists()).toBe(true)
    expect(wrapper.find('[data-slot="command-separator"]').exists()).toBe(true)
    expect(wrapper.find('[data-slot="command-shortcut"]').exists()).toBe(true)
  })
})
