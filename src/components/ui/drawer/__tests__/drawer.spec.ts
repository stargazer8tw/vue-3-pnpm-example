import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerTitle,
  DrawerTrigger
} from '../'

vi.mock('vaul-vue', () => ({
  DrawerRoot: {
    name: 'DrawerRoot',
    props: ['shouldScaleBackground'],
    template: '<div data-testid="drawer-root"><slot /></div>'
  },
  DrawerPortal: {
    name: 'DrawerPortal',
    template: '<div data-testid="drawer-portal"><slot /></div>'
  },
  DrawerTrigger: {
    name: 'DrawerTrigger',
    template: '<button data-testid="drawer-trigger"><slot /></button>'
  },
  DrawerClose: {
    name: 'DrawerClose',
    template: '<button data-testid="drawer-close"><slot /></button>'
  },
  DrawerOverlay: {
    name: 'DrawerOverlay',
    template: '<div data-testid="drawer-overlay" />'
  },
  DrawerContent: {
    name: 'DrawerContent',
    template: '<div data-testid="drawer-content"><slot /></div>'
  },
  DrawerTitle: {
    name: 'DrawerTitle',
    template: '<h2 data-testid="drawer-title"><slot /></h2>'
  },
  DrawerDescription: {
    name: 'DrawerDescription',
    template: '<p data-testid="drawer-description"><slot /></p>'
  }
}))

vi.mock('reka-ui', () => ({
  useForwardPropsEmits: () => ({})
}))

