import { shallow } from 'enzyme'
import * as React from 'react'

const singleSnapTest = (wrapper, description) => {
  test(description, () => {
    expect(wrapper).toMatchSnapshot()
  })
}
const testSnapshots = (Component, configs) => {
  describe('snapshots', () => {
    configs.forEach(config => {
      const { props, description } = config
      const wrapper = shallow(<Component {...props} />)
      singleSnapTest(wrapper, description)
    })
  })
}

export { singleSnapTest, testSnapshots }
