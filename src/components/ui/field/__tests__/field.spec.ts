import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Field, FieldDescription, FieldError, FieldSeparator } from '@/components/ui/field'

describe('field', () => {
  it('renders Field with data-slot', () => {
    const wrapper = mount(Field)

    expect(wrapper.attributes('data-slot')).toBe('field')
  })

  it('renders Field with role="group"', () => {
    const wrapper = mount(Field)

    expect(wrapper.attributes('role')).toBe('group')
  })

  it('renders Field with base classes', () => {
    const wrapper = mount(Field)

    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('w-full')
    expect(wrapper.classes()).toContain('gap-3')
  })

  it('renders Field as div element', () => {
    const wrapper = mount(Field)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders Field with horizontal orientation', () => {
    const wrapper = mount(Field, {
      props: { orientation: 'horizontal' },
    })

    expect(wrapper.attributes('data-orientation')).toBe('horizontal')
  })

  it('applies custom class to Field', () => {
    const wrapper = mount(Field, {
      props: { class: 'custom-field' },
    })

    expect(wrapper.classes()).toContain('custom-field')
  })

  it('renders FieldDescription with data-slot', () => {
    const wrapper = mount(FieldDescription)

    expect(wrapper.attributes('data-slot')).toBe('field-description')
  })

  it('renders FieldDescription as p element', () => {
    const wrapper = mount(FieldDescription)

    expect(wrapper.element.tagName).toBe('P')
  })

  it('renders FieldDescription with base classes', () => {
    const wrapper = mount(FieldDescription)

    expect(wrapper.classes()).toContain('text-muted-foreground')
    expect(wrapper.classes()).toContain('text-sm')
  })

  it('renders FieldDescription with slot content', () => {
    const wrapper = mount(FieldDescription, {
      slots: { default: 'Description text' },
    })

    expect(wrapper.text()).toContain('Description text')
  })

  it('applies custom class to FieldDescription', () => {
    const wrapper = mount(FieldDescription, {
      props: { class: 'custom-description' },
    })

    expect(wrapper.classes()).toContain('custom-description')
  })

  it('renders FieldError with data-slot', () => {
    const wrapper = mount(FieldError, {
      slots: { default: 'Error message' },
    })

    expect(wrapper.attributes('data-slot')).toBe('field-error')
  })

  it('renders FieldError with role="alert"', () => {
    const wrapper = mount(FieldError, {
      slots: { default: 'Error message' },
    })

    expect(wrapper.attributes('role')).toBe('alert')
  })

  it('renders FieldError with base classes', () => {
    const wrapper = mount(FieldError, {
      slots: { default: 'Error message' },
    })

    expect(wrapper.classes()).toContain('text-destructive')
    expect(wrapper.classes()).toContain('text-sm')
  })

  it('renders FieldError with slot content', () => {
    const wrapper = mount(FieldError, {
      slots: { default: 'This field is required' },
    })

    expect(wrapper.text()).toContain('This field is required')
  })

  it('renders FieldError with errors prop', () => {
    const wrapper = mount(FieldError, {
      props: { errors: ['Error 1', 'Error 2'] },
    })

    expect(wrapper.text()).toContain('Error 1')
  })

  it('applies custom class to FieldError', () => {
    const wrapper = mount(FieldError, {
      props: { class: 'custom-error' },
      slots: { default: 'Error' },
    })

    expect(wrapper.classes()).toContain('custom-error')
  })

  it('renders FieldSeparator with data-slot', () => {
    const wrapper = mount(FieldSeparator)

    expect(wrapper.attributes('data-slot')).toBe('field-separator')
  })

  it('renders FieldSeparator with base classes', () => {
    const wrapper = mount(FieldSeparator)

    expect(wrapper.classes()).toContain('relative')
    expect(wrapper.classes()).toContain('-my-2')
  })

  it('applies custom class to FieldSeparator', () => {
    const wrapper = mount(FieldSeparator, {
      props: { class: 'custom-separator' },
    })

    expect(wrapper.classes()).toContain('custom-separator')
  })
})
