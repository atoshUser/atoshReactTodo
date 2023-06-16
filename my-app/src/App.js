import { useState } from "react"
import style from "./App.module.css"
import TodoForm from "./components/Todo-file/TodoForm"
import Todos from "./components/Todo-file/Todos"

function App() {
    const [todo, setTodo] = useState(["Read new Book", "Go to he shop"])

    const addTodo = (data) => {
        setTodo([...todo, data])
    }
    const deleteItem = (idx) => {
        setTodo(todo.filter((_, index) => idx !== index))
    }
    return (
        <div className={style.app}>
            <h1 className={style.todoHeading}>Todo list app</h1>
            <TodoForm addTodo={addTodo} />
            {todo.length ? (
                <Todos
                    todos={todo}
                    delet={deleteItem}
                />
            ) : (
                <span className={style.msg}>There are not items</span>
            )}
        </div>
    )
}

export default App
