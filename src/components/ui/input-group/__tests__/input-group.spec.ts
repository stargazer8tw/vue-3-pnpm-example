import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group'

describe('input-group', () => {
  it('renders InputGroup with data-slot', () => {
    const wrapper = mount(InputGroup)

    expect(wrapper.attributes('data-slot')).toBe('input-group')
  })

  it('renders InputGroup with role="group"', () => {
    const wrapper = mount(InputGroup)

    expect(wrapper.attributes('role')).toBe('group')
  })

  it('renders InputGroup with base classes', () => {
    const wrapper = mount(InputGroup)

    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('items-center')
    expect(wrapper.classes()).toContain('rounded-md')
    expect(wrapper.classes()).toContain('h-9')
  })

  it('renders InputGroup as div element', () => {
    const wrapper = mount(InputGroup)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('applies custom class to InputGroup', () => {
    const wrapper = mount(InputGroup, {
      props: { class: 'custom-input-group' },
    })

    expect(wrapper.classes()).toContain('custom-input-group')
  })

  it('renders InputGroupAddon with data-slot', () => {
    const wrapper = mount({
      template: `
        <InputGroup>
          <InputGroupAddon>Add</InputGroupAddon>
        </InputGroup>
      `,
      components: { InputGroup, InputGroupAddon },
    })

    expect(wrapper.find('[data-slot="input-group-addon"]').exists()).toBe(true)
  })

  it('renders InputGroupAddon with data-align', () => {
    const wrapper = mount({
      template: `
        <InputGroup>
          <InputGroupAddon align="inline-end">Add</InputGroupAddon>
        </InputGroup>
      `,
      components: { InputGroup, InputGroupAddon },
    })

    expect(wrapper.find('[data-align="inline-end"]').exists()).toBe(true)
  })

  it('renders InputGroupButton as Button', () => {
    const wrapper = mount({
      template: `
        <InputGroup>
          <InputGroupButton>Button</InputGroupButton>
        </InputGroup>
      `,
      components: { InputGroup, InputGroupButton },
    })

    expect(wrapper.findComponent(InputGroupButton).exists()).toBe(true)
    expect(wrapper.findComponent(InputGroupButton).find('button').exists()).toBe(true)
  })

  it('renders InputGroupInput with data-slot', () => {
    const wrapper = mount({
      template: `
        <InputGroup>
          <InputGroupInput />
        </InputGroup>
      `,
      components: { InputGroup, InputGroupInput },
    })

    expect(wrapper.find('[data-slot="input-group-control"]').exists()).toBe(true)
  })

  it('renders InputGroupText with base classes', () => {
    const wrapper = mount({
      template: `
        <InputGroup>
          <InputGroupText>Text</InputGroupText>
        </InputGroup>
      `,
      components: { InputGroup, InputGroupText },
    })

    expect(wrapper.findComponent(InputGroupText).exists()).toBe(true)
    expect(wrapper.findComponent(InputGroupText).classes()).toContain('text-muted-foreground')
  })

  it('renders InputGroupTextarea as textarea', () => {
    const wrapper = mount({
      template: `
        <InputGroup>
          <InputGroupTextarea />
        </InputGroup>
      `,
      components: { InputGroup, InputGroupTextarea },
    })

    expect(wrapper.find('textarea').exists()).toBe(true)
  })

  it('renders full input-group structure', () => {
    const wrapper = mount({
      template: `
        <InputGroup>
          <InputGroupAddon>$</InputGroupAddon>
          <InputGroupInput placeholder="Amount" />
          <InputGroupButton>Submit</InputGroupButton>
        </InputGroup>
      `,
      components: {
        InputGroup,
        InputGroupAddon,
        InputGroupButton,
        InputGroupInput,
      },
    })

    expect(wrapper.findComponent(InputGroup).exists()).toBe(true)
    expect(wrapper.findComponent(InputGroupAddon).exists()).toBe(true)
    expect(wrapper.findComponent(InputGroupInput).exists()).toBe(true)
    expect(wrapper.findComponent(InputGroupButton).exists()).toBe(true)
  })
})
