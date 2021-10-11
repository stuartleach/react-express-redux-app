import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Center,
	Text,
	Textarea,
} from '@chakra-ui/react'
import { createRef, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Autocomplete, Option } from 'chakra-ui-simple-autocomplete'

export default function EditForm(props) {
	const dispatch = useDispatch()
	const state = useSelector((state) => state.editForm)
	const globalState = useSelector((state) => state)

	const currentId = state.currentId
	const titleRef = createRef(null)
	const bodyRef = createRef(null)

	let results = props.results

	return (
		<form>
			<Center>
				<FormControl>
					<FormLabel htmlFor='name'>First name</FormLabel>
					<Box>
						<Text>userId: {results[currentId].userId}</Text>
					</Box>
					<Box>
						<Text>id: {results[currentId].id}</Text>
					</Box>
					<Box>
						<Textarea
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
							size='lg'
							width='30vw'
							height='10vh'
						/>
					</Box>
					<Box>
						<Textarea
							ref={bodyRef}
							id='body'
							placeholder={props.results[currentId].body}
							type='text'
							width='30vw'
							height='30vh'
							variant='filled'
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
