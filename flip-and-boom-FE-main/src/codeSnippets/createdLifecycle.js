import { boardBeforeRandomized, randomNumber } from "../helpers";

const boardAfterRandomized = [];

export function createdLifecycle(setBoard) {
  let index = 0;

	while (boardBeforeRandomized?.length) {
		const randomNum = randomNumber(boardBeforeRandomized);

		const getOneRandomCard = boardBeforeRandomized?.splice(randomNum, 1);

    getOneRandomCard[0].index = index;

		boardAfterRandomized.push(getOneRandomCard[0]);

    index++
	}

	setBoard(boardAfterRandomized);
}
