import { branch, compose, renderComponent, renderNothing } from 'recompose'

import Constants from '../../constants'

interface IRenderWhen {
  render: any
  when(): boolean
}

const renderWhen = (states: IRenderWhen[]) =>
  compose(
    ...states.map(({ when, render }: IRenderWhen) => {
      const component =
        render === Constants.NOTHING ? renderNothing : renderComponent(render)

      return branch(when, component)
    })
  )

export { IRenderWhen }
export default renderWhen
