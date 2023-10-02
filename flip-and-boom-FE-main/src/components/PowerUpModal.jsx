import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { pause, randomNumber } from "../helpers";
import { fetchBuyItem } from "../actionCreators/payment";

export default function PowerUpModal({
	balance,
	setPu1,
	setPu2,
	setPu3,
	powerup1,
	powerup2,
	powerup3,
	puModal,
	setPuModal,
	hp,
	setHp,
	animateParent,
	animateChildren,
	setSkipTurn,
	board,
	setBoard,
	setTurn,
}) {
	const dispatch = useDispatch();

	const [errorHp, setErrorHp] = useState(false);
	const [errorBalance, setErrorBalance] = useState(false);
	const [price, setPrice] = useState(0);

	const handleClick = async () => {
		setPuModal(false);

		await pause(1000);

		setPuModal("test");
	};

	const handleClick2 = (e) => {
		e.stopPropagation();
	};

	const handlePowerUp = async () => {
		switch (puModal) {
			case "pu1":
				if (balance < price) {
					setErrorBalance(true);
					break;
				}

				dispatch(fetchBuyItem({ ItemId: null, price }));

				if (hp > 900) {
					setErrorHp(true);
					break;
				}

				await handleClick();

				setHp(hp + 100);

				setPu1(false);

				break;

			case "pu2":
				if (balance < price) {
					setErrorBalance(true);
					break;
				}

        dispatch(fetchBuyItem({ ItemId: null, price }));

				await handleClick();

				setSkipTurn(true);

				setPu2(false);

				break;

			default:
				if (balance < price) {
					setErrorBalance(true);
					break;
				}

        dispatch(fetchBuyItem({ ItemId: null, price }));

				const clonedBoard = structuredClone(board);

				const boardToRandomized = clonedBoard.filter(
					(el) => el?.shown && el?.value != "bomb"
				);

				const randomCard = boardToRandomized?.splice(
					randomNumber(boardToRandomized),
					1
				)[0];

				const secondCard = boardToRandomized?.find(
					(el) => el.value == randomCard.value
				);

				clonedBoard.forEach((el) => {
					if (el.index == randomCard.index || el.index == secondCard.index) {
						el.flash = true;
					}
				});

				await handleClick();

				setTurn("wait");

				setBoard(clonedBoard);

				setPu3(false);

				await pause(2000);

				setTurn("user");

				clonedBoard.forEach((el) => (el.flash = false));

				setBoard(clonedBoard);
				break;
		}
	};

	useEffect(() => {
		puModal == "pu3" ? setPrice(30) : setPrice(10);
	}, []);

	return (
		<>
			<div
				className={`w-full h-full top-0 left-0 absolute bg-[rgba(0,0,0,0.7)] z-30 flex justify-center items-center animate__animated ${animateParent}`}
				onClick={handleClick}
			>
				<div
					className={`w-[37.5%] h-[42.5%] backdrop-blur-[2px] rounded-[5px] text-white font-bold animate__animated ${animateChildren} flex flex-col px-10 justify-center items-center italic tracking-tighter`}
					style={{
						background:
							"linear-gradient(180deg, #251D3A 0%, #323569 99.99%, rgba(37, 29, 58, 0.00) 100%)",
					}}
					onClick={handleClick2}
				>
					{puModal == "test" || puModal == false ? null : (
						<>
							<div className="w-16 h-16 mb-6">
								<img
									src={
										puModal == "pu1"
											? powerup1
											: puModal == "pu2"
											? powerup2
											: powerup3
									}
								/>
							</div>
							<div className="flex w-full">
								<div className="flex flex-1 justify-between pr-2 text-gray-300">
									<div className=" pl-36">POWER UP</div>
									<div>:</div>
								</div>
								<div className="w-[17rem]">
									{puModal == "pu1"
										? "HEAL"
										: puModal == "pu2"
										? "SKIP"
										: "HINT"}
								</div>
							</div>

							<div className="flex w-full">
								<div className="flex flex-1 justify-between pr-2 text-gray-300">
									<div className=" pl-36">DESCRIPTION</div>
									<div>:</div>
								</div>
								<div className="w-[17rem]">
									{puModal == "pu1"
										? "HEAL 100 HP"
										: puModal == "pu2"
										? "SKIP 1 ENEMY'S TURN"
										: "FLASH 2 RANDOM MATCHING CARDS"}
								</div>
							</div>

							<div className="flex w-full">
								<div className="flex flex-1 justify-between pr-2 text-gray-300">
									<div className=" pl-36">PRICE</div>
									<div>:</div>
								</div>
								<div className="w-[17rem]">{price}</div>
							</div>

							<div className="flex w-full">
								<div className="flex flex-1 justify-between pr-2 text-gray-300">
									<div className=" pl-36">YOUR BALANCE</div>
									<div>:</div>
								</div>
								<div className="w-[17rem]">{balance}</div>
							</div>

							<div className="mt-6">DO YOU WANT TO BUY THIS POWER UP ?</div>
							<div className="flex justify-between w-full px-44 mt-2 relative">
								{errorBalance && (
									<h1 className="absolute -left-2 top-[0.75rem] text-red-400 animate__animated animate__jackInTheBox">
										INSUFFICIENT BALANCE
									</h1>
								)}

								{errorHp && (
									<h1 className="absolute -left-4 top-[0.75rem] text-red-400 animate__animated animate__jackInTheBox">
										{"HP MUST BE <= 900"}
									</h1>
								)}

								<button
									type="button"
									className="w-24 p-3 rounded-md hover:bg-[#251D3A] duration-500"
									onClick={handlePowerUp}
								>
									YES
								</button>
								<button
									type="button"
									className="w-24 p-3 rounded-md hover:bg-[#251D3A] duration-500"
									onClick={handleClick}
								>
									CANCEL
								</button>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
}
