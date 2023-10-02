export const randomNumber = (board) => {
	return Math.round(Math.random() * board?.length - 1);
};
