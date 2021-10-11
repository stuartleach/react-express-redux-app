import React from 'react'
import { Text, Link, EditForm, Center, Button } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'

export function ResultsList(props) {
	const dispatch = useDispatch()

	return (
		<Center>
			<ul>
				{props.results.map((x) => (
					<li key={x.id} style={{ listStyleType: 'none' }}>
						<Link
							cursor='pointer'
							// key={x.id}
							onClick={() =>
								dispatch({ type: 'CLICK_ENTRY', id: x.id })
							}
						>
							<Text fontSize='smaller'>
								<span>
									Title:
									<b>{x.title}</b>
								</span>
								<span>
									<div>User ID: {x.userId}</div>
								</span>
								<span>
									<div>Id: {x.id}</div>
								</span>
								<span>
									<li>Body: {x.body}</li>
								</span>
								<br />
							</Text>
						</Link>
					</li>
				))}
			</ul>
		</Center>
	)
}
