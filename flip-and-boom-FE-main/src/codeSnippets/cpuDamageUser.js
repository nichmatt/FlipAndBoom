import { pause } from "../helpers";

export const cpuDamageUser = async (
	casee,
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
	setThrowSound,

) => {
  await  pause();
  
	switch (casee) {
		case 100:
			setThrowBombSelf100(true);
			break;
		case 125:
			setThrowBombSelf125(true);
			break;
		case 150:
			setThrowBombSelf150(true);
			break;
		case 175:
			setThrowBombSelf175(true);
			break;
		case 200:
			setThrowBombSelf200(true);
			break;
		case 210:
			setThrowBombSelf210(true);
			break;
		case 220:
			setThrowBombSelf220(true);
			break;
		default:
			setThrowBombSelf250(true);
			break;
	}
	
	setThrowSound(true)
	await pause(2789);

	switch (casee) {
		case 100:
			setThrowBombSelf100(false);
			break;
		case 125:
			setThrowBombSelf125(false);
			break;
		case 150:
			setThrowBombSelf150(false);
			break;
		case 175:
			setThrowBombSelf175(false);
			break;
		case 200:
			setThrowBombSelf200(false);
			break;
		case 210:
			setThrowBombSelf210(false);
			break;
		case 220:
			setThrowBombSelf220(false);
			break;
		default:
			setThrowBombSelf250(false);
			break;
	}

	setBoomSelf(true);

	await pause(900);

	setWobbleSelf(true);

	await pause(100);

	setThrowSound(false)
	setBoomSelf(false);
};
