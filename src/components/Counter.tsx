import { ReactNode } from "react"

export interface User {
  id: number,
  username: String,
}

type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>,
  children: ReactNode,
  setUsers: React.Dispatch<React.SetStateAction<User[] | null>>
}

const Counter = ({ children, setCount, setUsers} : CounterProps) => {
  return (
    <>
   <h1>{children}</h1>
    <button onClick={() => {
      setCount(prev => prev + 1);
      setUsers(prev => prev ? [...prev, {id: prev.length, username: "User " + prev.length}] : [{id: 0, username: "User 0"}])
    }}>+</button>
    <button onClick={() => {
      setCount(prev => prev - 1);
      setUsers(prev => prev ? prev.slice(0, prev.length - 1) : null)
      }}>-</button>
    </>
  )
}

export default Counter;