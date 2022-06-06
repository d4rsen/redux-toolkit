import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {THUNK_fetchTodos} from '../store/thunks/todoThunks';
import Todo from '../components/Todo/Todo';
import './App.scss'

function App() {
    const dispatch = useAppDispatch()
    const {todos, isLoading, error} = useAppSelector(s => s.user)

    useEffect(() => {
        dispatch(THUNK_fetchTodos())
    }, [])

    if (isLoading) {
        return <div className="loader">
            <h1>Loading...</h1>
        </div>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className="wrapper">
            <div className="list">
                {todos.map(el => <Todo {...el} key={el.id}/>)}
            </div>
        </div>
    );
}

export default App;
