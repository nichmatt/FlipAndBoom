import {
	randomNumber,
	pause,
	removeCardFromBoard,
	flipOpen,
	flipClose,
} from "../helpers";

import { cpuHitBomb } from "./cpuHitBomb";
import { cpuDamageUser } from "./cpuDamageUser";

export const cpuTurnRandom = async ({
	board,
	setEnemyHp,
	enemyHp,
	setTurn,
	setHp,
	hp,
	setBoard,
	aiMemory,
	setAiMemory,
	skipTurn,
	setSkipTurn,
	setWobbleSelf,
	setshakeCpu,
	setBoomSelf,
	setBoom,
	setThrowBombSelf100,
	setThrowBombSelf125,
	setThrowBombSelf150,
	setThrowBombSelf175,
	setThrowBombSelf200,
	setThrowBombSelf210,
	setThrowBombSelf220,
	setThrowBombSelf250,
	setThrowSound,
}) => {
	if (skipTurn) {
		setTurn("user");

		setSkipTurn(false);

		return;
	}

	const enemyCards = [];

	const boardShownTrueOnly = structuredClone(board).filter((el) => el.shown);

	await pause();

	const firstRandomCard = boardShownTrueOnly?.splice(
		randomNumber(boardShownTrueOnly),
		1
	);

	const newBoard = flipOpen(board, setBoard, firstRandomCard[0].index);

	const clonedAiMemory = structuredClone(aiMemory);

	let pushChecker = true;

	for (let el of clonedAiMemory[firstRandomCard[0]?.value]) {
		if (el == firstRandomCard[0]?.index) {
			pushChecker = false;
			break;
		}
	}

	if (pushChecker) {
		clonedAiMemory[firstRandomCard[0]?.value]?.push(firstRandomCard[0]?.index);

		setAiMemory(clonedAiMemory);
	}

	if (firstRandomCard[0].value == "bomb") {
		await cpuHitBomb(
			setBoom,
			setshakeCpu,
			enemyHp,
			setEnemyHp,
			setTurn,
			flipClose,
			board,
			setBoard
		);

		return;
	}

	enemyCards.push([firstRandomCard[0].value, firstRandomCard[0].index]);

	await pause();

	const secondRandomCard = boardShownTrueOnly?.splice(
		randomNumber(boardShownTrueOnly),
		1
	);

	flipOpen(newBoard, setBoard, secondRandomCard[0].index);

	let pushChecker2 = true;

	for (let el of clonedAiMemory[secondRandomCard[0]?.value]) {
		if (el == secondRandomCard[0]?.index) {
			pushChecker2 = false;
			break;
		}
	}

	if (pushChecker2) {
		clonedAiMemory[secondRandomCard[0]?.value]?.push(
			secondRandomCard[0]?.index
		);

		setAiMemory(clonedAiMemory);
	}

	if (secondRandomCard[0].value == "bomb") {
		await cpuHitBomb(
			setBoom,
			setshakeCpu,
			enemyHp,
			setEnemyHp,
			setTurn,
			flipClose,
			board,
			setBoard
		);

		return;
	}

	enemyCards.push([secondRandomCard[0].value, secondRandomCard[0].index]);

	if (enemyCards[0][0] == enemyCards[1][0]) {
		await cpuDamageUser(
			+enemyCards[0][0],
			setThrowBombSelf100,
			setThrowBombSelf125,
			setThrowBombSelf150,
			setThrowBombSelf175,
			setThrowBombSelf200,
			setThrowBombSelf210,
			setThrowBombSelf220,
			setThrowBombSelf250,
			setBoomSelf,
			setWobbleSelf,
			setThrowSound
		);

		const damageDealtToUser = +enemyCards[0][0];

		for (let i = 0; i < clonedAiMemory[damageDealtToUser]?.length; i++) {
			if (
				clonedAiMemory[damageDealtToUser][i] == enemyCards[0][1] ||
				clonedAiMemory[damageDealtToUser][i] == enemyCards[1][1]
			) {
				clonedAiMemory[damageDealtToUser].splice(i, 1);
				i--;
			}
		}

		setAiMemory(clonedAiMemory);

		hp - damageDealtToUser <= 0 ? setHp(0) : setHp(hp - damageDealtToUser);

		if (hp - damageDealtToUser <= 0) return;

		setTurn("cpuwait");

		await pause();

		setWobbleSelf(false);

		removeCardFromBoard(board, setBoard, enemyCards);
	} else {
		setTurn("cpuwait");

		await pause();

		flipClose(board, setBoard);
	}

	await pause();

	setTurn("user");
};
