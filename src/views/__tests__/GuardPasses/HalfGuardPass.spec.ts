import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import HalfGuardPass from '../../GuardPasses/HalfGuardPass.vue'

describe('HalfGuardPass', () => {
  it('renders properly', () => {
    const wrapper = mount(HalfGuardPass)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
