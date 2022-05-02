import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Triangle from '../../Submissions/Triangle.vue'

describe('Triangle', () => {
  it('renders properly', () => {
    const wrapper = mount(Triangle)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
