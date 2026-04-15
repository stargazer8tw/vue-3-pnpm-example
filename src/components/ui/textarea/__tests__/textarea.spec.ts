import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Textarea } from '@/components/ui/textarea'

describe('textarea', () => {
  it('renders Textarea with data-slot', () => {
    const wrapper = mount(Textarea)

    expect(wrapper.attributes('data-slot')).toBe('textarea')
  })

  it('renders Textarea with base styling classes', () => {
    const wrapper = mount(Textarea)

    expect(wrapper.classes()).toContain('border-input')
    expect(wrapper.classes()).toContain('placeholder:text-muted-foreground')
    expect(wrapper.classes()).toContain('min-h-16')
    expect(wrapper.classes()).toContain('rounded-md')
  })

  it('renders Textarea as textarea element', () => {
    const wrapper = mount(Textarea)

    expect(wrapper.element.tagName).toBe('TEXTAREA')
  })

  it('renders Textarea with placeholder', () => {
    const wrapper = mount(Textarea, {
      props: { placeholder: 'Enter description' },
    })

    expect(wrapper.attributes('placeholder')).toBe('Enter description')
  })

  it('renders Textarea with disabled state', () => {
    const wrapper = mount(Textarea, {
      props: { disabled: true },
    })

    expect(wrapper.attributes('disabled')).toBe('')
    expect(wrapper.classes()).toContain('disabled:cursor-not-allowed')
    expect(wrapper.classes()).toContain('disabled:opacity-50')
  })

  it('applies custom class to Textarea', () => {
    const wrapper = mount(Textarea, {
      props: { class: 'custom-textarea' },
    })

    expect(wrapper.classes()).toContain('custom-textarea')
  })

  it('binds v-model', async () => {
    const wrapper = mount(Textarea, {
      props: { modelValue: 'initial text' },
    })

    expect(wrapper.element.value).toBe('initial text')
  })
})
