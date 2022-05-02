import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import DeLaRivaGuard from '../../Positions/DeLaRivaGuard.vue'

describe('DeLaRivaGuard', () => {
  it('renders properly', () => {
    const wrapper = mount(DeLaRivaGuard)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
