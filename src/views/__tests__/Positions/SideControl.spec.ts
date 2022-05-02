import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import SideControl from '../../Positions/SideControl.vue'

describe('SideControl', () => {
  it('renders properly', () => {
    const wrapper = mount(SideControl)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
