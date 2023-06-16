import style from "./Todos.module.css"

import Todo from "./Todo"
function Todos({ todos, delet }) {
    return (
        <ul className={style.listTodo}>
            {todos.map((todo, idx) => (
                <Todo
                    key={idx}
                    text={todo}
                    id={idx}
                    deletHandle={delet}
                />
            ))}
        </ul>
    )
}
export default Todos
