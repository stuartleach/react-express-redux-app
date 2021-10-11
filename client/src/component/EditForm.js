import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Center,
	Text,
} from '@chakra-ui/react'
import { createRef, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Autocomplete, Option } from 'chakra-ui-simple-autocomplete'

export default function EditForm(props) {
	const dispatch = useDispatch()
	const state = useSelector((state) => state.editForm)
	const globalState = useSelector((state) => state)

	// const [currentId, setCurrentId] = useState(props.clickedId - 1)
	const currentId = state.currentId
	const titleRef = createRef(null)
	const bodyRef = createRef(null)

	let results = props.results

	const options = [
		{ value: 'js', label: 'js' },
		{ value: 'jds', label: 'jds' },
	]

	const [result, setResult] = useState([])

	return (
		<form>
			<Center>
				{/* {Object.entries(results[currentId]).map((x) => (
					<div>{x}</div>
				))} */}
				<FormControl>
					<FormLabel htmlFor='name'>First name</FormLabel>
					<Box>
						<Text>userId: {results[currentId].userId}</Text>
					</Box>
					<Box>
						<Text>id: {results[currentId].id}</Text>
					</Box>
					<Box>
						{/* <Input
							id='title'
							placeholder={results[currentId].title}
							ref={titleRef}
							onChange={() =>
								dispatch({
									type: 'EDIT_TITLE',
									results: props.results,
									title: titleRef.current.value,
									clickedId: props.clickedId,
								})
							}
						/> */}
						<Autocomplete
							id='title'
							placeholder={results[currentId].title}
							ref={titleRef}
							options={options}
							setResult={(options) => setResult(options)}
							onChange={() =>
								dispatch({
									type: 'EDIT_TITLE',
									results: props.results,
									title: titleRef.current.value,
									clickedId: props.clickedId,
								})
							}
						/>
					</Box>
					<Box>
						<Input
							ref={bodyRef}
							id='body'
							placeholder={props.results[currentId].body}
							whiteSpace='breakSpaces'
						/>
					</Box>
					<FormErrorMessage>hi</FormErrorMessage>
				</FormControl>
				<Button
					mt={4}
					colorScheme='teal'
					type='button'
					onClick={() => {
						dispatch({
							type: 'EDIT_BODY',
							body: bodyRef.current.value,
						})
					}}
				>
					Submit
				</Button>
			</Center>
		</form>
	)
}
