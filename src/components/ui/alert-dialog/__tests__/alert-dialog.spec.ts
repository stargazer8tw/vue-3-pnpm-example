import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { AlertDialog, AlertDialogFooter, AlertDialogHeader } from '../'

describe('alert-dialog', () => {
  describe('AlertDialog', () => {
    it('renders AlertDialog as div element', () => {
      const wrapper = mount(AlertDialog)

      expect(wrapper.element.tagName).toBe('DIV')
    })
  })

  describe('AlertDialogHeader', () => {
    it('renders with data-slot attribute', () => {
      const wrapper = mount(AlertDialogHeader)

      expect(wrapper.attributes('data-slot')).toBe('alert-dialog-header')
    })

    it('renders with base styling classes', () => {
      const wrapper = mount(AlertDialogHeader)

      expect(wrapper.classes()).toContain('flex')
      expect(wrapper.classes()).toContain('flex-col')
      expect(wrapper.classes()).toContain('gap-2')
    })

    it('renders with custom class', () => {
      const wrapper = mount(AlertDialogHeader, {
        props: { class: 'custom-header' },
      })

      expect(wrapper.classes()).toContain('custom-header')
    })

    it('renders with default slot content', () => {
      const wrapper = mount(AlertDialogHeader, {
        slots: { default: 'Header Content' },
      })

      expect(wrapper.text()).toBe('Header Content')
    })
  })

  describe('AlertDialogFooter', () => {
    it('renders with data-slot attribute', () => {
      const wrapper = mount(AlertDialogFooter)

      expect(wrapper.attributes('data-slot')).toBe('alert-dialog-footer')
    })

    it('renders with base styling classes', () => {
      const wrapper = mount(AlertDialogFooter)
      expect(wrapper.classes()).toContain('flex')
      expect(wrapper.classes()).toContain('flex-col-reverse')
      expect(wrapper.classes()).toContain('sm:flex-row')
      expect(wrapper.classes()).toContain('sm:justify-end')
    })

    it('renders with default slot content', () => {
      const wrapper = mount(AlertDialogFooter, {
        slots: { default: 'Footer Content' },
      })

      expect(wrapper.text()).toBe('Footer Content')
    })

    it('applies custom class', () => {
      const wrapper = mount(AlertDialogFooter, {
        props: { class: 'custom-footer' },
      })

      expect(wrapper.classes()).toContain('custom-footer')
    })
  })
})
