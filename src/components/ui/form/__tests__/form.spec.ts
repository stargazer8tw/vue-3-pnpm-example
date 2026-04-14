import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { FormItem } from '@/components/ui/form'

describe('form', () => {
  describe('FormItem', () => {
    it('renders with data-slot attribute', () => {
      const wrapper = mount(FormItem)

      expect(wrapper.attributes('data-slot')).toBe('form-item')
    })

    it('renders with base styling classes', () => {
      const wrapper = mount(FormItem)

      expect(wrapper.classes()).toContain('grid')
      expect(wrapper.classes()).toContain('gap-2')
    })

    it('renders with custom class', () => {
      const wrapper = mount(FormItem, {
        props: { class: 'custom-form-item' },
      })

      expect(wrapper.classes()).toContain('custom-form-item')
    })

    it('renders with default slot content', () => {
      const wrapper = mount(FormItem, {
        slots: { default: 'Form Content' },
      })

      expect(wrapper.text()).toBe('Form Content')
    })
  })
})
