import { branch, compose, renderComponent, renderNothing } from 'recompose'

import Constants from '../../constants'

const renderWhen = states =>
  compose(
    ...states.map(({ when, render }) => {
      const component =
        render === Constants.NOTHING ? renderNothing : renderComponent(render)

      return branch(when, component)
    })
  )

export default renderWhen
