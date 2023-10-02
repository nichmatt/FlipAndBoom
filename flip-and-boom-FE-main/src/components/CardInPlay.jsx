import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import defaultSkin from "/assets/card/black-card/back-card.png";
import ceruleanSkin from "/assets/card/blue-card/back-card.png";
import prismancerSkin from "/assets/card/purple-card/back-card.png";
import amethystSkin from "/assets/card/purpleblue-card/back-card.png";
import citrusSkin from "/assets/card/orange-card/back-card.png";

import default100 from "/assets/card/black-card/100.png";
import default125 from "/assets/card/black-card/125.png";
import default150 from "/assets/card/black-card/150.png";
import default175 from "/assets/card/black-card/175.png";
import default200 from "/assets/card/black-card/200.png";
import default210 from "/assets/card/black-card/210.png";
import default220 from "/assets/card/black-card/220.png";
import default250 from "/assets/card/black-card/250.png";
import defaultBomb from "/assets/card/black-card/-75.png";

import cerulean100 from "/assets/card/blue-card/100.png";
import cerulean125 from "/assets/card/blue-card/125.png";
import cerulean150 from "/assets/card/blue-card/150.png";
import cerulean175 from "/assets/card/blue-card/175.png";
import cerulean200 from "/assets/card/blue-card/200.png";
import cerulean210 from "/assets/card/blue-card/210.png";
import cerulean220 from "/assets/card/blue-card/220.png";
import cerulean250 from "/assets/card/blue-card/250.png";
import ceruleanBomb from "/assets/card/blue-card/-75.png";

import prismancer100 from "/assets/card/purple-card/100.png";
import prismancer125 from "/assets/card/purple-card/125.png";
import prismancer150 from "/assets/card/purple-card/150.png";
import prismancer175 from "/assets/card/purple-card/175.png";
import prismancer200 from "/assets/card/purple-card/200.png";
import prismancer210 from "/assets/card/purple-card/210.png";
import prismancer220 from "/assets/card/purple-card/220.png";
import prismancer250 from "/assets/card/purple-card/250.png";
import prismancerBomb from "/assets/card/purple-card/-75.png";

import amethyst100 from "/assets/card/purpleblue-card/100.png";
import amethyst125 from "/assets/card/purpleblue-card/125.png";
import amethyst150 from "/assets/card/purpleblue-card/150.png";
import amethyst175 from "/assets/card/purpleblue-card/175.png";
import amethyst200 from "/assets/card/purpleblue-card/200.png";
import amethyst210 from "/assets/card/purpleblue-card/210.png";
import amethyst220 from "/assets/card/purpleblue-card/220.png";
import amethyst250 from "/assets/card/purpleblue-card/250.png";
import amethystBomb from "/assets/card/purpleblue-card/-75.png";

import citrus100 from "/assets/card/orange-card/100.png";
import citrus125 from "/assets/card/orange-card/125.png";
import citrus150 from "/assets/card/orange-card/150.png";
import citrus175 from "/assets/card/orange-card/175.png";
import citrus200 from "/assets/card/orange-card/200.png";
import citrus210 from "/assets/card/orange-card/210.png";
import citrus220 from "/assets/card/orange-card/220.png";
import citrus250 from "/assets/card/orange-card/250.png";
import citrusBomb from "/assets/card/orange-card/-75.png";

