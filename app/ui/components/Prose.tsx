import { PropsWithChildren } from 'react'

const Prose = (props: PropsWithChildren) => (
  <section className="prose prose-sm prose-headings:text-primary xl:prose-lg 2xl:prose-xl mx-auto">
    {props.children}
  </section>
)

export default Prose
