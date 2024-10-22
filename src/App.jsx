import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodo] = useState(0);
   const []

  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos").then(function(response){
      setTodo(response.data.todos);
    });
  },[])
  return (  
    <>
       {todos.map(todo=>{<Todo title={todo.title} description={todo.description}/>})}
    </>
  )
}


function Todo({title,description}){
  return <div>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>

}
export default App
