import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

describe('accordion', () => {
  it('renders Accordion with data-slot', () => {
    const wrapper = mount({
      template: `
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Trigger</AccordionTrigger>
            <AccordionContent>Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      `,
      components: {
        Accordion,
        AccordionItem,
        AccordionTrigger,
        AccordionContent,
      },
    })

    expect(wrapper.find('[data-slot="accordion"]').exists()).toBe(true)
  })

  it('renders AccordionItem with data-slot and border class', () => {
    const wrapper = mount({
      template: `
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">Item</AccordionItem>
        </Accordion>
      `,
      components: {
        Accordion,
        AccordionItem,
      },
    })

    expect(wrapper.find('[data-slot="accordion-item"]').exists()).toBe(true)
    expect(wrapper.find('.border-b').exists()).toBe(true)
  })

  it('renders AccordionTrigger with data-slot', () => {
    const wrapper = mount({
      template: `
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Trigger Text</AccordionTrigger>
          </AccordionItem>
        </Accordion>
      `,
      components: {
        Accordion,
        AccordionItem,
        AccordionTrigger,
      },
    })

    expect(wrapper.find('[data-slot="accordion-trigger"]').exists()).toBe(true)
    expect(wrapper.text()).toContain('Trigger Text')
  })

  it('renders AccordionContent with data-slot wrapping content', () => {
    const wrapper = mount({
      template: `
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Trigger</AccordionTrigger>
            <AccordionContent>Content Text</AccordionContent>
          </AccordionItem>
        </Accordion>
      `,
      components: {
        Accordion,
        AccordionItem,
        AccordionTrigger,
        AccordionContent,
      },
    })

    expect(wrapper.find('[data-slot="accordion-content"]').exists()).toBe(true)
  })

  it('renders multiple accordion items', () => {
    const wrapper = mount({
      template: `
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger>Trigger 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Trigger 2</AccordionTrigger>
            <AccordionContent>Content 2</AccordionContent>
          </AccordionItem>
        </Accordion>
      `,
      components: {
        Accordion,
        AccordionItem,
        AccordionTrigger,
        AccordionContent,
      },
    })

    expect(wrapper.findAll('[data-slot="accordion-item"]')).toHaveLength(2)
  })

  it('applies custom class to AccordionItem', () => {
    const wrapper = mount({
      template: `
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" class="custom-item">Item</AccordionItem>
        </Accordion>
      `,
      components: {
        Accordion,
        AccordionItem,
      },
    })

    expect(wrapper.find('.custom-item').exists()).toBe(true)
  })

  it('applies custom class to AccordionTrigger', () => {
    const wrapper = mount({
      template: `
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger class="custom-trigger">Trigger</AccordionTrigger>
          </AccordionItem>
        </Accordion>
      `,
      components: {
        Accordion,
        AccordionItem,
        AccordionTrigger,
      },
    })

    expect(wrapper.find('.custom-trigger').exists()).toBe(true)
  })

  it('AccordionContent renders with data-slot and animation classes', () => {
    const wrapper = mount({
      template: `
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Trigger</AccordionTrigger>
            <AccordionContent>Inner Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      `,
      components: {
        Accordion,
        AccordionItem,
        AccordionTrigger,
        AccordionContent,
      },
    })

    const content = wrapper.find('[data-slot="accordion-content"]')
    expect(content.exists()).toBe(true)
    expect(content.classes()).toContain('data-[state=closed]:animate-accordion-up')
    expect(content.classes()).toContain('data-[state=open]:animate-accordion-down')
  })
})