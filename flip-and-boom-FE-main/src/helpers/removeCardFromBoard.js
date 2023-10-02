export const removeCardFromBoard = (
	board,
	setBoard,
	cards,
) => {
	const clonedBoard = structuredClone(board);

	cards.forEach((el) => {
		clonedBoard[+el[1]].shown = false;
	});

	setBoard(clonedBoard);
};
