import Section from "./components/Section";
import Counter, { User } from "./components/Counter";
import { useState, useEffect, useRef } from "react";
import List from "./components/List";
import SideBar from "./components/Sidebar";


function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);
  const [inputValue, setInputValue] = useState<String>("");

  useEffect(()=> {
    console.log("Users: ", users);
    
  },[users])

  const items = ["💡", "🤣", "🍔", "💻"];

  const inputRef = useRef<HTMLInputElement>(null);
  console.log("input ref current value: ",inputRef?.current?.value)

   return (
    <>
    <div className="grid grid-flow-col auto-cols-max border-solid border-2 border-red-400">
    <SideBar />
    </div>

   <div className="grid grid-cols-4 m-4">
    <Section title="I am a title assigned from App()">
      Section children
    </Section>
    <Counter setCount={setCount} setUsers={setUsers}>
      Count is {count}, Users: {users ? users.length : 0}
      {users && users.map(user => <p key={user.id}>{user.username}</p>)}
    </Counter>
    <input
    className="valid:border-green-500 text-red-600" 
    ref={inputRef} 
    type="text"
    />
    <button 
      className="flex items-center min-w-auto h-10 bg-red-400 p-2 m-2 rounded-xl hover:bg-red-600 transition-colors duration-50 hover:animate-pulse ease-out text-white font-semibold "
      onClick={() => {
      console.log("input ref current value: ",inputRef?.current?.value);
      setInputValue(inputRef?.current?.value || "");
      }}>Submit input value</button>
    {
      <> 
      <h1 className="text-red-600">Current Value: </h1>
      <p className="text-yellow-400">{inputValue}</p>
      </>
    }
 
    <List items={items} render={(item: String) => <span className="gold">{item}</span>}/>
    </div>
    </>
  )
}
export default App;