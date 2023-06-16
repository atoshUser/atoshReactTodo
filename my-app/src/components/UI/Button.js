import style from "./Button.module.css"
function Button({ className, onClick, children, title, disabled = false }) {
    return (
        <button
            className={`${style.btn} ${className}`}
            onClick={onClick}
            title={title}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
export default Button
