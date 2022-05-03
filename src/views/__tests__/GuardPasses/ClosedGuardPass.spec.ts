import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import ClosedGuardPass from '../../GuardPasses/ClosedGuardPass.vue'

describe('ClosedGuardPass', () => {
  it('renders properly', () => {
    const wrapper = mount(ClosedGuardPass)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
