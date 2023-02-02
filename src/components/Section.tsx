import { ReactNode } from "react";
import styles from "../index.css";

type SectionProps = {
  title?: String,
  children: ReactNode
}

const Section = ({ children, title="Section Title" } : SectionProps) => {
  return (
    <section>
      <h1 className="text-yellow-300" >test test</h1>
      <button type="submit" className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 ">Login</button>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  )
}

export default Section;