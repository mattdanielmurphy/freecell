import { useEffect, useState } from 'react'

import { Card } from '../components/Card'
import { generateInitialCardPositions } from '../components/generateInitialCardPositions'
import styled from 'styled-components'

interface CardPositionGroupDetails {
	cardsInGroup: string[]
	name: string
	numberOfPositions: number
}

const CardPositionGroupWrapper = styled.div`
	display: flex;
`

function CardPositionGroup(group: CardPositionGroupDetails) {
	return (
		<CardPositionGroupWrapper>
			<h1>{group.name}</h1>
			{group.cardsInGroup.length > 0 &&
				group.cardsInGroup.map((card, index) => (
					<Card key={index} card={card} />
				))}
		</CardPositionGroupWrapper>
	)
}

export default function Home() {
	const initialCardPositions = {
		cascades: [],
		foundations: [],
		cells: [],
	}
	const [cardPositions, setCardPositions] = useState(initialCardPositions)
	useEffect(() => {
		setCardPositions({
			...initialCardPositions,
			cascades: generateInitialCardPositions(),
		})
	}, [])
	return (
		<>
			{cardPositions.cascades.length > 0 &&
				Object.entries(cardPositions).map(
					([positionGroup, cardsInGroup], index) => {
						return (
							<CardPositionGroup
								key={index}
								name={positionGroup}
								numberOfPositions={positionGroup === 'cascades' ? 52 : 4}
								cardsInGroup={cardsInGroup}
							/>
						)
					},
				)}
		</>
	)
}
