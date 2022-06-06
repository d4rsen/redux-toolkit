import React, {FC} from 'react';
import './Todo.scss'
import {useAppDispatch} from '../../hooks/redux';
import {userSlice} from '../../store/reducers/userSlice';

interface TodoProps {
    id: number
    title: string
    userId?: number
    completed: boolean
}

const Todo: FC<TodoProps> = ({id, title, userId, completed}) => {
    const dispatch = useAppDispatch()
    const {deleteTodo, doneTodo} = userSlice.actions

    const deleteHandler = () => dispatch(deleteTodo(id))
    const doneHandler = () => dispatch(doneTodo(id))

    return (
        <div className={completed ? 'todo todo--done' : 'todo'}>
            <div className="todo__title">
                {title}
            </div>
            <div className="todo__buttons">
                <button onClick={doneHandler} className="todo__button">
                    {completed ? 'Undone' : 'Done'}
                </button>
                <button onClick={deleteHandler} className="todo__button todo__button--delete">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Todo;
