import { useSelector } from "react-redux";
import { useState } from "react";

import powerup1 from "/power-up/powerup-01.svg";
import powerup2 from "/power-up/powerup-02.svg";
import powerup3 from "/power-up/powerup-03.svg";

import PowerUpModal from "./PowerUpModal";

export default function PlayPageFooter({
	turn,
	hp,
	setHp,
	setSkipTurn,
	board,
	setBoard,setTurn
}) {
	const { profile } = useSelector((state) => state.userReducer);

	const [puModal, setPuModal] = useState("test");

	const [pu1, setPu1] = useState(true);
	const [pu2, setPu2] = useState(true);
	const [pu3, setPu3] = useState(true);

	const handleClick = (name) => {
		if (turn != "user") return;

		setPuModal(name);

		return;
	};

	return (
		<>
			{(puModal == "pu1" || puModal == "pu2" || puModal == "pu3") && (
				<PowerUpModal
					balance={profile?.balance}
					setPu1={setPu1}
					setPu2={setPu2}
					setPu3={setPu3}
					powerup1={powerup1}
					powerup2={powerup2}
					powerup3={powerup3}
					puModal={puModal}
					setPuModal={setPuModal}
					hp={hp}
					setHp={setHp}
					animateParent={"animate__fadeIn"}
					animateChildren={"animate__slideInDown"}
					setSkipTurn={setSkipTurn}
					board={board}
					setBoard={setBoard}
          setTurn={setTurn}
				/>
			)}
			{puModal == false && (
				<PowerUpModal
					balance={profile?.balance}
					setPu1={setPu1}
					setPu2={setPu2}
					setPu3={setPu3}
					powerup1={powerup1}
					powerup2={powerup2}
					powerup3={powerup3}
					puModal={puModal}
					setPuModal={setPuModal}
					hp={hp}
					setHp={setHp}
					animateParent={"animate__fadeOut"}
					animateChildren={"animate__slideOutUp"}
					setSkipTurn={setSkipTurn}
					board={board}
					setBoard={setBoard}
          setTurn={setTurn}
				/>
			)}
			<div className="w-full h-24 mt-5 flex flex-col flex-1 justify-center">
				<div className="w-full"></div>
				<div className="flex justify-between px-20 items-center h-full border-t-[#D98F00] border-t-2 pt-2">
					<div
						className="flex font-semibold text-2xl"
						style={{ textShadow: "0.5px 0.1px 5px" }}
					>
						<i className="fa-solid fa-money-bill-1-wave text-[#ffb800] py-[4px]"></i>
						<p className="pl-[10px] text-[#ffb800] italic">:</p>
						<p className="pr-[30px] pl-[10px] text-[#ffb800] italic">
							{profile?.balance}
						</p>
					</div>
					<div className="flex gap-x-6 items-center">
						<h1
							className="text-[#ffb800] italic font-semibold text-2xl"
							style={{ textShadow: "1px 1px 10px" }}
						>
							POWER UPS
						</h1>
						<div className="w-14 h-14 cursor-pointer duration-500 hover:scale-[1.75] hover:-translate-y-4">
							{pu1 && (
								<img
									src={powerup1}
									onClick={() => {
										handleClick("pu1");
									}}
								/>
							)}
						</div>
						<div className="w-14 h-14 cursor-pointer duration-500 hover:scale-[1.75] hover:-translate-y-4">
							{pu2 && (
								<img
									src={powerup2}
									onClick={() => {
										handleClick("pu2");
									}}
								/>
							)}
						</div>
						<div className="w-14 h-14 cursor-pointer duration-500 hover:scale-[1.75] hover:-translate-y-4">
							{pu3 && (
								<img
									src={powerup3}
									onClick={() => {
										handleClick("pu3");
									}}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