export default function CardInPlay({
	handleClick,
	card,
	index,
	shown,
	flip,
	flash,
}) {
	const { profile } = useSelector((state) => state.userReducer);

	const [canPlay, setCanplay] = useState(false);
	const [urlAudio, setUrlAudio] = useState("");
	const list = [
		"card-flip-1.mp3",
		"card-flip-2.mp3",
		"card-flip-3.mp3",
		"card-flip-4.mp3",
	];
	const randomAudio = () => {
		let index = Math.floor(Math.random() * 4);
		setUrlAudio(list[index]);
	};


	useEffect(() => {
		flip ? (card === "bomb" ? setUrlAudio("boom.mp3") : randomAudio()) : "";
		flip ? setCanplay(true) : setCanplay(false);
	}, [flip]);
	if (shown) {
		return (
			<div
				onClick={handleClick}
				className="w-[6.35rem] h-36 bg-transparent hover:scale-105 cursor-pointer duration-200"
				value={card}
				index={index}
				style={{ perspective: "1000px" }}
			>
				<div
					className={`flip-card-inner relative w-full h-full ${
						flash
							? "outline-2 outline-white outline animate-lumayan2"
							: "duration-[1234ms]"
					}  `}
					style={
						flip
							? { transformStyle: "preserve-3d", transform: "rotateY(180deg)" }
							: { transformStyle: "preserve-3d" }
					}
				>
					<div
						className="flip-card-front text-black absolute w-full h-full flex flex-col justify-center items-center"
						style={{
							backfaceVisibility: "hidden",
							WebkitBackfaceVisibility: "hidden",
							MozBackfaceVisibility: "hidden",
						}}
					>
						<img
							src={
								profile?.selectedSkin == "cerulean"
									? ceruleanSkin
									: profile?.selectedSkin == "amethyst"
									? amethystSkin
									: profile?.selectedSkin == "citrus"
									? citrusSkin
									: profile?.selectedSkin == "prismancer"
									? prismancerSkin
									: defaultSkin
							}
						/>
					</div>
					<div
						className="flip-card-back text-white absolute w-full h-full flex justify-center items-center"
						style={{
							transform: "rotateY(180deg)",
							backfaceVisibility: "hidden",
							WebkitBackfaceVisibility: "hidden",
							MozBackfaceVisibility: "hidden",
						}}
					>
						{profile?.selectedSkin == "cerulean" ? (
							<img
								src={
									card == 100
										? cerulean100
										: card == 125
										? cerulean125
										: card == 150
										? cerulean150
										: card == 175
										? cerulean175
										: card == 200
										? cerulean200
										: card == 210
										? cerulean210
										: card == 220
										? cerulean220
										: card == 250
										? cerulean250
										: ceruleanBomb
								}
							/>
						) : profile?.selectedSkin == "amethyst" ? (
							<img
								src={
									card == 100
										? amethyst100
										: card == 125
										? amethyst125
										: card == 150
										? amethyst150
										: card == 175
										? amethyst175
										: card == 200
										? amethyst200
										: card == 210
										? amethyst210
										: card == 220
										? amethyst220
										: card == 250
										? amethyst250
										: amethystBomb
								}
							/>
						) : profile?.selectedSkin == "citrus" ? (
							<img
								src={
									card == 100
										? citrus100
										: card == 125
										? citrus125
										: card == 150
										? citrus150
										: card == 175
										? citrus175
										: card == 200
										? citrus200
										: card == 210
										? citrus210
										: card == 220
										? citrus220
										: card == 250
										? citrus250
										: citrusBomb
								}
							/>
						) : profile?.selectedSkin == "prismancer" ? (
							<img
								src={
									card == 100
										? prismancer100
										: card == 125
										? prismancer125
										: card == 150
										? prismancer150
										: card == 175
										? prismancer175
										: card == 200
										? prismancer200
										: card == 210
										? prismancer210
										: card == 220
										? prismancer220
										: card == 250
										? prismancer250
										: prismancerBomb
								}
							/>
						) : (
							<img
								src={
									card == 100
										? default100
										: card == 125
										? default125
										: card == 150
										? default150
										: card == 175
										? default175
										: card == 200
										? default200
										: card == 210
										? default210
										: card == 220
										? default220
										: card == 250
										? default250
										: defaultBomb
								}
							/>
						)}
					</div>
				</div>
				{canPlay ? (
					<audio autoPlay src={`/assets/audio/${urlAudio}`}></audio>
				) : (
					<audio muted src=""></audio>
				)}
			</div>
		);
	}


	return <div className="w-20 h-32"></div>;
}
