import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Mount from '../../Positions/Mount.vue'

describe('Mount', () => {
  it('renders properly', () => {
    const wrapper = mount(Mount)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
