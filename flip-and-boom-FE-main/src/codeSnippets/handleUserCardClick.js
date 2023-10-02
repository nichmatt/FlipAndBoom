import { flipClose, flipOpen, pause } from "../helpers";

export const handleUserCardClick = async (
	e,
	turn,
	setHp,
	setTurn,
	chosenCard,
	setChosenCard,
	resetChosenCard,
	hp,
	board,
	setBoard,
	aiMemory,
	setAiMemory,
	setshakeSelf,
	setBoomSelf
) => {
	e.stopPropagation();

	if (turn != "user") return;

	const value = e.currentTarget.attributes.value.value;

	const index = +e.currentTarget.attributes.index.value;

	if (chosenCard.length && chosenCard[0][1] == index) return;

	flipOpen(board, setBoard, index);

	const clonedAiMemory = structuredClone(aiMemory);

	let pushChecker = true;

	for (let el of clonedAiMemory[value]) {
		if (el == index) {
			pushChecker = false;
			break;
		}
	}

	if (pushChecker) {
		clonedAiMemory[value]?.push(index);

		setAiMemory(clonedAiMemory);
	}

	if (value == "bomb") {
		setTurn("wait");

		await pause();

		setBoomSelf(true);

		await pause(900);

		setshakeSelf(true);

		await pause(100);

		setBoomSelf(false);

		resetChosenCard();

		hp - 75 <= 0 ? setHp(0) : setHp(hp - 75);

		if (hp - 75 <= 0) return;

		await pause();

		flipClose(board, setBoard);

		await pause();

		setTurn("cpu");

		setshakeSelf(false);

		return;
	}

	const newArr = structuredClone(chosenCard);

	newArr.push([value, index]);

	setChosenCard(newArr);
};
