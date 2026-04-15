import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Kbd, KbdGroup } from '@/components/ui/kbd'

describe('kbd', () => {
  it('renders Kbd component with correct tag', () => {
    const wrapper = mount(Kbd, {
      slots: { default: 'Ctrl' },
    })

    expect(wrapper.element.tagName).toBe('KBD')
    expect(wrapper.text()).toBe('Ctrl')
  })

  it('renders Kbd with base styling classes', () => {
    const wrapper = mount(Kbd, {
      slots: { default: 'A' },
    })

    expect(wrapper.classes()).toContain('bg-muted')
    expect(wrapper.classes()).toContain('text-muted-foreground')
    expect(wrapper.classes()).toContain('inline-flex')
    expect(wrapper.classes()).toContain('h-5')
  })

  it('renders KbdGroup with data-slot', () => {
    const wrapper = mount(KbdGroup, {
      slots: { default: 'Kbd' },
    })

    expect(wrapper.attributes('data-slot')).toBe('kbd-group')
    expect(wrapper.element.tagName).toBe('KBD')
  })

  it('renders KbdGroup with items-center class', () => {
    const wrapper = mount(KbdGroup, {
      slots: { default: 'Keys' },
    })

    expect(wrapper.classes()).toContain('inline-flex')
    expect(wrapper.classes()).toContain('items-center')
    expect(wrapper.classes()).toContain('gap-1')
  })

  it('applies custom class to Kbd', () => {
    const wrapper = mount(Kbd, {
      props: { class: 'custom-kbd' },
      slots: { default: 'Key' },
    })

    expect(wrapper.classes()).toContain('custom-kbd')
  })

  it('applies custom class to KbdGroup', () => {
    const wrapper = mount(KbdGroup, {
      props: { class: 'custom-group' },
      slots: { default: 'Keys' },
    })

    expect(wrapper.classes()).toContain('custom-group')
  })

  it('renders Kbd with shortcut text', () => {
    const wrapper = mount(Kbd, {
      slots: { default: '⌘' },
    })

    expect(wrapper.text()).toBe('⌘')
  })

  it('renders multiple Kbd in KbdGroup', () => {
    const wrapper = mount({
      template: `
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>C</Kbd>
        </KbdGroup>
      `,
      components: { Kbd, KbdGroup },
    })

    expect(wrapper.findAll('kbd')).toHaveLength(3)
  })
})
