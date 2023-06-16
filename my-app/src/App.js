import { useState } from "react"
import style from "./App.module.css"
import TodoForm from "./components/Todo-file/TodoForm"
import Todos from "./components/Todo-file/Todos"
import { v4 as uuidv4 } from "uuid"
import TodoAction from "./components/Todo-file/TodoAction"
function App() {
    const [todo, setTodo] = useState([])

    const addTodo = (text) => {
        const data = {
            text: text,
            isChecked: false,
            id: uuidv4(),
        }
        setTodo([...todo, data])
    }
    const deleteItem = (uuid) => {
        setTodo(todo.filter((obj) => obj.id !== uuid))
    }

    const handleChecked = (uuid) => {
        setTodo(
            todo.map((obj) => {
                return uuid === obj.id
                    ? { ...obj, isChecked: !obj.isChecked }
                    : { ...obj }
            })
        )
    }
    return (
        <div className={style.app}>
            <h1 className={style.todoHeading}>Todo list app</h1>
            <TodoForm addTodo={addTodo} />
            <TodoAction />
            {todo.length ? (
                <Todos
                    todos={todo}
                    delet={deleteItem}
                    handleCheck={handleChecked}
                />
            ) : (
                <span className={style.msg}>There are not items</span>
            )}
        </div>
    )
}

export default App
