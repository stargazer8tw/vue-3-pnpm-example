import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Badge, badgeVariants } from '@/components/ui/badge'

describe('badge', () => {
  it('renders Badge with data-slot', () => {
    const wrapper = mount(Badge, {
      slots: { default: 'Badge' },
    })

    expect(wrapper.attributes('data-slot')).toBe('badge')
    expect(wrapper.text()).toBe('Badge')
  })

  it('renders Badge with default variant classes', () => {
    const wrapper = mount(Badge, {
      slots: { default: 'Default' },
    })

    expect(wrapper.classes()).toContain('inline-flex')
    expect(wrapper.classes()).toContain('items-center')
    expect(wrapper.classes()).toContain('rounded-full')
  })

  it('renders Badge with secondary variant', () => {
    const wrapper = mount(Badge, {
      props: { variant: 'secondary' },
      slots: { default: 'Secondary' },
    })

    const classes = badgeVariants({ variant: 'secondary' })
    expect(wrapper.classes()).toContain(classes.split(' ')[0])
  })

  it('renders Badge with destructive variant', () => {
    const wrapper = mount(Badge, {
      props: { variant: 'destructive' },
      slots: { default: 'Destructive' },
    })

    const classes = badgeVariants({ variant: 'destructive' })
    expect(wrapper.classes()).toContain(classes.split(' ')[0])
  })

  it('renders Badge with outline variant', () => {
    const wrapper = mount(Badge, {
      props: { variant: 'outline' },
      slots: { default: 'Outline' },
    })

    const classes = badgeVariants({ variant: 'outline' })
    expect(wrapper.classes()).toContain(classes.split(' ')[0])
  })

  it('applies custom class to Badge', () => {
    const wrapper = mount(Badge, {
      props: { class: 'custom-badge' },
      slots: { default: 'Badge' },
    })

    expect(wrapper.classes()).toContain('custom-badge')
  })

  it('badgeVariants generates correct classes for default', () => {
    const classes = badgeVariants({})
    expect(classes).toContain('inline-flex')
    expect(classes).toContain('rounded-full')
  })

  it('badgeVariants generates correct classes for secondary', () => {
    const classes = badgeVariants({ variant: 'secondary' })
    expect(classes).toContain('bg-secondary')
  })

  it('badgeVariants generates correct classes for destructive', () => {
    const classes = badgeVariants({ variant: 'destructive' })
    expect(classes).toContain('bg-destructive')
  })

  it('badgeVariants generates correct classes for outline', () => {
    const classes = badgeVariants({ variant: 'outline' })
    expect(classes).toContain('text-foreground')
  })
})
