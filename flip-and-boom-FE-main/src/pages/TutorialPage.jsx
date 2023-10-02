import { useEffect, useState } from "react";
import { EmblaCarousel } from "../components/EmblaCarousel";

const tutorialMessage = [
  "click the card to flip it around, each turn you can flip 2 cards on the field",
  "match 2 cards with the same symbol the number on the cards will be the damage to your opponent",
  "be careful for there are some traps on the field",
  "you can also use some power ups on the right bottom corner, HEAL: Heal 100 hp, SKIP: Skip 1 enemy's turn, HINT: Flash 2 card with the same symbol randomly",
];

export default function TutorialPage() {
  const [message, setMessage] = useState(0);
  return (
    <section
      className="max-h-[100vh] w-[100vw] "
      style={{
        marginTop: "30px",
      }}
    >
      <div style={{ display: "flex" }}>
        <div
          className=" w-[60vw] mt-[5vw] ml-[30Vw] bg-[rgba(0,0,0,0.50)] rounded-md px-[30px] py-[5vh]"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <div className="text-white  text-center m-auto ">
            <div className="text-3xl font-bold italic mt-[10px]">
              HOW TO PLAY
            </div>
            <EmblaCarousel message={message} setMessage={setMessage} />
            <div className=" w-[60%] text-center mx-auto">
              {tutorialMessage[message]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
