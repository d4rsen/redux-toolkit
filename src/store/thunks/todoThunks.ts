import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {Todo} from '../../models/Todo';

export const THUNK_fetchTodos = createAsyncThunk(
    'todos/fetchAll',
    async (_, thunkApi) => {
        try {
            const res = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
            return res.data.slice(0, 30)
        } catch (e) {
            return thunkApi.rejectWithValue('Не удалось сделать запрос заметок')
        }
    }
)
