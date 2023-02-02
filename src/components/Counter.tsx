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
    <div className="flex space-x-10 justify-center">
   <h1>{children}</h1>
    <button 
    className="min-w-auto w-32 h-10 bg-blue-300 p-2 rounded-xl hover:bg-blue-500 transition-colors duration-50 hover: animate-pulse ease-out text-white font-semibold"
    onClick={() => {
      setCount(prev => prev + 1);
      setUsers(prev => prev ? [...prev, {id: prev.length, username: "User " + prev.length}] : [{id: 0, username: "User 0"}])
    }}>+</button>
    <button 
    className="min-w-auto w-32 h-10 bg-green-300 p-2 rounded-xl hover:bg-green-500 transition-colors duration-50 hover:animate-pulse ease-out text-white font-semibold"
    onClick={() => {
      setCount(prev => prev - 1);
      setUsers(prev => prev ? prev.slice(0, prev.length - 1) : null)
      }}>-</button>
    </div>
  )
}

export default Counter;