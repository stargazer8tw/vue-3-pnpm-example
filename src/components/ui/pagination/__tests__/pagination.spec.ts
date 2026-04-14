import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

describe('pagination', () => {
  it('renders Pagination with data-slot', () => {
    const wrapper = mount(Pagination)

    expect(wrapper.attributes('data-slot')).toBe('pagination')
  })

  it('renders Pagination with base classes', () => {
    const wrapper = mount(Pagination)

    expect(wrapper.classes()).toContain('mx-auto')
    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('w-full')
    expect(wrapper.classes()).toContain('justify-center')
  })

  it('renders Pagination as nav element', () => {
    const wrapper = mount(Pagination)

    expect(wrapper.element.tagName).toBe('NAV')
  })

  it('applies custom class to Pagination', () => {
    const wrapper = mount(Pagination, {
      props: { class: 'custom-pagination' },
    })

    expect(wrapper.classes()).toContain('custom-pagination')
  })

  it('renders PaginationContent with data-slot', () => {
    const wrapper = mount({
      template: `
        <Pagination>
          <PaginationContent>Content</PaginationContent>
        </Pagination>
      `,
      components: { Pagination, PaginationContent },
    })

    expect(wrapper.find('[data-slot="pagination-content"]').exists()).toBe(true)
  })

  it('renders PaginationEllipsis with data-slot', () => {
    const wrapper = mount({
      template: `
        <Pagination>
          <PaginationContent>
            <PaginationEllipsis />
          </PaginationContent>
        </Pagination>
      `,
      components: { Pagination, PaginationContent, PaginationEllipsis },
    })

    expect(wrapper.find('[data-slot="pagination-ellipsis"]').exists()).toBe(true)
  })

  it('renders PaginationItem with data-slot', () => {
    const wrapper = mount({
      template: `
        <Pagination>
          <PaginationContent>
            <PaginationItem>1</PaginationItem>
          </PaginationContent>
        </Pagination>
      `,
      components: { Pagination, PaginationContent, PaginationItem },
    })

    expect(wrapper.find('[data-slot="pagination-item"]').exists()).toBe(true)
  })

  it('renders PaginationFirst with data-slot', () => {
    const wrapper = mount({
      template: `
        <Pagination>
          <PaginationContent>
            <PaginationFirst />
          </PaginationContent>
        </Pagination>
      `,
      components: { Pagination, PaginationContent, PaginationFirst },
    })

    expect(wrapper.find('[data-slot="pagination-first"]').exists()).toBe(true)
  })

  it('renders PaginationLast with data-slot', () => {
    const wrapper = mount({
      template: `
        <Pagination>
          <PaginationContent>
            <PaginationLast />
          </PaginationContent>
        </Pagination>
      `,
      components: { Pagination, PaginationContent, PaginationLast },
    })

    expect(wrapper.find('[data-slot="pagination-last"]').exists()).toBe(true)
  })

  it('renders PaginationNext with data-slot', () => {
    const wrapper = mount({
      template: `
        <Pagination>
          <PaginationContent>
            <PaginationNext />
          </PaginationContent>
        </Pagination>
      `,
      components: { Pagination, PaginationContent, PaginationNext },
    })

    expect(wrapper.find('[data-slot="pagination-next"]').exists()).toBe(true)
  })

  it('renders PaginationPrevious with data-slot', () => {
    const wrapper = mount({
      template: `
        <Pagination>
          <PaginationContent>
            <PaginationPrevious />
          </PaginationContent>
        </Pagination>
      `,
      components: { Pagination, PaginationContent, PaginationPrevious },
    })

    expect(wrapper.find('[data-slot="pagination-previous"]').exists()).toBe(true)
  })

  it('renders full pagination structure', () => {
    const wrapper = mount({
      template: `
        <Pagination>
          <PaginationContent>
            <PaginationFirst />
            <PaginationPrevious />
            <PaginationItem>1</PaginationItem>
            <PaginationItem>2</PaginationItem>
            <PaginationEllipsis />
            <PaginationNext />
            <PaginationLast />
          </PaginationContent>
        </Pagination>
      `,
      components: {
        Pagination,
        PaginationContent,
        PaginationEllipsis,
        PaginationItem,
        PaginationFirst,
        PaginationLast,
        PaginationNext,
        PaginationPrevious,
      },
    })

    expect(wrapper.findComponent(Pagination).exists()).toBe(true)
    expect(wrapper.findComponent(PaginationContent).exists()).toBe(true)
    expect(wrapper.findComponent(PaginationFirst).exists()).toBe(true)
    expect(wrapper.findComponent(PaginationLast).exists()).toBe(true)
    expect(wrapper.findComponent(PaginationNext).exists()).toBe(true)
    expect(wrapper.findComponent(PaginationPrevious).exists()).toBe(true)
  })
})
