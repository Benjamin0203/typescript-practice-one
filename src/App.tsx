import Section from "./components/Section";
import Counter, { User } from "./components/Counter";
import { useState, useEffect, useRef } from "react";
import List from "./components/List";
import { Link, BrowserRouter as Router, Route, } from "react-router-dom";



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
    <Router>
    <h1>Hello</h1>
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
      <h2>Current Value: </h2>
      <p className="text-yellow-400">{inputValue}</p>
      </>
    }
 
    <List items={items} render={(item: String) => <span className="gold">{item}</span>}/>
    
    </Router>
  )
}
export default App;