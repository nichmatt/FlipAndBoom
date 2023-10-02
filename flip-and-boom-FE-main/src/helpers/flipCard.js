export const flipOpen = (board, setBoard, index) => {
  const cloneBoard = structuredClone(board);

  cloneBoard[+index].flip = true;

  setBoard(cloneBoard);

  return cloneBoard;
};

export const flipClose = (board, setBoard) => {
  const newBoard = structuredClone(board);

	newBoard?.forEach((el) => (el.flip = false));

  setBoard(newBoard);
};
