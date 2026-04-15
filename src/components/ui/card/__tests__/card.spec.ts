import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../'

describe('card', () => {
  it('renders Card with data-slot', () => {
    const wrapper = mount(Card, {
      slots: { default: 'Card Content' },
    })

    expect(wrapper.attributes('data-slot')).toBe('card')
  })

  it('renders Card with base classes', () => {
    const wrapper = mount(Card, {
      slots: { default: 'Card' },
    })

    expect(wrapper.classes()).toContain('bg-card')
    expect(wrapper.classes()).toContain('text-card-foreground')
    expect(wrapper.classes()).toContain('rounded-xl')
    expect(wrapper.classes()).toContain('border')
  })

  it('renders CardHeader with data-slot', () => {
    const wrapper = mount(CardHeader, {
      slots: { default: 'Header' },
    })

    expect(wrapper.attributes('data-slot')).toBe('card-header')
  })

  it('renders CardTitle with data-slot', () => {
    const wrapper = mount(CardTitle, {
      slots: { default: 'Title' },
    })

    expect(wrapper.attributes('data-slot')).toBe('card-title')
    expect(wrapper.element.tagName).toBe('H3')
  })

  it('renders CardDescription with data-slot', () => {
    const wrapper = mount(CardDescription, {
      slots: { default: 'Description' },
    })

    expect(wrapper.attributes('data-slot')).toBe('card-description')
  })

  it('renders CardContent with data-slot', () => {
    const wrapper = mount(CardContent, {
      slots: { default: 'Content' },
    })

    expect(wrapper.attributes('data-slot')).toBe('card-content')
  })

  it('renders CardFooter with data-slot', () => {
    const wrapper = mount(CardFooter, {
      slots: { default: 'Footer' },
    })

    expect(wrapper.attributes('data-slot')).toBe('card-footer')
  })

  it('renders CardAction with data-slot', () => {
    const wrapper = mount(CardAction, {
      slots: { default: 'Action' },
    })

    expect(wrapper.attributes('data-slot')).toBe('card-action')
  })

  it('applies custom class to Card', () => {
    const wrapper = mount(Card, {
      props: { class: 'custom-card' },
      slots: { default: 'Card' },
    })

    expect(wrapper.classes()).toContain('custom-card')
  })

  it('renders full card structure', () => {
    const wrapper = mount({
      template: `
        <Card>
          <CardHeader>
            <CardTitle>Title</CardTitle>
            <CardDescription>Description</CardDescription>
          </CardHeader>
          <CardContent>Content</CardContent>
          <CardFooter>Footer</CardFooter>
        </Card>
      `,
      components: {
        Card,
        CardHeader,
        CardTitle,
        CardDescription,
        CardContent,
        CardFooter,
      },
    })

    expect(wrapper.find('[data-slot="card"]').exists()).toBe(true)
    expect(wrapper.find('[data-slot="card-header"]').exists()).toBe(true)
    expect(wrapper.find('[data-slot="card-title"]').exists()).toBe(true)
    expect(wrapper.find('[data-slot="card-description"]').exists()).toBe(true)
    expect(wrapper.find('[data-slot="card-content"]').exists()).toBe(true)
    expect(wrapper.find('[data-slot="card-footer"]').exists()).toBe(true)
  })
})
