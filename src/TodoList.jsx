import { selectTodos } from "./store/selectors/selector";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem"
const TodoList = () => {
    const todos = useSelector(selectTodos)
    return ( 
        <ul>
            {todos.map((todo)=> (
                <TodoItem 
                {...todo}
                />
            ))}
        </ul>
     );
}
 
export default TodoList;