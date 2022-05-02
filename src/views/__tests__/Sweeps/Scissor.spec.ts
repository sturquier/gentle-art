import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Scissor from '../../Sweeps/Scissor.vue'

describe('Scissor', () => {
  it('renders properly', () => {
    const wrapper = mount(Scissor)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
