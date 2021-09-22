// GENERATE INITIAL
export function generateInitialCardPositions() {
	const cards =
		'Ah2h3h4h5h6h7h8h9hThJhQhKhAd2d3d4d5d6d7d8d9dTdJdQdKdAs2s3s4s5s6s7s8s9sTsJsQsKsAc2c3c4c5c6c7c8c9cTcJcQcKc'.match(
			/../g,
		)
	function shuffleArray(array) {
		for (var i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1))
			let temp = array[i]
			array[i] = array[j]
			array[j] = temp
		}
		return array
	}
	return shuffleArray(cards)
}
