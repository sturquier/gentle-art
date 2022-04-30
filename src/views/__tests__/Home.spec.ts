import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Home from '../Home/Home.vue'

describe('Home', () => {
  it('renders properly', () => {
    const wrapper = mount(Home)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
