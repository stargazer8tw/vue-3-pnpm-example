import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableEmpty,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

describe('table', () => {
  it('renders Table with data-slot table', () => {
    const wrapper = mount({
      template: `
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Header</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Cell</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      `,
      components: {
        Table,
        TableHeader,
        TableRow,
        TableHead,
        TableBody,
        TableCell,
      },
    })

    expect(wrapper.find('[data-slot="table"]').exists()).toBe(true)
  })

  it('renders TableContainer with data-slot', () => {
    const wrapper = mount({
      template: `
        <Table>
          <TableBody><TableRow><TableCell>Content</TableCell></TableRow></TableBody>
        </Table>
      `,
      components: { Table, TableBody, TableRow, TableCell },
    })

    expect(wrapper.find('[data-slot="table-container"]').exists()).toBe(true)
    expect(wrapper.find('[data-slot="table-container"]').classes()).toContain('relative')
    expect(wrapper.find('[data-slot="table-container"]').classes()).toContain('overflow-auto')
  })

  it('renders TableBody with data-slot', () => {
    const wrapper = mount(TableBody, {
      slots: { default: 'Body' },
    })

    expect(wrapper.attributes('data-slot')).toBe('table-body')
  })

  it('renders TableCaption with data-slot', () => {
    const wrapper = mount(TableCaption, {
      slots: { default: 'Caption' },
    })

    expect(wrapper.attributes('data-slot')).toBe('table-caption')
  })

  it('renders TableCell with data-slot', () => {
    const wrapper = mount(TableCell, {
      slots: { default: 'Cell' },
    })

    expect(wrapper.attributes('data-slot')).toBe('table-cell')
  })

  it('renders TableFooter with data-slot', () => {
    const wrapper = mount(TableFooter, {
      slots: { default: 'Footer' },
    })

    expect(wrapper.attributes('data-slot')).toBe('table-footer')
  })

  it('renders TableHead as th element', () => {
    const wrapper = mount(TableHead, {
      slots: { default: 'Head' },
    })

    expect(wrapper.element.tagName).toBe('TH')
    expect(wrapper.attributes('data-slot')).toBe('table-head')
  })

  it('renders TableHeader with data-slot', () => {
    const wrapper = mount(TableHeader, {
      slots: { default: 'Header' },
    })

    expect(wrapper.attributes('data-slot')).toBe('table-header')
  })

  it('renders TableRow with data-slot', () => {
    const wrapper = mount(TableRow, {
      slots: { default: 'Row' },
    })

    expect(wrapper.attributes('data-slot')).toBe('table-row')
  })

  it('renders full table structure', () => {
    const wrapper = mount({
      template: `
        <Table>
          <TableCaption>Table Caption</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Age</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John</TableCell>
              <TableCell>30</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableCell>Total: 1</TableCell>
          </TableFooter>
        </Table>
      `,
      components: {
        Table,
        TableCaption,
        TableHeader,
        TableRow,
        TableHead,
        TableBody,
        TableCell,
        TableFooter,
      },
    })

    expect(wrapper.find('[data-slot="table"]').exists()).toBe(true)
    expect(wrapper.find('[data-slot="table-caption"]').exists()).toBe(true)
    expect(wrapper.find('[data-slot="table-header"]').exists()).toBe(true)
    expect(wrapper.find('[data-slot="table-row"]').exists()).toBe(true)
    expect(wrapper.find('[data-slot="table-cell"]').exists()).toBe(true)
    expect(wrapper.find('[data-slot="table-footer"]').exists()).toBe(true)
  })

  it('applies custom class to Table', () => {
    const wrapper = mount({
      template: `
        <Table class="custom-table">
          <TableBody><TableRow><TableCell>Content</TableCell></TableRow></TableBody>
        </Table>
      `,
      components: { Table, TableBody, TableRow, TableCell },
    })

    expect(wrapper.find('[data-slot="table"]').classes()).toContain('custom-table')
  })

  it('renders TableEmpty with default colspan', () => {
    const wrapper = mount(TableEmpty, {
      slots: { default: 'No data' },
    })

    expect(wrapper.find('[data-slot="table-row"]').exists()).toBe(true)
    expect(wrapper.find('[data-slot="table-cell"]').exists()).toBe(true)
  })

  it('renders TableEmpty with custom colspan', () => {
    const wrapper = mount(TableEmpty, {
      props: { colspan: 3 },
      slots: { default: 'No data' },
    })

    expect(wrapper.find('[data-slot="table-cell"]').attributes('colspan')).toBe('3')
  })

  it('applies custom class to TableEmpty', () => {
    const wrapper = mount(TableEmpty, {
      props: { class: 'custom-empty' },
      slots: { default: 'No data' },
    })

    expect(wrapper.find('[data-slot="table-cell"]').classes()).toContain('custom-empty')
  })
})
