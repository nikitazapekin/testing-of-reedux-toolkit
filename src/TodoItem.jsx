
import { useDispatch } from "react-redux";
import { toggleComplete, removeTodo } from "./store/slices/todoSlice";
//import { toogleComplete, removeTodo } from "./store/slices/todoSlice"
const TodoItem = ({ id, text, completed }) => {
    const dispatch = useDispatch()
    return (
        <li>
            <input type="checkbox"
                checked={completed}
                onChange={() => toggleComplete(id)}
            />

            <span>{text}</span>
            <span
          role="button"
            onClick={() => dispatch(removeTodo(id))}>clear</span>
        </li>
    );
}

export default TodoItem;