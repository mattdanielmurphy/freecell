import { SuitSymbol } from './SuitSymbol'
import styled from 'styled-components'

const CardWrapper = styled.div`
	font-family: 'Avenir Next', sans-serif;
	font-weight: bold;
`

export function Card({ card }) {
	const [value, suit] = card.split('')
	return (
		<CardWrapper>
			{value} <SuitSymbol suit={suit} />
		</CardWrapper>
	)
}