describe('drawer', () => {
  it('renders Drawer with data-slot', () => {
    const wrapper = mount(Drawer)
    expect(wrapper.find('[data-slot="drawer"]').exists()).toBe(true)
  })

  it('renders Drawer as div element', () => {
    const wrapper = mount(Drawer)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders DrawerHeader with data-slot', () => {
    const wrapper = mount(DrawerHeader)
    expect(wrapper.find('[data-slot="drawer-header"]').exists()).toBe(true)
  })

  it('renders DrawerHeader with base classes', () => {
    const wrapper = mount(DrawerHeader)
    const el = wrapper.find('[data-slot="drawer-header"]')
    expect(el.classes()).toContain('flex')
    expect(el.classes()).toContain('flex-col')
    expect(el.classes()).toContain('gap-1.5')
    expect(el.classes()).toContain('p-4')
  })

  it('renders DrawerHeader with slot content', () => {
    const wrapper = mount(DrawerHeader, {
      slots: { default: 'Header Content' }
    })
    expect(wrapper.text()).toContain('Header Content')
  })

  it('applies custom class to DrawerHeader', () => {
    const wrapper = mount(DrawerHeader, {
      props: { class: 'custom-header' }
    })
    expect(wrapper.find('[data-slot="drawer-header"]').classes()).toContain('custom-header')
  })

  it('renders DrawerFooter with data-slot', () => {
    const wrapper = mount(DrawerFooter)
    expect(wrapper.find('[data-slot="drawer-footer"]').exists()).toBe(true)
  })

  it('renders DrawerFooter with base classes', () => {
    const wrapper = mount(DrawerFooter)
    const el = wrapper.find('[data-slot="drawer-footer"]')
    expect(el.classes()).toContain('mt-auto')
    expect(el.classes()).toContain('flex')
    expect(el.classes()).toContain('flex-col')
    expect(el.classes()).toContain('gap-2')
    expect(el.classes()).toContain('p-4')
  })

  it('renders DrawerFooter with slot content', () => {
    const wrapper = mount(DrawerFooter, {
      slots: { default: 'Footer Content' }
    })
    expect(wrapper.text()).toContain('Footer Content')
  })

  it('applies custom class to DrawerFooter', () => {
    const wrapper = mount(DrawerFooter, {
      props: { class: 'custom-footer' }
    })
    expect(wrapper.find('[data-slot="drawer-footer"]').classes()).toContain('custom-footer')
  })

  it('renders DrawerTrigger with data-slot', () => {
    const wrapper = mount({
      template: `
        <Drawer>
          <DrawerTrigger>Open Drawer</DrawerTrigger>
        </Drawer>
      `,
      components: { Drawer, DrawerTrigger }
    })
    expect(wrapper.find('[data-slot="drawer-trigger"]').exists()).toBe(true)
  })

  it('renders DrawerTrigger as button element', () => {
    const wrapper = mount({
      template: `
        <Drawer>
          <DrawerTrigger>Open Drawer</DrawerTrigger>
        </Drawer>
      `,
      components: { Drawer, DrawerTrigger }
    })
    expect(wrapper.find('[data-slot="drawer-trigger"]').element.tagName).toBe('BUTTON')
  })

  it('renders DrawerTrigger with slot content', () => {
    const wrapper = mount({
      template: `
        <Drawer>
          <DrawerTrigger>Open Drawer</DrawerTrigger>
        </Drawer>
      `,
      components: { Drawer, DrawerTrigger }
    })
    expect(wrapper.find('[data-slot="drawer-trigger"]').text()).toContain('Open Drawer')
  })

  it('renders DrawerClose with data-slot', () => {
    const wrapper = mount({
      template: `
        <Drawer>
          <DrawerClose>Close</DrawerClose>
        </Drawer>
      `,
      components: { Drawer, DrawerClose }
    })
    expect(wrapper.find('[data-slot="drawer-close"]').exists()).toBe(true)
  })

  it('renders DrawerClose as button element', () => {
    const wrapper = mount({
      template: `
        <Drawer>
          <DrawerClose>Close</DrawerClose>
        </Drawer>
      `,
      components: { Drawer, DrawerClose }
    })
    expect(wrapper.find('[data-slot="drawer-close"]').element.tagName).toBe('BUTTON')
  })

  it('renders DrawerClose with slot content', () => {
    const wrapper = mount({
      template: `
        <Drawer>
          <DrawerClose>Close Me</DrawerClose>
        </Drawer>
      `,
      components: { Drawer, DrawerClose }
    })
    expect(wrapper.find('[data-slot="drawer-close"]').text()).toContain('Close Me')
  })

  it('renders DrawerTitle with data-slot', () => {
    const wrapper = mount({
      template: `
        <Drawer>
          <DrawerTitle>Title</DrawerTitle>
        </Drawer>
      `,
      components: { Drawer, DrawerTitle }
    })
    expect(wrapper.find('[data-slot="drawer-title"]').exists()).toBe(true)
  })

  it('renders DrawerTitle with slot content', () => {
    const wrapper = mount({
      template: `
        <Drawer>
          <DrawerTitle>My Title</DrawerTitle>
        </Drawer>
      `,
      components: { Drawer, DrawerTitle }
    })
    expect(wrapper.find('[data-slot="drawer-title"]').text()).toContain('My Title')
  })

  it('applies custom class to DrawerTitle', () => {
    const wrapper = mount({
      template: `
        <Drawer>
          <DrawerTitle class="custom-title">Title</DrawerTitle>
        </Drawer>
      `,
      components: { Drawer, DrawerTitle }
    })
    expect(wrapper.find('[data-slot="drawer-title"]').classes()).toContain('custom-title')
  })

  it('renders DrawerDescription with data-slot', () => {
    const wrapper = mount({
      template: `
        <Drawer>
          <DrawerDescription>Desc</DrawerDescription>
        </Drawer>
      `,
      components: { Drawer, DrawerDescription }
    })
    expect(wrapper.find('[data-slot="drawer-description"]').exists()).toBe(true)
  })

  it('renders DrawerDescription with slot content', () => {
    const wrapper = mount({
      template: `
        <Drawer>
          <DrawerDescription>Some description</DrawerDescription>
        </Drawer>
      `,
      components: { Drawer, DrawerDescription }
    })
    expect(wrapper.find('[data-slot="drawer-description"]').text()).toContain('Some description')
  })

  it('applies custom class to DrawerDescription', () => {
    const wrapper = mount({
      template: `
        <Drawer>
          <DrawerDescription class="custom-desc">Desc</DrawerDescription>
        </Drawer>
      `,
      components: { Drawer, DrawerDescription }
    })
    expect(wrapper.find('[data-slot="drawer-description"]').classes()).toContain('custom-desc')
  })

  it('renders DrawerOverlay with data-slot', () => {
    const wrapper = mount({
      template: `
        <Drawer>
          <DrawerOverlay />
        </Drawer>
      `,
      components: { Drawer, DrawerOverlay }
    })
    expect(wrapper.find('[data-slot="drawer-overlay"]').exists()).toBe(true)
  })

  it('applies custom class to DrawerOverlay', () => {
    const wrapper = mount({
      template: `
        <Drawer>
          <DrawerOverlay class="custom-overlay" />
        </Drawer>
      `,
      components: { Drawer, DrawerOverlay }
    })
    expect(wrapper.find('[data-slot="drawer-overlay"]').classes()).toContain('custom-overlay')
  })

  it('renders DrawerContent with data-slot', () => {
    const wrapper = mount({
      template: `
        <Drawer>
          <DrawerContent>Body</DrawerContent>
        </Drawer>
      `,
      components: { Drawer, DrawerContent }
    })
    expect(wrapper.find('[data-slot="drawer-content"]').exists()).toBe(true)
  })

  it('renders DrawerContent with slot content', () => {
    const wrapper = mount({
      template: `
        <Drawer>
          <DrawerContent>Body text</DrawerContent>
        </Drawer>
      `,
      components: { Drawer, DrawerContent }
    })
    expect(wrapper.find('[data-slot="drawer-content"]').text()).toContain('Body text')
  })

  it('renders DrawerContent with overlay', () => {
    const wrapper = mount({
      template: `
        <Drawer>
          <DrawerContent>Body</DrawerContent>
        </Drawer>
      `,
      components: { Drawer, DrawerContent }
    })
    expect(wrapper.find('[data-slot="drawer-overlay"]').exists()).toBe(true)
  })

  it('applies custom class to DrawerContent', () => {
    const wrapper = mount({
      template: `
        <Drawer>
          <DrawerContent class="custom-content">Body</DrawerContent>
        </Drawer>
      `,
      components: { Drawer, DrawerContent }
    })
    expect(wrapper.find('[data-slot="drawer-content"]').classes()).toContain('custom-content')
  })
})
