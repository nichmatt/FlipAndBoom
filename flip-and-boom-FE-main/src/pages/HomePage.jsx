import CardHomePage from "../components/CardHomePage";

export default function HomePage() {
  return (
    <>
      <div className="hover:cursor-pointer w-full flex h-full ml-[17vw]">
        <div className="flex-1 w-full pt-36 justify-center items-center ">
          <div className="flex justify-center items-center relative">
            <div className="absolute rotate-[-15deg] left-[20vw] top-[14vh] hover:scale-100 hover:left-[15vw] transition-all delay-75 ease-in-out hover:drop-shadow-md">
              <CardHomePage
                urlCard={"/assets/card/citrus.png"}
                urlChar={"/assets/character/default.png"}
                gameMode={"EAZY"}
                colorMode={"#F98800"}
              />
            </div>
            <div className="absolute rotate-[-8deg] left-[32vw] hover:left-[30vw] top-[7vh] hover:z-20 hover:scale-100  transition-all delay-75 ease-in-out">
              <CardHomePage
                urlCard={"/assets/card/amethyst.png"}
                urlChar={"/assets/character/smoldering-detonation.png"}
                gameMode={"MEDIUM"}
                colorMode={"#6306C6"}
              />
            </div>
            <div className="absolute rotate-[8deg] left-[44vw] hover:left-[46vw]  top-[7vh] hover:scale-105 hover:z-20 transition-all delay-75 ease-in-out">
              <CardHomePage
                urlCard={"/assets/card/cerulean.png"}
                urlChar={"/assets/character/mrs-party.png"}
                gameMode={"HARD"}
                colorMode={"#145AC9"}
              />
            </div>
            <div className="absolute rotate-[18deg] left-[56vw] top-[14vh] hover:scale-105 hover:left-[60vw] transition-all delay-75 ease-in-out">
              <CardHomePage
                urlCard={"/assets/card/prismancer.png"}
                urlChar={"/assets/character/mr-king.png"}
                gameMode={"IMPOSSIBLE"}
                colorMode={"#D100FC"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
