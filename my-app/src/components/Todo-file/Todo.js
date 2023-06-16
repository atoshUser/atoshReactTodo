import { RiTodoFill } from "react-icons/ri"
import { FaCheck, FaTrash } from "react-icons/fa"
import style from "./Todo.module.css"
function Todo({ obj, deletHandle, check }) {
    return (
        <li className={`${style.listItem} ${obj.isChecked && style.checked} `}>
            <div className={style.leftStyle}>
                <span>
                    <RiTodoFill className={style.todoIcon} />
                </span>
                <span className={style.textStyle}>{obj.text}</span>
            </div>
            <div className={style.rightStyle}>
                <FaTrash
                    className={style.trash}
                    onClick={() => deletHandle(obj.id)}
                />
                <FaCheck
                    className={style.ischeck}
                    onClick={() => check(obj.id)}
                />
            </div>
        </li>
    )
}
export default Todo
