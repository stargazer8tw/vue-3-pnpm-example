import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../'

describe('breadcrumb', () => {
  it('renders Breadcrumb with data-slot', () => {
    const wrapper = mount(Breadcrumb)

    expect(wrapper.attributes('data-slot')).toBe('breadcrumb')
  })

  it('renders Breadcrumb with aria-label', () => {
    const wrapper = mount(Breadcrumb)

    expect(wrapper.attributes('aria-label')).toBe('breadcrumb')
  })

  it('renders Breadcrumb as nav element', () => {
    const wrapper = mount(Breadcrumb)

    expect(wrapper.element.tagName).toBe('NAV')
  })

  it('applies custom class to Breadcrumb', () => {
    const wrapper = mount(Breadcrumb, {
      props: { class: 'custom-breadcrumb' },
    })

    expect(wrapper.classes()).toContain('custom-breadcrumb')
  })

  it('renders BreadcrumbEllipsis with data-slot', () => {
    const wrapper = mount(BreadcrumbEllipsis)

    expect(wrapper.attributes('data-slot')).toBe('breadcrumb-ellipsis')
  })

  it('renders BreadcrumbEllipsis with role="presentation"', () => {
    const wrapper = mount(BreadcrumbEllipsis)

    expect(wrapper.attributes('role')).toBe('presentation')
  })

  it('renders BreadcrumbEllipsis with aria-hidden="true"', () => {
    const wrapper = mount(BreadcrumbEllipsis)

    expect(wrapper.attributes('aria-hidden')).toBe('true')
  })

  it('renders BreadcrumbEllipsis as span element', () => {
    const wrapper = mount(BreadcrumbEllipsis)

    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('renders BreadcrumbEllipsis with base classes', () => {
    const wrapper = mount(BreadcrumbEllipsis)

    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('items-center')
    expect(wrapper.classes()).toContain('justify-center')
  })

  it('applies custom class to BreadcrumbEllipsis', () => {
    const wrapper = mount(BreadcrumbEllipsis, {
      props: { class: 'custom-ellipsis' },
    })

    expect(wrapper.classes()).toContain('custom-ellipsis')
  })

  it('renders BreadcrumbItem with data-slot', () => {
    const wrapper = mount(BreadcrumbItem)

    expect(wrapper.attributes('data-slot')).toBe('breadcrumb-item')
  })

  it('renders BreadcrumbItem as li element', () => {
    const wrapper = mount(BreadcrumbItem)

    expect(wrapper.element.tagName).toBe('LI')
  })

  it('renders BreadcrumbItem with base classes', () => {
    const wrapper = mount(BreadcrumbItem)

    expect(wrapper.classes()).toContain('inline-flex')
    expect(wrapper.classes()).toContain('items-center')
  })

  it('applies custom class to BreadcrumbItem', () => {
    const wrapper = mount(BreadcrumbItem, {
      props: { class: 'custom-item' },
    })

    expect(wrapper.classes()).toContain('custom-item')
  })

  it('renders BreadcrumbLink with data-slot', () => {
    const wrapper = mount(BreadcrumbLink)

    expect(wrapper.attributes('data-slot')).toBe('breadcrumb-link')
  })

  it('renders BreadcrumbLink as anchor by default', () => {
    const wrapper = mount(BreadcrumbLink)

    expect(wrapper.element.tagName).toBe('A')
  })

  it('renders BreadcrumbLink with base classes', () => {
    const wrapper = mount(BreadcrumbLink)

    expect(wrapper.classes()).toContain('hover:text-foreground')
    expect(wrapper.classes()).toContain('transition-colors')
  })

  it('renders BreadcrumbLink with custom as prop', () => {
    const wrapper = mount(BreadcrumbLink, {
      props: { as: 'button' },
    })

    expect(wrapper.element.tagName).toBe('BUTTON')
  })

  it('applies custom class to BreadcrumbLink', () => {
    const wrapper = mount(BreadcrumbLink, {
      props: { class: 'custom-link' },
    })

    expect(wrapper.classes()).toContain('custom-link')
  })

  it('renders BreadcrumbList with data-slot', () => {
    const wrapper = mount(BreadcrumbList)

    expect(wrapper.attributes('data-slot')).toBe('breadcrumb-list')
  })

  it('renders BreadcrumbList as ol element', () => {
    const wrapper = mount(BreadcrumbList)

    expect(wrapper.element.tagName).toBe('OL')
  })

  it('renders BreadcrumbList with base classes', () => {
    const wrapper = mount(BreadcrumbList)

    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('flex-wrap')
    expect(wrapper.classes()).toContain('items-center')
  })

  it('applies custom class to BreadcrumbList', () => {
    const wrapper = mount(BreadcrumbList, {
      props: { class: 'custom-list' },
    })

    expect(wrapper.classes()).toContain('custom-list')
  })

  it('renders BreadcrumbPage with data-slot', () => {
    const wrapper = mount(BreadcrumbPage)

    expect(wrapper.attributes('data-slot')).toBe('breadcrumb-page')
  })

  it('renders BreadcrumbPage with role="link"', () => {
    const wrapper = mount(BreadcrumbPage)

    expect(wrapper.attributes('role')).toBe('link')
  })

  it('renders BreadcrumbPage with aria-disabled="true"', () => {
    const wrapper = mount(BreadcrumbPage)

    expect(wrapper.attributes('aria-disabled')).toBe('true')
  })

  it('renders BreadcrumbPage with aria-current="page"', () => {
    const wrapper = mount(BreadcrumbPage)

    expect(wrapper.attributes('aria-current')).toBe('page')
  })

  it('renders BreadcrumbPage as span element', () => {
    const wrapper = mount(BreadcrumbPage)

    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('renders BreadcrumbPage with base classes', () => {
    const wrapper = mount(BreadcrumbPage)

    expect(wrapper.classes()).toContain('text-foreground')
    expect(wrapper.classes()).toContain('font-normal')
  })

  it('applies custom class to BreadcrumbPage', () => {
    const wrapper = mount(BreadcrumbPage, {
      props: { class: 'custom-page' },
    })

    expect(wrapper.classes()).toContain('custom-page')
  })

  it('renders BreadcrumbSeparator with data-slot', () => {
    const wrapper = mount(BreadcrumbSeparator)

    expect(wrapper.attributes('data-slot')).toBe('breadcrumb-separator')
  })

  it('renders BreadcrumbSeparator with role="presentation"', () => {
    const wrapper = mount(BreadcrumbSeparator)

    expect(wrapper.attributes('role')).toBe('presentation')
  })

  it('renders BreadcrumbSeparator with aria-hidden="true"', () => {
    const wrapper = mount(BreadcrumbSeparator)

    expect(wrapper.attributes('aria-hidden')).toBe('true')
  })

  it('renders BreadcrumbSeparator as li element', () => {
    const wrapper = mount(BreadcrumbSeparator)

    expect(wrapper.element.tagName).toBe('LI')
  })

  it('renders BreadcrumbSeparator with base classes', () => {
    const wrapper = mount(BreadcrumbSeparator)

    expect(wrapper.classes()).toContain('[&>svg]:size-3.5')
  })

  it('applies custom class to BreadcrumbSeparator', () => {
    const wrapper = mount(BreadcrumbSeparator, {
      props: { class: 'custom-separator' },
    })

    expect(wrapper.classes()).toContain('custom-separator')
  })

  it('renders full breadcrumb navigation', () => {
    const wrapper = mount({
      template: `
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Current Page</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      `,
      components: {
        Breadcrumb,
        BreadcrumbList,
        BreadcrumbItem,
        BreadcrumbLink,
        BreadcrumbPage,
        BreadcrumbSeparator,
      },
    })

    expect(wrapper.findComponent(Breadcrumb).exists()).toBe(true)
    expect(wrapper.findComponent(BreadcrumbList).exists()).toBe(true)
    expect(wrapper.findComponent(BreadcrumbItem).exists()).toBe(true)
    expect(wrapper.findComponent(BreadcrumbLink).exists()).toBe(true)
    expect(wrapper.findComponent(BreadcrumbPage).exists()).toBe(true)
    expect(wrapper.findComponent(BreadcrumbSeparator).exists()).toBe(true)
  })
})
