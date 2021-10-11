import { configureStore, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { reducer } from './actions/reducers'
import { applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

export const fetchData = createAsyncThunk('data/fetchData', async () => {
	const response = await axios.get('http://localhost:5000')
	return response
})

export default configureStore(
	{
		reducer: reducer,
	},
	applyMiddleware(thunk)
)
