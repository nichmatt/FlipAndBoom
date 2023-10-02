import { useSelector } from "react-redux";

export default function CardInventory({
  imgUrl,
  itemName,
  itemCategory,
  selectedSkin,
  selectedChar,
  changeSelect,
}) {
  return (
    <section
      className="w-[250px] h-[325px] bg-[rgba(0,0,0,0.3)] rounded-[5px] m-[10px] hover:bg-[rgba(231,231,231,0.3)] duration-300 hover:scale-[1.05]"
      onClick={() => changeSelect(itemCategory, itemName)}
    >
      <div className="w-[80%] m-auto  p-[10px] pt-[30px] flex justify-center">
        <img src={imgUrl} className="max-h-[180px]" alt="item-image" />
      </div>
      <p className="text-white font-semibold italic text-center text-xl mb-[2vh]">
        {itemName}
      </p>
      <div id="price" className="flex justify-center ">
        <div className="text-center py-[7px]  text-white italic font-semibold text-xs ml-[10px] mr-[5px]  bg-[rgba(0,0,0,0.3)] px-[15px] flex items-center">
          {itemCategory}
        </div>
        {selectedSkin === itemName && itemCategory === "skin" ? (
          <p
            style={{ textShadow: "1px 1px 10px" }}
            className="pr-[30px] pl-[10px] py-[3px] text-[#9eff27] italic font-semibold"
          >
            skin used
          </p>
        ) : (
          ""
        )}
        {selectedChar === itemName && itemCategory === "char" ? (
          <p
            style={{ textShadow: "1px 1px 10px" }}
            className="pr-[30px] pl-[10px] py-[3px] text-[#9eff27] italic font-semibold"
          >
            char used
          </p>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
