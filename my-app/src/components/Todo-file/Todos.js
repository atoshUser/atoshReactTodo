import style from "./Todos.module.css"

import Todo from "./Todo"
function Todos({ todos, delet, handleCheck }) {
    return (
        <ul className={style.listTodo}>
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    obj={todo}
                    deletHandle={delet}
                    check={handleCheck}
                />
            ))}
        </ul>
    )
}
export default Todos
