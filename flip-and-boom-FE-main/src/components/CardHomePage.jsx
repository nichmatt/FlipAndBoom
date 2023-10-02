import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setGameMode } from "../actionCreators";
import { useState } from "react";
import MiniPopup from "./MiniPopup";

export default function CardHomePage({
  urlCard,
  urlChar,
  gameMode,
  colorMode,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [play, setPlay] = useState(false);

  const handleChange = (stats) => {
    setPlay(stats);
  };

  const handleClick = () => {
    dispatch(setGameMode(gameMode));

    navigate("/play");
  };

  return (
    <>
      <div
        className="relative flex justify-center"
        onClick={handleClick}
        onMouseOver={() => handleChange(true)}
        onMouseOut={() => handleChange(false)}
      >
        <img src={urlCard} alt="card" className="w-[15rem]" />
        <img
          src={urlChar}
          alt="logo"
          className="absolute w-[170px] top-[90px] m-auto"
        />
      </div>
      <div
        className="z-20 text-center absolute top-[73%] w-full text-[1.5rem] font-bold tracking-tighter italic "
        style={{ color: colorMode, textShadow: "0.5px 0.1px 5px" }}
      >
        {gameMode}
      </div>
      {play && (
        <audio autoPlay src="/assets/audio/coin-1.mp3">
          <source src="/assets/audio/coin-1.mp3" type="audio/mp3" />
        </audio>
      )}
    </>
  );
}
