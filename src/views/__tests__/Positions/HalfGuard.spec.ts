import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import HalfGuard from '../../Positions/HalfGuard/HalfGuard.vue'

describe('HalfGuard', () => {
  it('renders properly', () => {
    const wrapper = mount(HalfGuard)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
