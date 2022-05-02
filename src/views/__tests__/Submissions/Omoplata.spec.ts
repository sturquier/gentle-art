import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Omoplata from '../../Submissions/Omoplata/Omoplata.vue'

describe('Omoplata', () => {
  it('renders properly', () => {
    const wrapper = mount(Omoplata)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
