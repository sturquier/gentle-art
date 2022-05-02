import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Kimura from '../../Submissions/Kimura/Kimura.vue'

describe('Kimura', () => {
  it('renders properly', () => {
    const wrapper = mount(Kimura)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
