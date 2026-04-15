import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Dialog, DialogFooter, DialogHeader, DialogTrigger } from '../'

describe('dialog', () => {
  it('renders Dialog as div element', () => {
    const wrapper = mount(Dialog)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders DialogHeader with data-slot', () => {
    const wrapper = mount(DialogHeader)

    expect(wrapper.attributes('data-slot')).toBe('dialog-header')
  })

  it('renders DialogHeader as div element', () => {
    const wrapper = mount(DialogHeader)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders DialogHeader with base classes', () => {
    const wrapper = mount(DialogHeader)

    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('flex-col')
  })

  it('renders DialogFooter with data-slot', () => {
    const wrapper = mount(DialogFooter)

    expect(wrapper.attributes('data-slot')).toBe('dialog-footer')
  })

  it('renders DialogTrigger with data-slot', () => {
    const wrapper = mount({
      template: `
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
        </Dialog>
      `,
      components: {
        Dialog,
        DialogTrigger,
      },
    })

    expect(wrapper.findComponent(DialogTrigger).attributes('data-slot')).toBe('dialog-trigger')
  })

  it('applies custom class to DialogTrigger', () => {
    const wrapper = mount({
      template: `
        <Dialog>
          <DialogTrigger class="custom-trigger">Open</DialogTrigger>
        </Dialog>
      `,
      components: {
        Dialog,
        DialogTrigger,
      },
    })

    expect(wrapper.findComponent(DialogTrigger).classes()).toContain('custom-trigger')
  })

  it('renders DialogHeader with slot content', () => {
    const wrapper = mount(DialogHeader, {
      slots: { default: 'Header Content' },
    })

    expect(wrapper.text()).toContain('Header Content')
  })

  it('renders DialogFooter with slot content', () => {
    const wrapper = mount(DialogFooter, {
      slots: { default: 'Footer Content' },
    })

    expect(wrapper.text()).toContain('Footer Content')
  })

  it('applies custom class to DialogHeader', () => {
    const wrapper = mount(DialogHeader, {
      props: { class: 'custom-header' },
    })

    expect(wrapper.classes()).toContain('custom-header')
  })

  it('applies custom class to DialogFooter', () => {
    const wrapper = mount(DialogFooter, {
      props: { class: 'custom-footer' },
    })

    expect(wrapper.classes()).toContain('custom-footer')
  })

  it('renders Dialog with default open state', () => {
    const wrapper = mount(Dialog)

    expect(wrapper.props('open')).toBe(false)
  })

  it('renders DialogTrigger as button element', () => {
    const wrapper = mount({
      template: `
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
        </Dialog>
      `,
      components: {
        Dialog,
        DialogTrigger,
      },
    })

    expect(wrapper.findComponent(DialogTrigger).element.tagName).toBe('BUTTON')
  })
})
