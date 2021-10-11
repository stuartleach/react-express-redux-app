import { current, isAsyncThunkAction } from '@reduxjs/toolkit'
import { reducer } from './reducers'

const initialState = {
	results: [],
	allResults: [],
	editing: false,
	editForm: {
		currentId: null,
	},
}
const results = [
	{
		id: 1,
		userId: 1,
		title: 'title',
		body: 'body',
	},
	{
		id: 2,
		userId: 1,
		title: 'title 2',
		body: 'qui',
	},
]

test('should return the initial state', () => {
	expect(reducer(undefined, {})).toEqual(initialState)
})

test('should set the search data', () => {
	expect(
		reducer(initialState, {
			type: 'SET_SEARCH_DATA',
			results: results,
		})
	).toEqual({
		results: results,
		allResults: results,
		editing: false,
		editForm: {
			currentId: null,
		},
	})
})

test('should filter the result set', () => {
	expect(
		reducer(
			{ ...initialState, allResults: results },
			{
				type: 'SEARCH',
				query: 'qui',
			}
		)
	).toEqual({
		results: [
			{
				id: 2,
				userId: 1,
				title: 'title 2',
				body: 'qui',
			},
		],
		allResults: results,
		editing: false,
		editForm: {
			currentId: null,
		},
	})
})

test('should change the clicked ID when title is changed', () => {
	expect(
		reducer(
			{ ...initialState, allResults: results },
			{ type: 'EDIT_TITLE', title: 'title 2', clickedId: 0 }
		)
	).toEqual({
		...initialState,
		allResults: results,
		editForm: { currentId: 2 },
	})
})

test('should change the body when the body changes are submitted', () => {
	expect(
		reducer(
			{ ...initialState, allResults: results },
			{ type: 'EDIT_BODY', body: 'test', clickedId: 1 }
		)
	).toEqual({
		...initialState,
		results: { ...results[0], body: 0 },
		// allResults: { ...results },
		// editForm: { currentId: null },
	})
})

/* test('should handle a todo being added to an empty list', () => {
	const previousState = []
	expect(reducer(previousState, todoAdded('Run the tests'))).toEqual([
		{
			text: 'Run the tests',
			completed: false,
			id: 0,
		},
	])
})

test('should handle a todo being added to an existing list', () => {
	const previousState = [
		{
			text: 'Run the tests',
			completed: true,
			id: 0,
		},
	]
	expect(reducer(previousState, todoAdded('Use Redux'))).toEqual([
		{
			text: 'Run the tests',
			completed: true,
			id: 0,
		},
		{
			text: 'Use Redux',
			completed: false,
			id: 1,
		},
	])
})
 */
