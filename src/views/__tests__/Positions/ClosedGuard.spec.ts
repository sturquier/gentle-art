import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import ClosedGuard from '../../Positions/ClosedGuard/ClosedGuard.vue'

describe('ClosedGuard', () => {
  it('renders properly', () => {
    const wrapper = mount(ClosedGuard)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
