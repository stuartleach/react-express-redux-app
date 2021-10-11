import { Box, Button, Container, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import React, { createRef, useEffect, useMemo, useState } from 'react'
import EditForm from './EditForm'
import { ResultsList } from './ResultsList'
import { SearchBar } from './SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import { getDataThunk } from '../actions/reducers'

function App() {
	const search = createRef(null)
	const dispatch = useDispatch()
	const globalState = useSelector((state) => state)

	useEffect(() => dispatch(getDataThunk), [])
	useEffect(() => {}, [globalState])

	return (
		<div className='App'>
			{globalState.editing ? (
				<>
					<EditForm
						results={globalState.results}
						clickedId={globalState.clickedId}
					/>
					<Button onClick={() => dispatch({ type: 'EXIT_ENTRY' })}>
						Return
					</Button>
				</>
			) : (
				<Container textAlign='left' alignContent='center'>
					<SearchBar
						handleChange={() => {
							dispatch({
								type: 'SEARCH',
								query: search.current.value,
							})
						}}
						search={search}
						onButtonClick={() => {}}
					/>
					<ResultsList
						editing={globalState.editing}
						results={globalState.results}
						clickedId={globalState.clickedId}
						setClickedId={(id) =>
							dispatch({ type: 'CLICK_ENTRY', id })
						}
					/>
				</Container>
			)}
			<Box maxWidth='80vw' alignContent='center'></Box>
		</div>
	)
}

export default App
