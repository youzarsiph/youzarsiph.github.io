import { PropsWithChildren } from 'react'

const Prose = (props: PropsWithChildren) => (
  <section className="container-prose">{props.children}</section>
)

export default Prose
