const Heart = () => (
	<svg
		width='9px'
		height='10px'
		viewBox='0 0 9 10'
		version='1.1'
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
	>
		<g
			id='Symbols'
			stroke='none'
			strokeWidth='1'
			fill='none'
			fillRule='evenodd'
		>
			<g
				id='card/top/heart'
				transform='translate(-1.000000, 0.000000)'
				fill='#E10001'
				fillRule='nonzero'
			>
				<path
					d='M9.12642651,1.46853438 C8.16316379,0.6156685 6.73057417,0.769074783 5.84641149,1.71690646 L5.50012909,2.08763831 L5.15384669,1.71690646 C4.27144179,0.769074783 2.83709438,0.6156685 1.87383167,1.46853438 C0.769946653,2.44741257 0.711939956,4.20427977 1.69981158,5.2653399 L5.10111333,8.91421793 C5.32083566,9.14980615 5.67766473,9.14980615 5.89738707,8.91421793 L9.29868882,5.2653399 C10.2883182,4.20427977 10.2303115,2.44741257 9.12642651,1.46853438 Z'
					id='Path'
				></path>
			</g>
		</g>
	</svg>
)
const Diamond = () => (
	<svg
		width='9px'
		height='12px'
		viewBox='0 0 9 12'
		version='1.1'
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
	>
		<g
			id='Symbols'
			stroke='none'
			strokeWidth='1'
			fill='none'
			fillRule='evenodd'
		>
			<g
				id='card/top/diamond-copy'
				transform='translate(-1.000000, 0.000000)'
				fill='#E10001'
			>
				<polygon
					id='Rectangle'
					transform='translate(5.456854, 6.056854) rotate(-315.000000) translate(-5.456854, -6.056854) '
					points='1.45685425 2.05685425 8.04264069 3.47106781 9.45685425 10.0568542 2.87106781 8.64264069'
				></polygon>
			</g>
		</g>
	</svg>
)
const Club = () => (
	<svg
		width='10px'
		height='10px'
		viewBox='0 0 10 10'
		version='1.1'
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
	>
		<g
			id='Symbols'
			stroke='none'
			strokeWidth='1'
			fill='none'
			fillRule='evenodd'
		>
			<g id='card/top/club' fill='#000000' fillRule='nonzero'>
				<g id='jean_victor_balin_card_trefle'>
					<path
						d='M5,0 C3.81725,0 2.85725,1.008 2.85725,2.25 C2.8675,3.0315 3.27075,3.692 3.6905,4.32025 C3.22275,3.96625 2.70275,3.75225 2.14285,3.75 C0.96,3.75 0,4.758 0,6 C0,7.242 0.96,8.25 2.14285,8.25 C3.101,8.234 3.8675,7.5635 4.6205,7 C4.48575,8.68325 4.21175,9.6285 2.619,10 L7.381,10 C5.78825,9.6285 5.51425,8.68325 5.3795,7 C6.12375,7.638 6.9045,8.17925 7.85725,8.25 C9.04,8.25 10,7.242 10,6 C10,4.758 9.04,3.75 7.85725,3.75 C7.283,3.75 6.787,4.01425 6.3095,4.32025 C6.7845,3.6985 7.09725,3.02775 7.14275,2.25 C7.14275,1.008 6.18275,0 5,0 Z'
						id='path3395'
					></path>
				</g>
			</g>
		</g>
	</svg>
)
const Spade = () => (
	<svg
		width='9px'
		height='10px'
		viewBox='0 0 9 10'
		version='1.1'
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
	>
		<g
			id='Symbols'
			stroke='none'
			strokeWidth='1'
			fill='none'
			fillRule='evenodd'
		>
			<g id='card/top/spade' fill='#000000' fillRule='nonzero'>
				<path
					d='M4.10261293,0.177845843 C4.32233527,-0.0592819477 4.67916434,-0.0592819477 4.89888667,0.177845843 L4.89888667,0.177845843 L8.30018842,3.8505693 C9.28806004,4.91856346 9.23005335,6.68691179 8.12616833,7.67218696 C7.25852361,8.44541359 6.00867653,8.39689213 5.12424334,7.68244943 L5.12467308,8.96539157 C5.70766434,9.13482283 6.1171875,9.53425083 6.1171875,10 L6.1171875,10 L2.8828125,10 C2.8828125,9.52939366 3.30092182,9.12649899 3.89362284,8.96016594 L3.89374659,7.66723953 C3.00726106,8.39616713 1.74733519,8.45086491 0.873573491,7.67218696 C-0.230311522,6.68691179 -0.288318218,4.91856346 0.70131118,3.8505693 L0.70131118,3.8505693 Z'
					id='Combined-Shape'
				></path>
			</g>
		</g>
	</svg>
)
export function SuitSymbol({ suit }: { suit: string }) {
	switch (suit) {
		case 'h':
			return <Heart />
		case 'd':
			return <Diamond />
		case 'c':
			return <Club />
		case 's':
			return <Spade />

		default:
			break
	}
}
