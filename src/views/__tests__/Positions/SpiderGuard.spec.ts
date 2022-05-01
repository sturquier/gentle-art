import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import SpiderGuard from '../../Positions/SpiderGuard/SpiderGuard.vue'

describe('SpiderGuard', () => {
  it('renders properly', () => {
    const wrapper = mount(SpiderGuard)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
