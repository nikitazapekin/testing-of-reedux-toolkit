import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import TodoList from './TodoList';
import NewToDoForm from './NewTodoForm';
const App = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>Todo List</h1>
                <NewToDoForm />
                <TodoList />
            </div>
        </Provider>
    );
};

export default App;
