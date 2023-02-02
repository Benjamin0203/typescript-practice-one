import { ReactNode } from "react";
import styles from "../index.css";
import { Link } from "react-router-dom";

type SectionProps = {
  title?: String,
  children: ReactNode
}

const Section = ({ children, title="Section Title" } : SectionProps) => {
  return (
    <section className="border-solid border-2 border-cyan-400 rounded-lg">
      <h1 className="text-yellow-300" >test test</h1>
      <Link to="/login">
      <button type="submit" className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 ">
        Login
        </button>
      </Link>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  )
}

export default Section;