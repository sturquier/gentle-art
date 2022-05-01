import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import HipBump from '../../Sweeps/HipBump/HipBump.vue'

describe('HipBump', () => {
  it('renders properly', () => {
    const wrapper = mount(HipBump)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
