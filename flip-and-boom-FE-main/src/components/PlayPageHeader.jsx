import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useSpring, animated } from "react-spring";

import defaultChar from "/assets/character/default.png";
import smolderingDetonation from "/assets/character/smoldering-detonation.png";
import mrsParty from "/assets/character/mrs-party.png";
import mrKing from "/assets/character/mr-king.png";
import azureExplosiomancer from "/assets/character/azure-explosiomancer.png";
import crimsonSpecter from "/assets/character/crimson-specter.png";
import normalGuy from "/assets/character/normal-guy.png";
import owen from "/assets/character/owen.png";
import vampiricBlaster from "/assets/character/vampiric-blaster.png";

// effects
import bomb100 from "/assets/bomb/bomb-01.png";
import bomb125 from "/assets/bomb/bomb-02.png";
import bomb150 from "/assets/bomb/bomb-07.png";
import bomb175 from "/assets/bomb/bomb-04.png";
import bomb200 from "/assets/bomb/bomb-05.png";
import bomb210 from "/assets/bomb/bomb-08.png";
import bomb220 from "/assets/bomb/bomb-09.png";
import bomb250 from "/assets/bomb/bomb-03.png";
import explosion from "/explosion/explosion.png";

export default function PlayPageHeader({
	hp,
	enemyHp,
	setHp,
	setEnemyHp,
	turn,
	boom,
	throwBomb100,
	throwBomb125,
	throwBomb150,
	throwBomb175,
	throwBomb200,
	throwBomb210,
	throwBomb220,
	throwBomb250,
	boomSelf,
	throwBombSelf100,
	throwBombSelf125,
	throwBombSelf150,
	throwBombSelf175,
	throwBombSelf200,
	throwBombSelf210,
	throwBombSelf220,
	throwBombSelf250,
	wobbleCpu,
	wobbleSelf,
	shakeCpu,
	shakeSelf,
}) {
	const { profile } = useSelector((state) => state.userReducer);
	const { gameMode } = useSelector((state) => state.gameModeReducer);

	const props = useSpring({
		val: hp,
		from: {
			val: 0,
		},
	});

	const props2 = useSpring({
		val: enemyHp,
		from: {
			val: 0,
		},
	});

	// this const to rerender
	const abc = hp + 100;

	useEffect(() => {
		setHp(1000), setEnemyHp(1000);
	}, []);

	return (
		<div
			className="flex h-32 mx-auto justify-between text-white italic font-bold relative w-[84.1rem] flex-1 items-end"
			// style={{ containerType: "size"}}
		>
			{throwBomb100 && (
				<div className="absolute w-24 left-0 animate-attackBomb mb-4">
					<img src={bomb100} className="" />
				</div>
			)}
			{throwBomb125 && (
				<div className="absolute w-24 left-0 animate-attackBomb mb-4 ml-2">
					<img src={bomb125} className="" />
				</div>
			)}
			{throwBomb150 && (
				<div className="absolute w-24 left-0 animate-attackBomb mb-4 ml-2">
					<img src={bomb150} className="" />
				</div>
			)}
			{throwBomb175 && (
				<div className="absolute w-24 left-0 animate-attackBomb mb-4 ml-2">
					<img src={bomb175} className="" />
				</div>
			)}
			{throwBomb200 && (
				<div className="absolute w-24 left-0 animate-attackBomb mb-4 ml-2">
					<img src={bomb200} className="" />
				</div>
			)}
			{throwBomb210 && (
				<div className="absolute w-24 left-0 animate-attackBomb mb-4 ml-2">
					<img src={bomb210} className="" />
				</div>
			)}
			{throwBomb220 && (
				<div className="absolute w-24 left-0 animate-attackBomb mb-4 ml-2">
					<img src={bomb220} className="" />
				</div>
			)}
			{throwBomb250 && (
				<div className="absolute w-24 left-0 animate-attackBomb mb-4 ml-2">
					<img src={bomb250} className="" />
				</div>
			)}

			{throwBombSelf100 && (
				<div className="absolute w-24 right-0 animate-attackBombSelf mb-4 ml-2">
					<img src={bomb100} className="" />
				</div>
			)}
			{throwBombSelf125 && (
				<div className="absolute w-24 right-0 animate-attackBombSelf mb-4 ml-2">
					<img src={bomb125} className="" />
				</div>
			)}
			{throwBombSelf150 && (
				<div className="absolute w-24 right-0 animate-attackBombSelf mb-4 ml-2">
					<img src={bomb150} className="" />
				</div>
			)}
			{throwBombSelf175 && (
				<div className="absolute w-24 right-0 animate-attackBombSelf mb-4 ml-2">
					<img src={bomb175} className="" />
				</div>
			)}
			{throwBombSelf200 && (
				<div className="absolute w-24 right-0 animate-attackBombSelf mb-4 ml-2">
					<img src={bomb200} className="" />
				</div>
			)}
			{throwBombSelf210 && (
				<div className="absolute w-24 right-0 animate-attackBombSelf mb-4 ml-2">
					<img src={bomb210} className="" />
				</div>
			)}
			{throwBombSelf220 && (
				<div className="absolute w-24 right-0 animate-attackBombSelf mb-4 ml-2">
					<img src={bomb220} className="" />
				</div>
			)}
			{throwBombSelf250 && (
				<div className="absolute w-24 right-0 animate-attackBombSelf mb-4 ml-2">
					<img src={bomb250} className="" />
				</div>
			)}

			{boom && (
				<div className="absolute right-0 w-24 z-50 animate__animated animate__zoomIn scale-[1.75] mb-8 mr-3">
					<img src={explosion} className="" />
				</div>
			)}
			{boomSelf && (
				<div className="absolute left-0 w-24 z-50 animate__animated animate__zoomIn scale-[1.75] mb-8 ml-3">
					<img src={explosion} className="" />
				</div>
			)}

			{turn == "user" ? (
				<div className="absolute -left-24 flex flex-col items-center text-xl animate__animated animate__bounceIn gap-y-[0.35rem] mb-7">
					<div>
						<i
							className="fa-solid fa-circle-right text-2xl animate-spinX"
							style={{ color: "#D98F00" }}
						></i>
					</div>
					<div>Your Turn</div>
				</div>
			) : (
				<div className="absolute -left-24 flex flex-col items-center text-xl animate__animated animate__bounceOut gap-y-[0.35rem] mb-7">
					<div>
						<i
							className="fa-solid fa-circle-right text-2xl animate-spinX"
							style={{ color: "#D98F00" }}
						></i>
					</div>
					<div>Your Turn</div>
				</div>
			)}

			{turn == "cpu" ? (
				<div className="absolute -right-24 flex flex-col items-center text-xl animate__animated animate__bounceIn gap-y-[0.35rem] mb-7">
					<div>
						<i
							className="fa-solid fa-circle-left text-2xl animate-spinX"
							style={{ color: "#D98F00" }}
						></i>
					</div>
					<div>CPU Turn</div>
				</div>
			) : turn == "cpuwait" ? (
				<div className="absolute -right-24 flex flex-col items-center text-xl animate__animated animate__bounceOut gap-y-[0.35rem] mb-7">
					<div>
						<i
							className="fa-solid fa-circle-left text-2xl animate-spinX"
							style={{ color: "#D98F00" }}
						></i>
					</div>
					<div>CPU Turn</div>
				</div>
			) : null}
			<div className="w-32 h-32 relative">
				<img
					src={
						profile?.selectedChar == "mr-king"
							? mrKing
							: profile?.selectedChar == "mrs-party"
							? mrsParty
							: profile?.selectedChar == "azure-explosiomancer"
							? azureExplosiomancer
							: profile?.selectedChar == "crimson-specter"
							? crimsonSpecter
							: profile?.selectedChar == "normal-guy"
							? normalGuy
							: profile?.selectedChar == "owen"
							? owen
							: profile?.selectedChar == "smoldering-detonation"
							? smolderingDetonation
							: profile?.selectedChar == "vampiric-blaster"
							? vampiricBlaster
							: defaultChar
					}
					className={`${wobbleSelf && "animate__animated animate__wobble"} ${
						shakeSelf && "animate__animated animate__shakeX"
					} rotate-[10deg]`}
				/>
			</div>
			<div className="flex flex-col justify-end pb-7">
				<div className="text-2xl flex justify-between px-4 mb-1">
					<div className="flex">
						HP :{" "}
						<animated.div className="number">
							{props.val.interpolate((val) => Math.floor(val))}
						</animated.div>
					</div>
					<div>{profile?.username?.toUpperCase()}</div>
				</div>
				<div className="h-6 w-[25rem] bg-black rounded-2xl border">
					<div
						className="h-full rounded-2xl duration-1000"
						style={{
							width: `${hp / 10}%`,
							backgroundColor: `${
								hp > 500 ? "#2EFF0C" : hp > 250 ? "#FFAC0C" : "#ff0c0c"
							}`,
						}}
					></div>
				</div>
			</div>
			<div className="flex items-end pb-[1.375rem] text-7xl">VS</div>
			<div className="flex flex-col justify-end pb-7">
				<div className="text-2xl flex justify-between px-4 mb-1">
					<div>{gameMode}</div>
					<div className="flex">
						HP :{" "}
						<animated.div className="number">
							{props2.val.interpolate((val) => Math.floor(val))}
						</animated.div>
					</div>
				</div>
				<div className="h-6 w-[25rem] bg-black rounded-2xl border">
					<div
						className="h-full rounded-2xl duration-1000"
						style={{
							width: `${enemyHp / 10}%`,
							backgroundColor: `${
								enemyHp > 500
									? "#2EFF0C"
									: enemyHp > 250
									? "#FFAC0C"
									: "#ff0c0c"
							}`,
						}}
					></div>
				</div>
			</div>
			<div className="w-32 h-32" style={{ transform: "scaleX(-1)" }}>
				<img
					src={
						gameMode == "IMPOSSIBLE"
							? mrKing
							: gameMode == "HARD"
							? mrsParty
							: gameMode == "MEDIUM"
							? smolderingDetonation
							: defaultChar
					}
					className={`${wobbleCpu && "animate__animated animate__wobble"} ${
						shakeCpu && "animate__animated animate__shakeX"
					} rotate-[10deg]`}
				/>
			</div>
		</div>
	);
}
