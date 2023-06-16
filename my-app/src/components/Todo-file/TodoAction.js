import Button from "../UI/Button"
import style from "./TodoAction.module.css"
import { RiRefreshLine, RiDeleteBin2Line } from "react-icons/ri"
function TodoAction() {
    return (
        <div className={style.wrapper}>
            <Button
                className={style.btn}
                title="Reset list todo"
            >
                <RiRefreshLine />
            </Button>
            <Button
                className={style.btn}
                title="Delete list todo"
            >
                <RiDeleteBin2Line />
            </Button>
        </div>
    )
}
export default TodoAction
