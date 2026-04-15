import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Toggle, ToggleGroup, ToggleGroupItem } from '../'

describe('toggle-group', () => {
  it('renders ToggleGroup with data-slot', () => {
    const wrapper = mount(ToggleGroup)

    expect(wrapper.attributes('data-slot')).toBe('toggle-group')
  })

  it('renders ToggleGroup with base classes', () => {
    const wrapper = mount(ToggleGroup)

    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('items-center')
    expect(wrapper.classes()).toContain('rounded-md')
  })

  it('renders ToggleGroup as div element', () => {
    const wrapper = mount(ToggleGroup)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders ToggleGroup with data-size attribute', () => {
    const wrapper = mount(ToggleGroup, {
      props: { size: 'lg' },
    })

    expect(wrapper.attributes('data-size')).toBe('lg')
  })

  it('renders ToggleGroupItem within ToggleGroup', () => {
    const wrapper = mount({
      template: `
        <ToggleGroup>
          <ToggleGroupItem value="1">One</ToggleGroupItem>
          <ToggleGroupItem value="2">Two</ToggleGroupItem>
        </ToggleGroup>
      `,
      components: { ToggleGroup, ToggleGroupItem },
    })

    expect(wrapper.findComponent(ToggleGroupItem).exists()).toBe(true)
    expect(wrapper.find('[data-slot="toggle-group-item"]').exists()).toBe(true)
  })

  it('applies custom class to ToggleGroup', () => {
    const wrapper = mount(ToggleGroup, {
      props: { class: 'custom-toggle-group' },
    })

    expect(wrapper.classes()).toContain('custom-toggle-group')
  })
})
