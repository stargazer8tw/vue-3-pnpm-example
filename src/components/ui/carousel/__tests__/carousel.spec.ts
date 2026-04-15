import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../'

describe('carousel', () => {
  it('renders Carousel with data-slot', () => {
    const wrapper = mount(Carousel)

    expect(wrapper.attributes('data-slot')).toBe('carousel')
  })

  it('renders Carousel with base classes', () => {
    const wrapper = mount(Carousel)

    expect(wrapper.classes()).toContain('relative')
  })

  it('renders Carousel as div element', () => {
    const wrapper = mount(Carousel)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders Carousel with role="region"', () => {
    const wrapper = mount(Carousel)

    expect(wrapper.attributes('role')).toBe('region')
  })

  it('renders Carousel with aria-roledescription', () => {
    const wrapper = mount(Carousel)

    expect(wrapper.attributes('aria-roledescription')).toBe('carousel')
  })

  it('renders Carousel with default horizontal orientation', () => {
    const wrapper = mount(Carousel)

    expect(wrapper.attributes('tabindex')).toBe('0')
  })

  it('applies custom class to Carousel', () => {
    const wrapper = mount(Carousel, {
      props: { class: 'custom-carousel' },
    })

    expect(wrapper.classes()).toContain('custom-carousel')
  })

  it('renders Carousel with vertical orientation', () => {
    const wrapper = mount(Carousel, {
      props: { orientation: 'vertical' },
    })

    expect(wrapper.exists()).toBe(true)
  })

  it('renders CarouselContent with data-slot', () => {
    const wrapper = mount({
      template: `
        <Carousel>
          <CarouselContent>Content</CarouselContent>
        </Carousel>
      `,
      components: { Carousel, CarouselContent },
    })

    expect(wrapper.findComponent(CarouselContent).exists()).toBe(true)
    expect(wrapper.findComponent(CarouselContent).attributes('data-slot')).toBe('carousel-content')
  })

  it('renders CarouselContent with overflow-hidden class', () => {
    const wrapper = mount({
      template: `
        <Carousel>
          <CarouselContent>Content</CarouselContent>
        </Carousel>
      `,
      components: { Carousel, CarouselContent },
    })

    expect(wrapper.findComponent(CarouselContent).classes()).toContain('overflow-hidden')
  })

  it('applies custom class to CarouselContent', () => {
    const wrapper = mount({
      template: `
        <Carousel>
          <CarouselContent class="custom-content">Content</CarouselContent>
        </Carousel>
      `,
      components: { Carousel, CarouselContent },
    })

    const contentDivs = wrapper.findComponent(CarouselContent).findAll('div')
    expect(contentDivs[1].classes()).toContain('custom-content')
  })

  it('renders CarouselItem with data-slot', () => {
    const wrapper = mount({
      template: `
        <Carousel>
          <CarouselContent>
            <CarouselItem>Slide 1</CarouselItem>
          </CarouselContent>
        </Carousel>
      `,
      components: { Carousel, CarouselContent, CarouselItem },
    })

    expect(wrapper.findComponent(CarouselItem).exists()).toBe(true)
    expect(wrapper.findComponent(CarouselItem).attributes('data-slot')).toBe('carousel-item')
  })

  it('renders CarouselItem with role="group"', () => {
    const wrapper = mount({
      template: `
        <Carousel>
          <CarouselContent>
            <CarouselItem>Slide 1</CarouselItem>
          </CarouselContent>
        </Carousel>
      `,
      components: { Carousel, CarouselContent, CarouselItem },
    })

    expect(wrapper.findComponent(CarouselItem).attributes('role')).toBe('group')
  })

  it('renders CarouselItem with aria-roledescription="slide"', () => {
    const wrapper = mount({
      template: `
        <Carousel>
          <CarouselContent>
            <CarouselItem>Slide 1</CarouselItem>
          </CarouselContent>
        </Carousel>
      `,
      components: { Carousel, CarouselContent, CarouselItem },
    })

    expect(wrapper.findComponent(CarouselItem).attributes('aria-roledescription')).toBe('slide')
  })

  it('applies custom class to CarouselItem', () => {
    const wrapper = mount({
      template: `
        <Carousel>
          <CarouselContent>
            <CarouselItem class="custom-item">Slide 1</CarouselItem>
          </CarouselContent>
        </Carousel>
      `,
      components: { Carousel, CarouselContent, CarouselItem },
    })

    expect(wrapper.findComponent(CarouselItem).classes()).toContain('custom-item')
  })

  it('renders multiple CarouselItems', () => {
    const wrapper = mount({
      template: `
        <Carousel>
          <CarouselContent>
            <CarouselItem>Slide 1</CarouselItem>
            <CarouselItem>Slide 2</CarouselItem>
            <CarouselItem>Slide 3</CarouselItem>
          </CarouselContent>
        </Carousel>
      `,
      components: { Carousel, CarouselContent, CarouselItem },
    })

    expect(wrapper.findAllComponents(CarouselItem)).toHaveLength(3)
  })

  it('renders CarouselNext with data-slot', () => {
    const wrapper = mount({
      template: `
        <Carousel>
          <CarouselNext>Next</CarouselNext>
        </Carousel>
      `,
      components: { Carousel, CarouselNext },
    })

    expect(wrapper.findComponent(CarouselNext).exists()).toBe(true)
    expect(wrapper.findComponent(CarouselNext).attributes('data-slot')).toBe('carousel-next')
  })

  it('applies custom class to CarouselNext', () => {
    const wrapper = mount({
      template: `
        <Carousel>
          <CarouselNext class="custom-next">Next</CarouselNext>
        </Carousel>
      `,
      components: { Carousel, CarouselNext },
    })

    expect(wrapper.findComponent(CarouselNext).classes()).toContain('custom-next')
  })

  it('renders CarouselPrevious with data-slot', () => {
    const wrapper = mount({
      template: `
        <Carousel>
          <CarouselPrevious>Prev</CarouselPrevious>
        </Carousel>
      `,
      components: { Carousel, CarouselPrevious },
    })

    expect(wrapper.findComponent(CarouselPrevious).exists()).toBe(true)
    expect(wrapper.findComponent(CarouselPrevious).attributes('data-slot')).toBe(
      'carousel-previous'
    )
  })

  it('applies custom class to CarouselPrevious', () => {
    const wrapper = mount({
      template: `
        <Carousel>
          <CarouselPrevious class="custom-prev">Prev</CarouselPrevious>
        </Carousel>
      `,
      components: { Carousel, CarouselPrevious },
    })

    expect(wrapper.findComponent(CarouselPrevious).classes()).toContain('custom-prev')
  })
})
