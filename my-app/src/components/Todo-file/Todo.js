import { RiTodoFill } from "react-icons/ri"
import style from "./Todo.module.css"
function Todo({ text, deletHandle, id }) {
    return (
        <li
            className={style.listItem}
            onDoubleClick={() => deletHandle(id)}
        >
            <div className={style.leftStyle}>
                <span>
                    <RiTodoFill className={style.todoIcon} />
                </span>
                <span className={style.textStyle}>{text}</span>
            </div>
        </li>
    )
}
export default Todo
