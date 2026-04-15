import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '../'

describe('empty', () => {
  it('renders Empty with data-slot', () => {
    const wrapper = mount(Empty)

    expect(wrapper.attributes('data-slot')).toBe('empty')
  })

  it('renders Empty with base classes', () => {
    const wrapper = mount(Empty)

    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('flex-col')
    expect(wrapper.classes()).toContain('items-center')
    expect(wrapper.classes()).toContain('justify-center')
    expect(wrapper.classes()).toContain('rounded-lg')
    expect(wrapper.classes()).toContain('text-center')
  })

  it('renders Empty as div element', () => {
    const wrapper = mount(Empty)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders Empty with border-dashed class', () => {
    const wrapper = mount(Empty)

    expect(wrapper.classes()).toContain('border-dashed')
  })

  it('applies custom class to Empty', () => {
    const wrapper = mount(Empty, {
      props: { class: 'custom-empty' },
    })

    expect(wrapper.classes()).toContain('custom-empty')
  })

  it('renders EmptyContent with data-slot', () => {
    const wrapper = mount(EmptyContent, {
      slots: { default: 'Content' },
    })

    expect(wrapper.attributes('data-slot')).toBe('empty-content')
  })

  it('renders EmptyContent as div element', () => {
    const wrapper = mount(EmptyContent)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders EmptyContent with base classes', () => {
    const wrapper = mount(EmptyContent)

    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('flex-col')
    expect(wrapper.classes()).toContain('items-center')
    expect(wrapper.classes()).toContain('text-balance')
  })

  it('renders EmptyDescription with data-slot', () => {
    const wrapper = mount(EmptyDescription, {
      slots: { default: 'Description' },
    })

    expect(wrapper.attributes('data-slot')).toBe('empty-description')
  })

  it('renders EmptyDescription as paragraph element', () => {
    const wrapper = mount(EmptyDescription)

    expect(wrapper.element.tagName).toBe('P')
  })

  it('renders EmptyHeader with data-slot', () => {
    const wrapper = mount(EmptyHeader, {
      slots: { default: 'Header' },
    })

    expect(wrapper.attributes('data-slot')).toBe('empty-header')
  })

  it('renders EmptyHeader as div element', () => {
    const wrapper = mount(EmptyHeader)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders EmptyMedia with data-slot', () => {
    const wrapper = mount(EmptyMedia, {
      slots: { default: 'Media' },
    })

    expect(wrapper.attributes('data-slot')).toBe('empty-icon')
  })

  it('renders EmptyMedia as div element', () => {
    const wrapper = mount(EmptyMedia)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders EmptyTitle with data-slot', () => {
    const wrapper = mount(EmptyTitle, {
      slots: { default: 'Title' },
    })

    expect(wrapper.attributes('data-slot')).toBe('empty-title')
  })

  it('renders EmptyTitle as div element', () => {
    const wrapper = mount(EmptyTitle)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders full empty structure', () => {
    const wrapper = mount({
      template: `
        <Empty>
          <EmptyMedia>Icon</EmptyMedia>
          <EmptyHeader>
            <EmptyTitle>Title</EmptyTitle>
            <EmptyDescription>Description</EmptyDescription>
          </EmptyHeader>
          <EmptyContent>Content</EmptyContent>
        </Empty>
      `,
      components: {
        Empty,
        EmptyMedia,
        EmptyHeader,
        EmptyTitle,
        EmptyDescription,
        EmptyContent,
      },
    })

    expect(wrapper.findComponent(Empty).exists()).toBe(true)
    expect(wrapper.findComponent(EmptyMedia).exists()).toBe(true)
    expect(wrapper.findComponent(EmptyHeader).exists()).toBe(true)
    expect(wrapper.findComponent(EmptyTitle).exists()).toBe(true)
    expect(wrapper.findComponent(EmptyDescription).exists()).toBe(true)
    expect(wrapper.findComponent(EmptyContent).exists()).toBe(true)
  })
})
