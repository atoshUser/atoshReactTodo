import { useState } from "react"
import style from "./TodoForm.module.css"
function TodoForm({ addTodo }) {
    const [input, setInput] = useState("")
    const onSubmitHandle = (e) => {
        e.preventDefault()
        addTodo(input)
        setInput("")
    }
    return (
        <form
            className={style.form}
            onSubmit={onSubmitHandle}
        >
            <input
                type="text"
                placeholder="Enter new todo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    )
}
export default TodoForm
