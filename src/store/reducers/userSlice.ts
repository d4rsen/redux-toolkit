import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../../models/User';
import {THUNK_fetchUsers} from '../thunks/userThunks';
import {Todo} from '../../models/Todo';
import {THUNK_fetchTodos} from '../thunks/todoThunks';

interface UserState {
    users: User[]
    isLoading: boolean
    error: string
    todos: Todo[]
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    todos: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(el => el.id !== action.payload)
        },
        doneTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.map(el => el.id === action.payload ? ({...el, completed: !el.completed}) : el)
        },
    },
    extraReducers: {
        [THUNK_fetchUsers.fulfilled.type]: (state, action: PayloadAction<User[]>) => {
            state.error = ''
            state.isLoading = false
            state.users = action.payload
        },
        [THUNK_fetchUsers.pending.type]: (state) => {
            state.isLoading = true
        },
        [THUNK_fetchUsers.rejected.type]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
        [THUNK_fetchTodos.fulfilled.type]: (state, action) => {
            state.error = ''
            state.isLoading = false
            state.todos = action.payload
        },
        [THUNK_fetchTodos.pending.type]: (state) => {
            state.isLoading = true
        },
        [THUNK_fetchTodos.rejected.type]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
    }
})

export const userReducer = userSlice.reducer
