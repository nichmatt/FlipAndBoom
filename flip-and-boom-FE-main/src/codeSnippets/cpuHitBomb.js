import { pause } from "../helpers";

export const cpuHitBomb = async (
	setBoom,
	setshakeCpu,
	enemyHp,
	setEnemyHp,
	setTurn,
	flipClose,
	board,
	setBoard
) => {
	await pause();

	setBoom(true);

	await pause(900);

	setshakeCpu(true);

	await pause(100);

	setBoom(false);

	enemyHp - 75 <= 0 ? setEnemyHp(0) : setEnemyHp(enemyHp - 75);

	if (enemyHp - 75 <= 0) return;

	setTurn("cpuwait");

	await pause();

	flipClose(board, setBoard);

	await pause();

	setTurn("user");

	setshakeCpu(false);

	return;
};
