//Async action creator for GET API Route

import axios from 'axios'

const targetUrl = 'http://localhost:5000/data'

export const getDataThunk = (innerDispatch) =>
	axios
		.get(targetUrl)
		.then((res) => {
			return res.data.express[0]
		})
		.then((res) => {
			return res
		})
		.catch((error) => console.log(error))
		.then((res) =>
			innerDispatch({
				type: 'SET_SEARCH_DATA',
				results: res,
			})
		)

export const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_SEARCH_DATA':
			return {
				...state,
				results: action.results,
				allResults: action.results,
			}
		case 'SEARCH':
			return {
				...state,
				results: state.allResults.filter(
					(element) =>
						element.title.includes(action.query) ||
						element.body.includes(action.query)
				),
			}
		case 'EDIT_TITLE':
			const result = state.allResults.filter((element) =>
				element.title.includes(action.title)
			)

			const currentId = result[0] ? result[0].id : action.clickedId
			return {
				...state,
				editForm: {
					currentId,
				},
			}
		case 'EDIT_BODY':
			const newResp = state.results.map((r) =>
				r.id === state.editForm.currentId + 1
					? {
							...r,
							body: action.body,
					  }
					: r
			)
			const allResp = state.allResults.map((r) =>
				r.id === state.editForm.currentId + 1
					? {
							...r,
							body: action.body,
					  }
					: r
			)
			return {
				...state,
				results: newResp,
				allResults: allResp,
				editing: false,
			}
		case 'CLICK_ENTRY':
			const newState = {
				...state,
				editing: true,
				clickedId: action.id - 1,
				editForm: {
					currentId: action.id - 1,
				},
			}
			return newState
		case 'EXIT_ENTRY':
			return {
				...state,
				editing: false,
			}
		default:
			return {
				results: [],
				allResults: [],
				editing: false,
				editForm: {
					currentId: null,
				},
			}
	}
}
