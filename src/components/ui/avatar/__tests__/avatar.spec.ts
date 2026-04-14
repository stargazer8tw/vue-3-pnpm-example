import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

describe('avatar', () => {
  it('renders Avatar with data-slot', () => {
    const wrapper = mount(Avatar, {
      slots: { default: 'Avatar' },
    })

    expect(wrapper.attributes('data-slot')).toBe('avatar')
  })

  it('renders Avatar with base styling classes', () => {
    const wrapper = mount(Avatar, {
      slots: { default: 'Avatar' },
    })

    expect(wrapper.classes()).toContain('relative')
    expect(wrapper.classes()).toContain('flex')
    expect(wrapper.classes()).toContain('size-8')
    expect(wrapper.classes()).toContain('rounded-full')
    expect(wrapper.classes()).toContain('overflow-hidden')
  })

  it('renders Avatar as span element', () => {
    const wrapper = mount(Avatar, {
      slots: { default: 'Avatar' },
    })

    expect(wrapper.element.tagName).toBe('SPAN')
  })

  it('renders Avatar with Image and Fallback', () => {
    const wrapper = mount({
      template: `
        <Avatar>
          <AvatarImage src="image.jpg" alt="Avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      `,
      components: { Avatar, AvatarImage, AvatarFallback },
    })

    expect(wrapper.find('[data-slot="avatar"]').exists()).toBe(true)
  })

  it('applies custom class to Avatar', () => {
    const wrapper = mount(Avatar, {
      props: { class: 'custom-avatar' },
      slots: { default: 'Avatar' },
    })

    expect(wrapper.classes()).toContain('custom-avatar')
  })
})
