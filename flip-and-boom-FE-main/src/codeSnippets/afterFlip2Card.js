import { removeCardFromBoard, pause, flipClose } from "../helpers";

export const afterFlip2Card = async (
	chosenCard,
	enemyHp,
	setEnemyHp,
	board,
	setBoard,
	resetChosenCard,
	setTurn,
	aiMemory,
	setAiMemory,
	setBoom,
	setThrowBomb100,
	setThrowBomb125,
	setThrowBomb150,
	setThrowBomb175,
	setThrowBomb200,
	setThrowBomb210,
	setThrowBomb220,
	setThrowBomb250,
	setWobbleCpu,
	setThrowSound
) => {
	setTurn("wait");

	if (chosenCard[0][0] == chosenCard[1][0]) {
    await pause();
    
		switch (+chosenCard[0][0]) {
			case 100:
				setThrowBomb100(true);
				break;
			case 125:
				setThrowBomb125(true);
				break;
			case 150:
				setThrowBomb150(true);
				break;
			case 175:
				setThrowBomb175(true);
				break;
			case 200:
				setThrowBomb200(true);
				break;
			case 210:
				setThrowBomb210(true);
				break;
			case 220:
				setThrowBomb220(true);
				break;
			default:
				setThrowBomb250(true);
				break;
		}

		setThrowSound(true)
		await pause(2789);
		

		switch (+chosenCard[0][0]) {
			case 100:
				setThrowBomb100(false);
				break;
			case 125:
				setThrowBomb125(false);
				break;
			case 150:
				setThrowBomb150(false);
				break;
			case 175:
				setThrowBomb175(false);
				break;
			case 200:
				setThrowBomb200(false);
				break;
			case 210:
				setThrowBomb210(false);
				break;
			case 220:
				setThrowBomb220(false);
				break;
			default:
				setThrowBomb250(false);
				break;
		}

		setBoom(true);

		await pause(900);

		setWobbleCpu(true);

		await pause(100);

		setThrowSound(false)
		setBoom(false);

		const damageDealtToEnemy = +chosenCard[0][0];

		const clonedAiMemory = structuredClone(aiMemory);

		for (let i = 0; i < clonedAiMemory[damageDealtToEnemy]?.length; i++) {
			if (
				clonedAiMemory[damageDealtToEnemy][i] == chosenCard[0][1] ||
				clonedAiMemory[damageDealtToEnemy][i] == chosenCard[1][1]
			) {
				clonedAiMemory[damageDealtToEnemy].splice(i, 1);
				i--;
			}
		}

		setAiMemory(clonedAiMemory);

		enemyHp - damageDealtToEnemy < 0
			? setEnemyHp(0)
			: setEnemyHp(enemyHp - damageDealtToEnemy);

		if (enemyHp - damageDealtToEnemy <= 0) {
			return;
		}

		await pause();

		setWobbleCpu(false);

		removeCardFromBoard(board, setBoard, chosenCard);
	} else {
		await pause();

		flipClose(board, setBoard);
	}

	await pause();

	setTurn("cpu");

	resetChosenCard();
};
