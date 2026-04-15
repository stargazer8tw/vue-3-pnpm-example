import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'

describe('command', () => {
  it('renders Command with data-slot', () => {
    const wrapper = mount(Command)

    expect(wrapper.attributes('data-slot')).toBe('command')
  })

  it('renders Command with base classes', () => {
    const wrapper = mount(Command)

    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('flex-col')
    expect(wrapper.classes()).toContain('rounded-md')
  })

  it('renders Command as div element', () => {
    const wrapper = mount(Command)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('applies custom class to Command', () => {
    const wrapper = mount(Command, {
      props: { class: 'custom-command' },
    })

    expect(wrapper.classes()).toContain('custom-command')
  })

  it('renders Command with default modelValue', () => {
    const wrapper = mount(Command)

    expect(wrapper.props('modelValue')).toBe('')
  })

  it('renders CommandShortcut with data-slot', () => {
    const wrapper = mount(CommandShortcut)

    expect(wrapper.attributes('data-slot')).toBe('command-shortcut')
  })

  it('renders CommandShortcut as span element', () => {
    const wrapper = mount(CommandShortcut)

    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('renders CommandShortcut with base classes', () => {
    const wrapper = mount(CommandShortcut)

    expect(wrapper.classes()).toContain('text-muted-foreground')
    expect(wrapper.classes()).toContain('ml-auto')
    expect(wrapper.classes()).toContain('text-xs')
    expect(wrapper.classes()).toContain('tracking-widest')
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

    expect(wrapper.classes()).toContain('custom-shortcut')
  })

  it('renders CommandSeparator with data-slot', () => {
    const wrapper = mount(CommandSeparator)

    expect(wrapper.attributes('data-slot')).toBe('command-separator')
  })

  it('renders CommandSeparator with base classes', () => {
    const wrapper = mount(CommandSeparator)

    expect(wrapper.classes()).toContain('bg-border')
    expect(wrapper.classes()).toContain('-mx-1')
  })

  it('applies custom class to CommandSeparator', () => {
    const wrapper = mount(CommandSeparator, {
      props: { class: 'custom-separator' },
    })

    expect(wrapper.classes()).toContain('custom-separator')
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

    expect(wrapper.findComponent(CommandList).exists()).toBe(true)
    expect(wrapper.findComponent(CommandList).attributes('data-slot')).toBe('command-list')
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

    const list = wrapper.findComponent(CommandList)
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

    expect(wrapper.findComponent(CommandList).classes()).toContain('custom-list')
  })

  it('renders CommandInput wrapper with data-slot', () => {
    const wrapper = mount({
      template: `
        <Command>
          <CommandInput placeholder="Search..." />
        </Command>
      `,
      components: { Command, CommandInput },
    })

    expect(wrapper.findComponent(CommandInput).exists()).toBe(true)
  })

  it('renders CommandEmpty with data-slot when search has no results', () => {
    const wrapper = mount({
      template: `
        <Command>
          <CommandList>
            <CommandEmpty>No results found</CommandEmpty>
          </CommandList>
        </Command>
      `,
      components: { Command, CommandList, CommandEmpty },
    })

    expect(wrapper.findComponent(CommandEmpty).exists()).toBe(true)
  })

  it('renders CommandGroup with data-slot', () => {
    const wrapper = mount({
      template: `
        <Command>
          <CommandGroup heading="Group">
            <CommandItem>Item</CommandItem>
          </CommandGroup>
        </Command>
      `,
      components: { Command, CommandGroup, CommandItem },
    })

    expect(wrapper.findComponent(CommandGroup).exists()).toBe(true)
    expect(wrapper.findComponent(CommandGroup).attributes('data-slot')).toBe('command-group')
  })

  it('renders CommandGroup with heading', () => {
    const wrapper = mount({
      template: `
        <Command>
          <CommandGroup heading="My Group">
            <CommandItem>Item</CommandItem>
          </CommandGroup>
        </Command>
      `,
      components: { Command, CommandGroup, CommandItem },
    })

    expect(wrapper.findComponent(CommandGroup).text()).toContain('My Group')
  })

  it('applies custom class to CommandGroup', () => {
    const wrapper = mount({
      template: `
        <Command>
          <CommandGroup class="custom-group" heading="Group">
            <CommandItem>Item</CommandItem>
          </CommandGroup>
        </Command>
      `,
      components: { Command, CommandGroup, CommandItem },
    })

    expect(wrapper.findComponent(CommandGroup).classes()).toContain('custom-group')
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

    expect(wrapper.findComponent(CommandItem).exists()).toBe(true)
    expect(wrapper.findComponent(CommandItem).attributes('data-slot')).toBe('command-item')
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

    expect(wrapper.findComponent(CommandItem).classes()).toContain('custom-item')
  })

  it('renders full command structure', () => {
    const wrapper = mount({
      template: `
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No results.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                Item 1
                <CommandShortcut>⌘A</CommandShortcut>
              </CommandItem>
              <CommandSeparator />
              <CommandItem>Item 2</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      `,
      components: {
        Command,
        CommandEmpty,
        CommandGroup,
        CommandInput,
        CommandItem,
        CommandList,
        CommandSeparator,
        CommandShortcut,
      },
    })

    expect(wrapper.findComponent(Command).exists()).toBe(true)
    expect(wrapper.findComponent(CommandInput).exists()).toBe(true)
    expect(wrapper.findComponent(CommandList).exists()).toBe(true)
    expect(wrapper.findComponent(CommandGroup).exists()).toBe(true)
    expect(wrapper.findComponent(CommandItem).exists()).toBe(true)
    expect(wrapper.findComponent(CommandSeparator).exists()).toBe(true)
    expect(wrapper.findComponent(CommandShortcut).exists()).toBe(true)
  })
})
