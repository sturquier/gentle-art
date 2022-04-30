import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Sidebar from '../Sidebar/Sidebar.vue'

describe('Sidebar', () => {
  it('renders properly', () => {
    const wrapper = mount(Sidebar)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
