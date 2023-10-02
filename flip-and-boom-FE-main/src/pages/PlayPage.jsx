// npm packages
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// components
import GameResult from "../components/GameResult";
import PlayPageHeader from "../components/PlayPageHeader";
import PlayPageArena from "../components/PlayPageArena";
import PlayPageFooter from "../components/PlayPageFooter";

// code snippets to shorten the code in PlayPage
import {
  handleUserCardClick,
  cpuTurnRandom,
  cpuTurnAccurate,
  afterFlip2Card,
  createdLifecycle,
} from "../codeSnippets";

// helpers
import { pause } from "../helpers";

// export default jsx
export default function PlayPage() {
  const navigate = useNavigate();

  // audio setup
  const audioRef = useRef();

  // state from redux
  const { gameMode } = useSelector((state) => state.gameModeReducer);
  const { music } = useSelector((state) => state.settingReducer);

  useEffect(() => {
    music ? (audioRef.current.volume = 0.7) : (audioRef.current.volume = 0);
  }, [music]);

  // collection of useState
  const [board, setBoard] = useState([]);
  const [hp, setHp] = useState(1);
  const [enemyHp, setEnemyHp] = useState(1);
  const [chosenCard, setChosenCard] = useState([]);
  const [turn, setTurn] = useState("user");
  const [totalTurn, setTotalTurn] = useState(0);
  const [showGameResult, setShowGameResult] = useState(false);
  const [skipTurn, setSkipTurn] = useState(false);

  const [throwBomb100, setThrowBomb100] = useState(false);
  const [throwBomb125, setThrowBomb125] = useState(false);
  const [throwBomb150, setThrowBomb150] = useState(false);
  const [throwBomb175, setThrowBomb175] = useState(false);
  const [throwBomb200, setThrowBomb200] = useState(false);
  const [throwBomb210, setThrowBomb210] = useState(false);
  const [throwBomb220, setThrowBomb220] = useState(false);
  const [throwBomb250, setThrowBomb250] = useState(false);
  const [boom, setBoom] = useState(false);

  const [throwBombSelf100, setThrowBombSelf100] = useState(false);
  const [throwBombSelf125, setThrowBombSelf125] = useState(false);
  const [throwBombSelf150, setThrowBombSelf150] = useState(false);
  const [throwBombSelf175, setThrowBombSelf175] = useState(false);
  const [throwBombSelf200, setThrowBombSelf200] = useState(false);
  const [throwBombSelf210, setThrowBombSelf210] = useState(false);
  const [throwBombSelf220, setThrowBombSelf220] = useState(false);
  const [throwBombSelf250, setThrowBombSelf250] = useState(false);
  const [boomSelf, setBoomSelf] = useState(false);

  const [wobbleCpu, setWobbleCpu] = useState(false);
  const [wobbleSelf, setWobbleSelf] = useState(false);
  const [shakeCpu, setshakeCpu] = useState(false);
  const [shakeSelf, setshakeSelf] = useState(false);

  const [throwSound, setThrowSound] = useState(false);

  const [aiMemory, setAiMemory] = useState({
    250: [],
    220: [],
    210: [],
    200: [],
    175: [],
    150: [],
    125: [],
    100: [],
    bomb: [],
  });

  // collection of functions
  const resetChosenCard = () => setChosenCard([]);

  const handleClick = (e) => {
    handleUserCardClick(
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
    );
  };

  // collection of function parameters
  const cpuTurnParameters = {
    board,
    setEnemyHp,
    enemyHp,
    setTurn,
    setHp,
    hp,
    setBoard,
    aiMemory,
    setAiMemory,
    skipTurn,
    setSkipTurn,
    setWobbleSelf,
    setshakeCpu,
    setBoomSelf,
    setBoom,
    setThrowBombSelf100,
    setThrowBombSelf125,
    setThrowBombSelf150,
    setThrowBombSelf175,
    setThrowBombSelf200,
    setThrowBombSelf210,
    setThrowBombSelf220,
    setThrowBombSelf250,
	setThrowSound
  };

  // created lifecycle
  useEffect(() => {
    gameMode == "HOME" && navigate("/home");

    createdLifecycle(setBoard);

    (async () => {
      await pause();
      setTurn("user");
    })();
  }, []);

  // watcher for chosenCard useState
  useEffect(() => {
    chosenCard.length == 2 &&
      afterFlip2Card(
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
      );
  }, [chosenCard]);

  // watcher for turn useState
  useEffect(() => {
    setTotalTurn(totalTurn + 1);

    if (turn == "cpu") {
      switch (gameMode) {
        case "EAZY":
          cpuTurnRandom(cpuTurnParameters);
          break;

        case "MEDIUM":
          Math.ceil(Math.random() * 100) < 25
            ? cpuTurnAccurate(cpuTurnParameters)
            : cpuTurnRandom(cpuTurnParameters);
          break;

        case "HARD":
          Math.ceil(Math.random() * 100) < 60
            ? cpuTurnAccurate(cpuTurnParameters)
            : cpuTurnRandom(cpuTurnParameters);
          break;

        default:
          cpuTurnAccurate(cpuTurnParameters);
          break;
      }
    }
  }, [turn]);

  // watcher for enemyHp useState
  useEffect(() => {
    if (enemyHp <= 0 || hp <= 0) {
      (async () => {
        setTurn("wait");

        await pause();

        setShowGameResult(true);
      })();
    }
  }, [enemyHp, hp]);

  // component that is being returned
  return (
    <>
      <div
        className="min-h-screen h-full w-full flex flex-col cursor-default"
        style={{
          background:
            "linear-gradient(180deg, #251D3A 0%, #323569 99.99%, rgba(37, 29, 58, 0.00) 100%)",
        }}
      >
        {/* show game result after one of the hp reach 0 */}
        {showGameResult && <GameResult hp={hp} totalTurn={totalTurn} />}

        {/* health bar for player and enemy */}
        <PlayPageHeader
          hp={hp}
          enemyHp={enemyHp}
          setHp={setHp}
          setEnemyHp={setEnemyHp}
          turn={turn}
          boom={boom}
          throwBomb100={throwBomb100}
          throwBomb125={throwBomb125}
          throwBomb150={throwBomb150}
          throwBomb175={throwBomb175}
          throwBomb200={throwBomb200}
          throwBomb210={throwBomb210}
          throwBomb220={throwBomb220}
          throwBomb250={throwBomb250}
          boomSelf={boomSelf}
          throwBombSelf100={throwBombSelf100}
          throwBombSelf125={throwBombSelf125}
          throwBombSelf150={throwBombSelf150}
          throwBombSelf175={throwBombSelf175}
          throwBombSelf200={throwBombSelf200}
          throwBombSelf210={throwBombSelf210}
          throwBombSelf220={throwBombSelf220}
          throwBombSelf250={throwBombSelf250}
          wobbleCpu={wobbleCpu}
          wobbleSelf={wobbleSelf}
          shakeCpu={shakeCpu}
          shakeSelf={shakeSelf}
        />

        {/* card playing arena */}
        <PlayPageArena board={board} handleClick={handleClick} />

        {/* footer arena */}
        <PlayPageFooter
          turn={turn}
          hp={hp}
          setHp={setHp}
          setSkipTurn={setSkipTurn}
          board={board}
          setBoard={setBoard}
          setTurn={setTurn}
        />
      </div>
      <audio loop autoPlay ref={audioRef} src="/assets/audio/ingame_BGM.mp3">
        {/* <source src="/assets/audio/ingame_BGM.mp3" type="audio/mp3" /> */}
      </audio>
      {throwSound && (
        <audio autoPlay src="/assets/audio/twinBomb.mp3">
          <source src="/assets/audio/twinBomb.mp3" type="audio/mp3" />
        </audio>
      )}
    </>
  );
}
