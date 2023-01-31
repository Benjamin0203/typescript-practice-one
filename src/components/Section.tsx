import { ReactNode } from "react";

type SectionProps = {
  title?: String,
  children: ReactNode
}

const Section = ({ children, title="Section Title" } : SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  )
}

export default Section;