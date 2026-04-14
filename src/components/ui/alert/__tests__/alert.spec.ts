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

  it('renders AlertDescription with data-slot', () => {
    const wrapper = mount(AlertDescription, {
      slots: { default: 'Description' },
    })

    expect(wrapper.attributes('data-slot')).toBe('alert-description')
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
