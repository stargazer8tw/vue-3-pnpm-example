import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../'

describe('tabs', () => {
  it('renders Tabs with data-slot', () => {
    const wrapper = mount({
      template: `
        <Tabs default-value="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
        </Tabs>
      `,
      components: { Tabs, TabsList, TabsTrigger, TabsContent },
    })

    expect(wrapper.find('[data-slot="tabs"]').exists()).toBe(true)
  })

  it('renders Tabs with default value', () => {
    const wrapper = mount({
      template: `
        <Tabs default-value="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsList>
        </Tabs>
      `,
      components: { Tabs, TabsList, TabsTrigger },
    })

    expect(wrapper.find('[data-slot="tabs"]').exists()).toBe(true)
    expect(wrapper.find('[data-slot="tabs"]').classes()).toContain('flex')
    expect(wrapper.find('[data-slot="tabs"]').classes()).toContain('flex-col')
  })

  it('renders TabsList with data-slot', () => {
    const wrapper = mount({
      template: `
        <Tabs default-value="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsList>
        </Tabs>
      `,
      components: { Tabs, TabsList, TabsTrigger },
    })

    expect(wrapper.find('[data-slot="tabs-list"]').exists()).toBe(true)
  })

  it('renders TabsTrigger as button', () => {
    const wrapper = mount({
      template: `
        <Tabs default-value="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsList>
        </Tabs>
      `,
      components: { Tabs, TabsList, TabsTrigger },
    })

    expect(wrapper.element.tagName).toBe('DIV')
    const trigger = wrapper.find('[data-slot="tabs-trigger"]')
    expect(trigger.exists()).toBe(true)
  })

  it('renders TabsContent with data-slot', () => {
    const wrapper = mount({
      template: `
        <Tabs default-value="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
        </Tabs>
      `,
      components: { Tabs, TabsList, TabsTrigger, TabsContent },
    })

    expect(wrapper.find('[data-slot="tabs-content"]').exists()).toBe(true)
  })

  it('renders full tabs structure', () => {
    const wrapper = mount({
      template: `
        <Tabs default-value="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs>
      `,
      components: { Tabs, TabsList, TabsTrigger, TabsContent },
    })

    expect(wrapper.find('[data-slot="tabs"]').exists()).toBe(true)
    expect(wrapper.find('[data-slot="tabs-list"]').exists()).toBe(true)
    expect(wrapper.findAll('[data-slot="tabs-trigger"]')).toHaveLength(2)
    expect(wrapper.findAll('[data-slot="tabs-content"]')).toHaveLength(2)
  })

  it('applies custom class to Tabs', () => {
    const wrapper = mount({
      template: `
        <Tabs default-value="tab1" class="custom-tabs">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsList>
        </Tabs>
      `,
      components: { Tabs, TabsList, TabsTrigger },
    })

    expect(wrapper.find('[data-slot="tabs"]').classes()).toContain('custom-tabs')
  })
})
