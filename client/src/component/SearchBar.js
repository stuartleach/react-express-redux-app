import React, { createRef } from 'react'
import { Center, FormLabel, Input, FormControl } from '@chakra-ui/react'

export function SearchBar(props) {
	return (
		<Center>
			<FormControl id='Search'>
				<FormLabel>Search</FormLabel>
				<Input
					type='text'
					ref={props.search}
					onChange={props.handleChange}
					placeholder='hi'
				/>
			</FormControl>
		</Center>
	)
}
