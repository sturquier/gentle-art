import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import CollarSleeveGuard from '../../Positions/CollarSleeveGuard/CollarSleeveGuard.vue'

describe('CollarSleeveGuard', () => {
  it('renders properly', () => {
    const wrapper = mount(CollarSleeveGuard)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
