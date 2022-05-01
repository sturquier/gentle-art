import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import KneeOnChest from '../../Positions/KneeOnChest/KneeOnChest.vue'

describe('KneeOnChest', () => {
  it('renders properly', () => {
    const wrapper = mount(KneeOnChest)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
