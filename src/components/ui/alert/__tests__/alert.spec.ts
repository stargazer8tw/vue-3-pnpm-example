import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Alert, AlertDescription, AlertTitle, alertVariants } from '@/components/ui/alert'

describe('alert', () => {
  it('renders Alert with data-slot', () => {
    const wrapper = mount(Alert, {
      slots: { default: 'Alert content' },
    })

    expect(wrapper.attributes('data-slot')).toBe('alert')
  })

  it('renders Alert with role alert', () => {
    const wrapper = mount(Alert, {
      slots: { default: 'Alert' },
    })

    expect(wrapper.attributes('role')).toBe('alert')
  })

  it('renders Alert with default variant classes', () => {
    const wrapper = mount(Alert, {
      slots: { default: 'Alert' },
    })

    expect(wrapper.classes()).toContain('relative')
    expect(wrapper.classes()).toContain('w-full')
    expect(wrapper.classes()).toContain('rounded-lg')
    expect(wrapper.classes()).toContain('border')
  })

  it('renders Alert with destructive variant', () => {
    const wrapper = mount(Alert, {
      props: { variant: 'destructive' },
      slots: { default: 'Destructive' },
    })

    const classes = alertVariants({ variant: 'destructive' })
    expect(wrapper.classes()).toContain(classes.split(' ')[0])
  })

  it('renders AlertTitle with data-slot', () => {
    const wrapper = mount(AlertTitle, {
      slots: { default: 'Title' },
    })

    expect(wrapper.attributes('data-slot')).toBe('alert-title')
  })

  it('renders AlertTitle as div element', () => {
    const wrapper = mount(AlertTitle, {
      slots: { default: 'Title' },
    })

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders AlertTitle with base classes', () => {
    const wrapper = mount(AlertTitle, {
      slots: { default: 'Title' },
    })

    expect(wrapper.classes()).toContain('col-start-2')
    expect(wrapper.classes()).toContain('line-clamp-1')
    expect(wrapper.classes()).toContain('font-medium')
    expect(wrapper.classes()).toContain('tracking-tight')
  })

  it('renders AlertTitle with slot content', () => {
    const wrapper = mount(AlertTitle, {
      slots: { default: 'Alert Title' },
    })

    expect(wrapper.text()).toContain('Alert Title')
  })

  it('applies custom class to AlertTitle', () => {
    const wrapper = mount(AlertTitle, {
      props: { class: 'custom-title' },
      slots: { default: 'Title' },
    })

    expect(wrapper.classes()).toContain('custom-title')
  })

  it('renders AlertDescription with data-slot', () => {
    const wrapper = mount(AlertDescription, {
      slots: { default: 'Description' },
    })

    expect(wrapper.attributes('data-slot')).toBe('alert-description')
  })

  it('renders AlertDescription as div element', () => {
    const wrapper = mount(AlertDescription, {
      slots: { default: 'Description' },
    })

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders AlertDescription with base classes', () => {
    const wrapper = mount(AlertDescription, {
      slots: { default: 'Description' },
    })

    expect(wrapper.classes()).toContain('text-muted-foreground')
    expect(wrapper.classes()).toContain('col-start-2')
    expect(wrapper.classes()).toContain('text-sm')
  })

  it('renders AlertDescription with slot content', () => {
    const wrapper = mount(AlertDescription, {
      slots: { default: 'Alert Description' },
    })

    expect(wrapper.text()).toContain('Alert Description')
  })

  it('applies custom class to AlertDescription', () => {
    const wrapper = mount(AlertDescription, {
      props: { class: 'custom-description' },
      slots: { default: 'Description' },
    })

    expect(wrapper.classes()).toContain('custom-description')
  })

  it('applies custom class to Alert', () => {
    const wrapper = mount(Alert, {
      props: { class: 'custom-alert' },
      slots: { default: 'Alert' },
    })

    expect(wrapper.classes()).toContain('custom-alert')
  })

  it('alertVariants generates correct classes for default', () => {
    const classes = alertVariants({})
    expect(classes).toContain('relative')
    expect(classes).toContain('rounded-lg')
  })

  it('alertVariants generates correct classes for destructive', () => {
    const classes = alertVariants({ variant: 'destructive' })
    expect(classes).toContain('text-destructive')
  })
})
