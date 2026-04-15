import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { AspectRatio } from '../'

describe('aspect-ratio', () => {
  it('renders AspectRatio as div element', () => {
    const wrapper = mount(AspectRatio)

    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders AspectRatio with default aspect ratio (1:1)', () => {
    const wrapper = mount(AspectRatio)

    expect(wrapper.attributes('style')).toContain('padding-bottom: 100%')
  })

  it('renders AspectRatio with custom ratio (16:9)', () => {
    const wrapper = mount(AspectRatio, {
      props: { ratio: 16 / 9 },
    })

    expect(wrapper.attributes('style')).toContain('padding-bottom: 56.25%')
  })
})
