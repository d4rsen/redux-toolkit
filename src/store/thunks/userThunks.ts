import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {User} from '../../models/User';

export const THUNK_fetchUsers = createAsyncThunk(
    'users/fetchAll',
    async (_, thunkApi) => {
        try {
            const res = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users/')
            return res.data
        } catch (e) {
            return thunkApi.rejectWithValue('Не удалось сделать запрос пользователей')
        }
    }
)
