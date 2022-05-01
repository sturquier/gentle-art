import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import BackMount from '../../Positions/BackMount/BackMount.vue'

describe('BackMount', () => {
  it('renders properly', () => {
    const wrapper = mount(BackMount)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
