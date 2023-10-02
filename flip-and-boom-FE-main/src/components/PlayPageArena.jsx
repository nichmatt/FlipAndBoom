import CardInPlay from "./CardInPlay";

export default function PlayPageArena({ board, handleClick }) {
	return (
		<>
			<div className="w-10/12 h-[33rem] mx-auto mt-3 bg-[#06060645] rounded-[2rem] border-[6px] border-[#D98F00] flex flex-col justify-center flex-1">
				<div className="grid grid-cols-10 gap-y-6 place-items-center px-4">
					{board.map((card, index) => {
						return (
							<CardInPlay
								key={index}
								card={card?.value}
								shown={card?.shown}
								flip={card?.flip}
								flash={card?.flash}
								index={index}
								handleClick={handleClick}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}
