import { useCallback, useState } from 'react'
import './App.css'
import Child from './component/Child'

function App() {
  const [count, setCount] = useState(0)
  const [todo,setTodo]=useState([])

  const inc=()=>{
    setCount(count=>count+1)
  }

  const addTodo=useCallback(()=>{
    setTodo((t)=>[
      ...t,
      `new todo`
    ])
  },[todo])

  return (
    <>
      <h3>Use Callback</h3>
      <p>Count:{count}</p>
      <button onClick={inc}>+</button>
      <Child todo={todo} addTodo={addTodo} />
    </>
  )
}

export default App
